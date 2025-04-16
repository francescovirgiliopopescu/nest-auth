# 🔐 NestJS Authentication API

A robust, scalable authentication system built with [NestJS](https://nestjs.com/) using JWT, Passport, and bcrypt. Designed with best practices for secure login, registration, and user management.

---

## 🚀 Features

- ✅ User Registration & Login
- 🔐 JWT Authentication
- 🔄 Access & Refresh Token Support
- 🔒 Password Hashing with bcrypt
- 📄 Protected & Public Routes
- 👤 User Roles
- 🧰 Environment-based config

---

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Authentication**: Passport + JWT
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Security**: bcrypt

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/francescovirgiliopopescu/nest-auth.git
cd nest-auth

# Install dependencies
pnpm i

# Create .env file
cp .env

# Examples of .env file
PORT=3000
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600s
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=your_password
DB_NAME=auth_db


# Start in dev mode
npm run start:dev

# Build
npm run build

# Start in production
npm run start:prod
```
