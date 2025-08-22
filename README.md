# Snappy Tools (Next.js App)

A multi-tool web app built with Next.js 14 (App Router), TypeScript, Material UI, and Supabase. It includes a Split Bill calculator with persistence, an LED text board, a sync clock, and basic user authentication.

For the legacy Vite-based implementation, see the react-vite branch.The latest Next.js codebase is not publicly available.

## Demo

[https://snappytools-next.vercel.app/](https://snappytools-next.vercel.app/)

## 🚀 Features

- Split Bill
  - Multiple participants and expenses
  - Optional exchange rate conversion (base/target currency, toggle single currency)
  - Calculated result matrix with debt simplification
  - Draft mode (localStorage) and edit/view pages for saved bills
- LED Board
  - Mobile-friendly LED-style scrolling text with configurable message, speed, size, and colors
- Sync Clock
  - Simple synced time display; server-side Korea time helper API
- Auth (Supabase)
  - Sign up, email verification, sign in, sign out
  - Cookie-based SSR session via @supabase/ssr
- Pages: Home, Login, Records, Settings

## 🧩 Tech Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- UI: MUI v7, Emotion, SASS
- Backend: Supabase (Database + Auth)
- Utilities: dayjs, axios, i18next

## 📦 Scripts

- dev: next dev -p 4321 (http://localhost:4321)
- build: next build
- start: next start
- lint: next lint

## 🔧 Environment Variables

Create a `.env.local` in the project root:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# Used to build redirect URLs on the server (auth callback, etc.)
NEXT_PUBLIC_SITE_URL=http://localhost:4321
```

You can also copy from `.env.example`.

## 🗂️ Key Routes

- App pages
  - `/` Home
  - `/login` Login
  - `/ledboard` LED board
  - `/splitbill` Draft calculator (local only)
  - `/splitbill/edit/[id]` Edit a saved bill
  - `/splitbill/view/[id]` View a saved bill
  - `/syncclock` Sync clock demo
  - `/auth/callback` Auth callback
- API endpoints
  - `GET /api/korea-time` Current Korea time (UTC+9)
  - Split Bill (auth required)
    - `GET /api/splitbill` list bills of current user
    - `POST /api/splitbill` create a bill
    - `GET /api/splitbill/[id]` get a bill
    - `PUT /api/splitbill/[id]` update a bill
    - `DELETE /api/splitbill/[id]` delete a bill
  - Auth
    - `POST /api/auth/signup`
    - `POST /api/auth/signin`
    - `POST /api/auth/signout`
    - `GET /api/auth/user`
    - `GET /api/auth/verify` verify a bearer token

## 🗃️ Database (Supabase)

The app stores split bills in Supabase. Run the SQL files in `sql/` (in order) using the Supabase SQL editor:

1. `01_create_table.sql` — creates `bills` table:
   - id (uuid, PK), title, participants (jsonb), expenses (jsonb)
   - exchange_rate (decimal), base_currency, target_currency, use_single_currency (boolean)
   - owner_id (uuid -> auth.users), created_at, updated_at
2. `02_create_indexes.sql` — indexes on owner_id and created_at
3. `03_enable_rls.sql` — enable Row Level Security
4. `04_create_policies.sql` — RLS policies so users can only access their own rows
5. `05_create_trigger.sql` — trigger to maintain updated_at

Notes

- Authentication is required for all Split Bill API routes. Sessions are handled via cookies using `@supabase/ssr`.
- Ensure your project URL and anon key are set in `.env.local`.

## 🧠 Split Bill calculation

Core logic converts expenses into the base currency using the provided exchange rate, splits each expense among buyers, aggregates balances, then applies a simple debt simplification pass to reduce cycles.

Inputs

- participants: string[]
- expenses: array of items with payer, buyers, amount, currency
- baseCurrency, targetCurrency, exchangeRate, settle currency toggle

Outputs

- Result matrix: { [debtor]: { [creditor]: amount } }

## 🏁 Getting Started

1. Install dependencies

```bash
npm install
```

2. Configure environment

- Copy `.env.example` to `.env.local` and fill values
- Optional: set NEXT_PUBLIC_SITE_URL for correct redirect URLs

3. Initialize database (Supabase)

- Run the SQL files in `sql/` (01 → 05) in Supabase SQL Editor

4. Run the app

```bash
npm run dev
```

Open http://localhost:4321

## 🧭 Project Structure (partial)

```
src/
	app/
		api/
			auth/ ...         # signup/signin/signout/user/verify
			korea-time/ ...   # server-side Korea time helper
			splitbill/ ...    # CRUD for bills (auth required)
		ledboard/
		splitbill/
			edit/[id]/
			view/[id]/
		syncclock/
	components/
	context/              # Auth & Split contexts
	features/
		ledboard/
		splitbill/
		settings/
		login/
		syncclock/
	utils/
```

## 🔒 Auth Flow

- Sign up → email verification required
- Sign in with password; SSR session maintained via cookies
- `NEXT_PUBLIC_SITE_URL` is used on the server to build callback and redirect URLs

## 🧪 Linting

ESLint with `eslint-config-next` is configured. Run:

```bash
npm run lint
```

## 🗺️ Roadmap

- Export split bill results (CSV / image)
- Shareable links and public view mode
- More LED fonts and effects
- Caching/performance improvements
- Tests (unit/integration)

## 📄 License

No license file is provided in this repository. Add one if you intend to open source.
