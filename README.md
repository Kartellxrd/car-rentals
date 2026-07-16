Here is a complete, production-ready `README.md` (which you can name `car-rental.md` and push directly to GitHub). It is fully formatted with GitHub-flavored Markdown, clean design badges, and structures that will make your repository look highly professional to both investors and tech recruiters.

---

# 📑 Lefatshe Fleet SaaS (Enterprise Car Rental Engine)

A lightweight, data-optimized, enterprise-grade fleet management and booking platform engineered for car rental operators in Botswana. This system eliminates the operational chaos of manual WhatsApp and Facebook workflows by providing a centralized, secure digital garage, dynamic deposit management, and structured handover workflows.

---

## 🛑 The Problem: Why WhatsApp & Facebook Workflows Are Costing Operators Money

Most local car rental operators run their entire business through Facebook pages and manual WhatsApp threads. While convenient initially, this approach creates major operational bottlenecks:

* **The Double-Booking Nightmare:** No single source of truth for inventory. Two agents can easily promise the same Honda Fit on the same weekend.
* **Asset Vulnerability:** Vehicles are rented out with unresolved mechanical issues or low fuel because there is no structured checkout protocol.
* **Deposit Friction:** Tracking, holding, and manually calculating security deposits leads to accounting errors and customer disputes.
* **Operational Burnout:** Operators must stay awake 24/7 to manually verify driver's licenses and process booking confirmations.

**Lefatshe Fleet** solves this by acting as a tireless digital employee—processing bookings, securing deposits, isolating tenant data, and managing vehicle lifecycles 24/7.

---

## 🛠️ Tech Stack & Architecture

This platform is engineered from the ground up to be ultra-lightweight, ensuring lightning-fast loading speeds even on basic local mobile data networks.

* **Frontend Framework:** Next.js 15 (App Router) with Tailwind CSS v4.
* **Backend API Gateway:** FastAPI (Python) for rapid schema validation and multi-part document parsing.
* **Database Engine:** PostgreSQL hosted on Supabase, featuring strict Row-Level Security (RLS) to isolate operator accounts.
* **Cloud Storage:** Supabase Storage buckets for vehicle assets and customer driver's licenses.

```
                  ┌────────────────────────┐
                  │ Next.js 15 App Client  │
                  └───────────┬────────────┘
                              │ HTTPS / JSON
                              ▼
                  ┌────────────────────────┐
                  │  FastAPI Backend API   │
                  └───────────┬────────────┘
                              │ psycopg / SQL
                              ▼
                  ┌────────────────────────┐
                  │ PostgreSQL (Supabase)  │
                  └────────────────────────┘

```

---

## 📁 Project Directory Structure

```text
lefatshe-fleet/
├── frontend/                  # Next.js 15 Frontend
│   ├── src/
│   │   ├── app/               # Next.js App Router Pages
│   │   │   ├── layout.tsx     # Global Providers and Frame
│   │   │   ├── page.tsx       # Public Fleet Catalog
│   │   │   ├── admin/         # Control Panel (Active Contracts, Fleet HUD)
│   │   │   └── booking/       # Checkout, Document Upload Flow
│   │   ├── components/        # Reusable UI Tokens (Card, Badge, Button, Modal)
│   │   └── lib/               # Supabase JS Client & Utilities
│   ├── tailwind.config.js     # System Theme Configurations (Pula Teal, Slate Dark)
│   └── package.json
│
├── backend/                   # FastAPI Python Gateway
│   ├── app/
│   │   ├── main.py            # API Gateway Entrypoint
│   │   ├── api/               # Router Endpoints (vehicles, bookings, checkouts)
│   │   ├── core/              # Config, Security, and Supabase init
│   │   ├── models/            # Pydantic Schemas & Data Validation
│   │   └── services/          # Business logic, WhatsApp hooks, Telemetry feed
│   ├── requirements.txt
│   └── Dockerfile
│
└── supabase/                  # Database Migrations & Security Configurations
    ├── migrations/            # SQL Schema Tables & Indexes
    └── policies.sql           # Row-Level Security (RLS) Tenant Isolation

```

---

## 📐 Database Schema & Entities

The system uses a highly relational PostgreSQL structure optimized for fast reads.

### 1. `companies` (Tenants)

* `id` (UUID, Primary Key)
* `name` (Text)
* `whatsapp_phone` (Text) — Used to trigger dynamic customer alerts.
* `created_at` (Timestamp)

### 2. `vehicles` (Fleet Inventory)

* `id` (UUID, Primary Key)
* `company_id` (UUID, Foreign Key $\rightarrow$ `companies.id`)
* `make` (Text)
* `model` (Text)
* `license_plate` (Text, Unique)
* `daily_rate` (Numeric) — Dynamic deposit matches this value ($1\text{x}$ multiple).
* `status` (Enum: `Available`, `On Road`, `In Maintenance`)
* `image_url` (Text) — Direct URL path to Supabase Storage bucket.

### 3. `bookings` (Rental Contracts)

* `id` (UUID, Primary Key)
* `vehicle_id` (UUID, Foreign Key $\rightarrow$ `vehicles.id`)
* `client_name` (Text)
* `client_license_url` (Text) — Reference to uploaded license file.
* `start_date` (Timestamp)
* `end_date` (Timestamp)
* `deposit_amount` (Numeric)
* `status` (Enum: `Pending`, `Active`, `Completed`, `Cancelled`)

---

## 🎨 UI/UX Design System Tokens

| Element | Specification / Token | System Purpose |
| --- | --- | --- |
| **Primary Theme** | `Slate Dark (#0F172A)` | Establishes a premium, secure corporate aesthetic. |
| **Brand Accent** | `Pula Teal (#008080)` | Interactive indicators, CTA buttons, and highlighted frames. |
| **State Alerts** | `Emerald-500` (Available) / `Amber-500` (Caution/Refund) / `Rose-500` (Maintenance) | Delivers instant operational context at a single glance. |
| **Typography** | `-apple-system`, `BlinkMacSystemFont`, `Inter` | Zero-weight system font stack optimized for low mobile data load. |

---

## 🚀 Execution Sprints

```
┌────────────────────────────────────────────────────────┐
│ SPRINT 1: Setup database, tables, storage, and auth.   │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ SPRINT 2: Build API endpoints and public vehicle grid. │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ SPRINT 3: Code image uploads and handover checklists.  │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ SPRINT 4: Deploy, run edge tests on mobile networks.   │
└────────────────────────────────────────────────────────┘

```

---

## 🤝 Getting Started

### Prerequisites

* Python 3.11+
* Node.js 18+
* A Supabase Project Account

### Backend Configuration

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload

```

### Frontend Configuration

```bash
cd frontend
npm install
npm run dev

```

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more informatio
---

