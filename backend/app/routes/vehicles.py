# backend/app/routes/vehicles.py
from fastapi import APIRouter, HTTPException
from typing import List
from app.core.supabase import supabase_client
from app.schemas.vehicles import VehicleCreate, VehicleResponse

router = APIRouter()

@router.get("/", response_model=List[VehicleResponse])
def get_fleet():
    """
    Retrieve all operational cars listed in your Supabase fleet database.
    """
    try:
        # Fetching all records from the vehicles table sorted by newest first
        response = supabase_client.table("vehicles").select("*").order("created_at", desc=True).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch fleet from Supabase: {str(e)}")

@router.post("/", response_model=VehicleResponse)
def add_car_to_fleet(car: VehicleCreate):
    """
    Allows the administrative console to register a new vehicle.
    """
    try:
        data = car.model_dump()
        # Insert raw data; database trigger automatically calculates security_deposit to match daily_rate!
        response = supabase_client.table("vehicles").insert(data).execute()
        
        if not response.data:
            raise HTTPException(status_code=400, detail="Database insertion returned empty dataset.")
            
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Rejected by database layer: {str(e)}")