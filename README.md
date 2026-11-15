# BorrowDesk UI

React + Vite borrower operations workspace based on the 12 supplied BorrowDesk screen references.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Configure `VITE_API_BASE_URL` (default `http://localhost:8081`) and `VITE_ORG_ID` (default `1`). The borrower service must allow the frontend origin through its existing CORS configuration. This project does not modify backend code or configuration.

## Backend integration

Organization-scoped requests use `/api/v1/organizations/{org}`; security master reads use `/api/v1/securities`. The frontend consumes borrower-service endpoints for agreements, locates, reservations, loans, collateral, margin calls, returns, recalls, fees, rebates, accruals, payments, transactions, audit, orders, trades, positions, holdings, watchlist and account balances where available.

Supported write actions are sent to the matching borrower endpoints: locate creation, reservation release, loan return requests, collateral posting, deposits, withdrawals, agreement proposals and trading order submission. External lender decisions, lifecycle confirmations, FIX execution and settlement are not fabricated by the UI.

The API client unwraps `{success,data,message,timestamp}` and paginated `{content,page,size,totalElements,totalPages}` responses. Missing endpoints, unavailable fields and absent data are displayed as `-` or an empty-state message; no demo business records are seeded.

## Layout

The application shell is fixed to the viewport and disables page-level scrolling. Tables and detail regions use contained overflow to keep dense enterprise screens usable.
