# backend/app/routes/router.py
from fastapi import APIRouter
from app.routes import vehicles, bookings, payments

api_router = APIRouter()

# Registering your sub-routes to keep main.py clean
# This groups your endpoints under clear paths: /vehicles, /bookings, /payments
api_router.include_router(vehicles.router, prefix="/vehicles", tags=["vehicles"])
api_router.include_router(bookings.router, prefix="/bookings", tags=["bookings"])
api_router.include_router(payments.router, prefix="/payments", tags=["payments"])