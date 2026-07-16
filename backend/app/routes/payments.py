# backend/app/routes/payments.py
import stripe
from fastapi import APIRouter, HTTPException
from app.core.config import settings
from app.core.supabase import supabase_client
from app.schemas.bookings import BookingCreate

# Initialize Stripe key from verified configs
stripe.api_key = settings.STRIPE_SECRET_KEY
router = APIRouter()

@router.post("/checkout")
def initialize_checkout(payload: BookingCreate):
    """
    Creates a secure Stripe Hosted checkout URL for the client's booking transaction.
    """
    try:
        # 1. Pull vehicle details from Supabase to prevent rate-tampering on frontend
        vehicle = supabase_client.table("vehicles").select("*").eq("id", payload.vehicle_id).single().execute()
        if not vehicle.data:
            raise HTTPException(status_code=404, detail="Selected fleet vehicle not found.")
            
        rate = float(vehicle.data["daily_rate"])
        total_price = rate * payload.rental_days
        
        # 2. Spin up a secure Stripe Checkout Session (using ZAR / USD depending on your account setup)
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'usd', # Or 'zar' to process ZAR on standard accounts
                    'product_data': {
                        'name': f"Rental Fee: {vehicle.data['make']} {vehicle.data['model']}",
                        'description': f"Active booking period: {payload.rental_days} Days",
                    },
                    'unit_amount': int(total_price * 100), # Stripe accepts values in cents
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url='http://localhost:3000/booking/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url='http://localhost:3000/',
        )
        
        # 3. Insert the booking contract details into Supabase with "Pending" status
        booking_data = {
            "vehicle_id": payload.vehicle_id,
            "client_name": payload.client_name,
            "client_phone": payload.client_phone,
            "rental_days": payload.rental_days,
            "rental_total_paid": total_price,
            "deposit_amount": float(vehicle.data["security_deposit"]),
            "stripe_payment_intent_id": session.id, # Link temporary session reference
            "status": "Pending",
            "start_date": payload.start_date.isoformat(),
            "end_date": payload.end_date.isoformat()
        }
        
        supabase_client.table("bookings").insert(booking_data).execute()
        
        return {"checkoutUrl": session.url, "stripeSessionId": session.id}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Could not initialize checkout: {str(e)}")