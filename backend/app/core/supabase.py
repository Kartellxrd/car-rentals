# backend/app/core/supabase.py

from supabase import create_client, Client
from app.core.config import settings

# Safety check: Prevent startup if keys are not configured
if not settings.SUPABASE_URL or not settings.SUPABASE_KEY:
    raise RuntimeError(
        "CRITICAL STARTUP ERROR: Supabase credentials are missing!\n"
        "Please check that SUPABASE_URL and SUPABASE_KEY are defined in your backend/.env file."
    )

# Initialize and export the global client instance
# Since we are using the admin secret key (sb_secret_...), this client bypasses RLS safely on the backend!
supabase_client: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)