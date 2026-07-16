# backend/app/core/config.py
import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Lefatshe Fleet API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "" # We left this blank since we are using root-level routing!

    # These are populated from your backend/.env file
    SUPABASE_URL: str = os.getenv("SUPABASE_URL", "")
    SUPABASE_KEY: str = os.getenv("SUPABASE_KEY", "")
    STRIPE_SECRET_KEY: str = os.getenv("STRIPE_SECRET_KEY", "")

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

settings = Settings()