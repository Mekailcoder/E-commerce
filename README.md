# Product Management API

A RESTful API built with Node.js, Express.js, and MongoDB for managing products and user authentication.

## Features

* User Registration
* User Login with JWT Authentication
* Create Product
* Read All Products
* Update Product
* Delete Product
* MongoDB Database Integration
* Error Handling
* Environment Variable Configuration

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv

## Project Structure

```text
project/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── product.controller.js
│   │   └── user.controller.js
│   │
│   ├── models/
│   │   ├── product.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── product.route.js
│   │   └── user.route.js
│   │
│   └── app.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/productDB
JWT_SECRET=your_secret_key
```

### Start Server

```bash
npm start
```

Server will run on:

```text
http://localhost:3000
```

## API Endpoints

### User Routes

#### Register User

```http
POST /api/user/register
```

Request Body:

```json
{
  "name": "mekail",
  "email": "mekail@gmail.com",
  "password": "123456"
}
```

#### Login User

```http
POST /api/user/login
```

Request Body:

```json
{
  "email": "mekail@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "success": true,
  "token": "jwt_token_here"
}
```

---

### Product Routes

#### Create Product

```http
POST /api/product
```

Request Body:

```json
{
  "name": "Laptop",
  "description": "Gaming Laptop",
  "price": 50000,
  "category": "Electronics",
  "image": ["image-url"]
}
```

#### Get All Products

```http
GET /api/product
```

#### Update Product

```http
PUT /api/product/:id
```

#### Delete Product

```http
DELETE /api/product/:id
```

## Authentication

After successful login, the server generates a JWT token.

The token should be sent in the Authorization header:

```http
Authorization: Bearer <jwt_token>
```

The server verifies the token before allowing access to protected routes.

## Error Handling

The API returns appropriate HTTP status codes:

* 200 - Success
* 201 - Resource Created
* 400 - Bad Request
* 401 - Unauthorized
* 404 - Resource Not Found
* 500 - Internal Server Error

## Author

sk mekail ali

Backend Developer | Node.js | Express.js | MongoDB
