# backend/app/schemas/vehicles.py
from pydantic import BaseModel, Field
from typing import Optional

# Base fields shared for both input and output
class VehicleBase(BaseModel):
    make: str = Field(..., min_length=1, examples=["Honda"])
    model: str = Field(..., min_length=1, examples=["Fit Hybrid"])
    year: str = Field(..., pattern=r"^\d{4}$", examples=["2018"]) # Enforces exactly 4 digits
    license_plate: str = Field(..., min_length=3, examples=["B 123 ABG"])
    daily_rate: float = Field(..., gt=0, examples=[400.00])
    image_url: Optional[str] = None

# Schema for incoming data when adding a car (daily_rate is provided, trigger handles deposit)
class VehicleCreate(VehicleBase):
    pass

# Schema for outgoing data returned to the frontend
class VehicleResponse(VehicleBase):
    id: str
    security_deposit: float
    status: str

    class Config:
        from_attributes = True # Allows Pydantic to parse raw Supabase dict arrays automatically