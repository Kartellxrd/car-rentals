# backend/app/routes/bookings.py
from fastapi import APIRouter, HTTPException, Response
from app.core.supabase import supabase_client

router = APIRouter()

@router.get("/{booking_id}/receipt")
def generate_downloadable_receipt(booking_id: str):
    """
    Generates and returns a downloadable, clean plain-text receipt for the user.
    """
    try:
        # Join the bookings table with vehicles table using Supabase foreign key select syntax
        booking = supabase_client.table("bookings").select("*, vehicles(*)").eq("id", booking_id).single().execute()
        
        if not booking.data:
            raise HTTPException(status_code=404, detail="Requested booking statement not found.")
        
        b = booking.data
        car = b["vehicles"]
        
        receipt_text = f"""
============================================
           LEFATSHE FLEET SERVICES
       Gaborone, Botswana Terminal
============================================
BOOKING REFERENCE : {b['id']}
DATE GENERATED    : {b['created_at']}
CLIENT NAME       : {b['client_name']}
CLIENT CONTACT    : {b['client_phone']}

VEHICLE DEPLOYED:
--------------------------------------------
VEHICLE MODEL     : {car['make']} {car['model']} ({car['year']})
LICENSE PLATE     : {car['license_plate']}

FINANCIAL TRANSCRIPT:
--------------------------------------------
RENTAL SCALE      : {b['rental_days']} Days @ P{car['daily_rate']}/day
TOTAL PAYMENT     : P{b['rental_total_paid']} (CAPURED ONLINE VIA STRIPE)
SECURITY DEPOSIT  : P{b['deposit_amount']} (PRE-AUTHORIZED HOLD AT COUNTER)

CONTRACT STATUS   : {b['status']}
============================================
   Thank you for renting with Lefatshe Fleet!
============================================
"""
        return Response(
            content=receipt_text,
            media_type="text/plain",
            headers={
                "Content-Disposition": f"attachment; filename=Lefatshe-Receipt-{booking_id[:8]}.txt"
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to compile payment receipt: {str(e)}")