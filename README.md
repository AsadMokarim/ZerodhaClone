# Zerodha Clone

A full-stack Zerodha clone for learning and demonstration. It contains a
public-facing site, a trading dashboard, and an Express API backed by MongoDB.
This project is not affiliated with or endorsed by Zerodha.

## Features

- Public landing pages for home, products, pricing, about, and support
- User signup and login with cookie-based JWT authentication
- Protected trading dashboard
- Watchlist and dashboard views for holdings, positions, orders, and funds
- Buy-order entry through the dashboard
- Portfolio visualizations using charts
- MongoDB persistence for user, order, holding, and position data

## Project structure

```text
.
├── backend/    Express API, authentication, and MongoDB models
├── dashboard/  React trading dashboard
└── frontend/   React public site, signup, and login pages
```

The frontend and dashboard are separate Create React App applications. Run each
from its own directory; there is no root-level npm start command.

## Tech stack

- **Frontend and dashboard:** React, React Router, Axios, and CSS
- **Dashboard charts:** Chart.js and `react-chartjs-2`
- **UI components:** Material UI (dashboard)
- **Backend:** Node.js, Express, and Mongoose
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens, cookies, and bcrypt password hashing

## Requirements

- Node.js and npm
- MongoDB connection string

## Setup

Install dependencies in each app:

```bash
cd frontend
npm install

cd ../dashboard
npm install

cd ../backend
npm install
```

Create `backend/.env` with your MongoDB connection string and a private JWT
signing key:

```dotenv
MONGO_URL=mongodb://127.0.0.1:27017/zerodha
TOKEN_KEY=replace-with-a-long-random-secret
```

Do not commit real credentials or signing keys. `PORT` is optional; the API
defaults to port `3002`.

## Run locally

Start each app in a separate terminal from the repository root:

```bash
cd backend
npm start
```

```bash
cd frontend
npm start
```

```bash
cd dashboard
npm start
```

The apps use these local addresses:

| App | Address |
| --- | --- |
| Public site | http://localhost:3000 |
| Dashboard | http://localhost:3001 |
| API | http://localhost:3002 |

The backend CORS configuration allows the public site and dashboard at these
default origins. The browser apps call the API at `http://localhost:3002`.

## API endpoints

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/` | API health greeting |
| `GET` | `/allHoldings` | Return holdings |
| `GET` | `/allPositions` | Return positions |
| `POST` | `/newOrder` | Save an order |
| `POST` | `/auth/signup` | Create an account |
| `POST` | `/auth/login` | Log in |
| `POST` | `/auth/` | Verify the authentication token |

Authentication uses JWT tokens stored in cookies. User and trading data are
persisted in MongoDB.

## Useful scripts

Run these commands from the relevant app directory:

| Directory | Command | Description |
| --- | --- | --- |
| `frontend/` or `dashboard/` | `npm start` | Start the React development server |
| `frontend/` or `dashboard/` | `npm test` | Run the React test runner |
| `frontend/` or `dashboard/` | `npm run build` | Create a production build |
| `backend/` | `npm start` | Start the API with Nodemon |
