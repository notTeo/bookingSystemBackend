# 🏢 SaaS Booking & Business Management Server

Backend API for a multi-tenant **booking and business management system**.  
This platform allows organizations to manage **shops**, **staff**, **bookings**, **working hours**, and **inventory** — all from a single unified backend.

Free users can register as **staff** and view their assigned shops, working hours, and schedules.  
Business owners and managers can oversee multiple locations, employees, and services through flexible role-based access.

---

## 🚀 Tech Stack

- **Node.js** + **Express.js**
- **TypeScript**
- **Prisma ORM** + **PostgreSQL**
- **JWT Authentication**
- **Express Validator** for request validation
- **bcrypt** for password hashing

---

## ⚙️ Setup

# 1. Clone repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Install dependencies
npm install

# 3. Setup database and Prisma
npx prisma migrate dev --name init
npx prisma generate

# 4. Run in development
npm run dev

Server runs by default on http://localhost:5000

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

DATABASE_URL=<your_postgres_connection>
JWT_SECRET=<your_secret>
PORT=5000

*(Never commit this file to GitHub.)*

---

## 🧱 Folder Structure

src/
├── controllers/         # Route logic  
├── routes/              # API route definitions  
├── middlewares/         # Auth & error handling  
├── validators/          # express-validator chains  
├── utils/               # Helpers & AppError class  
├── db/  
│   ├── prisma/          # schema.prisma  
│   └── generated/       # Generated Prisma client  
└── server.ts            # Entry point

---


## 🧠 Roles & Access

| Role | Description |
|------|--------------|
| SUPER_ADMIN | Platform admin (dev only) |
| OWNER | Subscription holder, manages one or multiple shops |
| MANAGER | Assists owner, manages staff, bookings, and inventory |
| STAFF | Works across shops, views assigned working hours and bookings |
| NONE | Registered user not yet assigned to any shop |

---

## 💳 Subscription Plans

| Plan | Description |
|------|-------------|
| MEMBER | Free staff access — view assigned shops and schedules |
| STARTER | Basic plan for small businesses |
| PRO | Advanced plan with analytics, reports, and automation features |

---

## 📦 Scripts

npm run dev       # Start development server  
npm run build     # Compile TypeScript  
npm run start     # Start production server  

---

## 🧰 Prisma Commands

npx prisma validate --schema=./src/db/prisma/schema.prisma        # Validate schema  
npx prisma migrate dev --schema=./src/db/prisma/schema.prisma     # Apply migration  
npx prisma studio --schema=./src/db/prisma/schema.prisma          # Visual database explorer  

--schema=./src/db/prisma/schema.prisma

---

## 🧠 API Auth Flow

1. User registers with a subscription plan:
   - MEMBER → role = NONE (awaiting shop assignment)
   - STARTER / PRO → role = OWNER
2. User logs in → receives JWT token
3. Token stored in frontend (e.g., localStorage)
4. All protected routes require `Authorization: Bearer <token>`
5. Staff and managers see data only for assigned shops

---

## 🧑‍💻 Author

Created and maintained by **Nick Theodosis**  
Athens University of Economics & Business — Informatics  

[LinkedIn](https://www.linkedin.com/in/nick-theodosis-a0a08b260/)  
[GitHub](https://github.com/notTeo)

---

## 🪪 License

MIT License — open for personal and commercial use.
