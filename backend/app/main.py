# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.routes.router import api_router

# Initialize the FastAPI core instance
app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    docs_url="/docs"  # This enables the Swagger UI at /docs
)

# Configure CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# REGISTER THE CENTRAL ROUTER FIRST
app.include_router(api_router)

# ADD THIS ROOT ROUTE TO STOP THE "NOT FOUND" ERROR!
@app.get("/")
def read_root():
    """
    Root landing point for API verification.
    """
    return {
        "status": "operational",
        "service": "Lefatshe Fleet API Engine",
        "developer_status": "Legendary Gabs Dev",
        "interactive_docs": "Go to /docs to play with the endpoints!"
    }