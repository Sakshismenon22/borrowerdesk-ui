# BorrowDesk UI

React + Vite borrower operations workspace.

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```
Configure `VITE_API_BASE_URL` (default `http://localhost:8081`) and `VITE_ORG_ID` (default `1`). The backend must allow the frontend origin in its CORS configuration.

## Structure
- `src/pages/`: one module per BorrowDesk workspace page.
- `src/components/`: reusable common UI and application layout components.
- `src/api/`: endpoint modules grouped by backend domain. `apiClient.js` centralizes base URL, organization scope, response envelopes and HTTP requests.
- `src/routes/AppRoutes.jsx`: React Router DOM route definitions.
- `src/hooks/` and `src/utils/`: reserved for reusable hooks and formatting/business utilities.
- `src/styles/`: global styles and design variables.

The UI consumes borrower-service endpoints. Lender decisions, FIX execution and lifecycle confirmations are not simulated. Missing backend data is displayed as empty states.
