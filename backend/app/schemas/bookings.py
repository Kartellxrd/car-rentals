# backend/app/schemas/bookings.py
from pydantic import BaseModel, Field
from datetime import datetime

# Schema for incoming checkout requests from the user
class BookingCreate(BaseModel):
    vehicle_id: str
    client_name: str
    client_phone: str = Field(..., min_length=7, examples=["+26771234567"])
    rental_days: int = Field(..., gt=0, examples=[3])
    start_date: datetime
    end_date: datetime

# Schema for full booking records returned from the database
class BookingResponse(BaseModel):
    id: str
    vehicle_id: str
    client_name: str
    client_phone: str
    rental_days: int
    rental_total_paid: float
    deposit_amount: float
    deposit_status: str
    status: str
    is_paid: bool
    created_at: datetime

    class Config:
        from_attributes = True