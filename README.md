# EcomAPI

**EcomAPI** is a full-stack eCommerce API built with Node.js, Express, and MongoDB. It provides essential features for an eCommerce application, including user authentication, product management, shopping cart functionality, and order processing. This API can be integrated with a frontend application to build a complete online shopping experience.

## Features
- **User Authentication**: JWT-based authentication to securely manage user sessions.
- **Product Management**: Admin users can add, update, and delete products in the store.
- **Shopping Cart**: Users can add products to their cart and proceed to checkout.
- **Order Processing**: Users can place orders, and track their order status.
  
## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Middleware**: Express.js middleware for route protection and validation


### Prerequisites:
- Node.js (version 14 or higher)
- MongoDB (either local or cloud-based like MongoDB Atlas)

### Steps to set up the project:
1. Clone this repository
2. Install dependencies
3. Set up environment variables: Create a .env file in the root directory and add configurations
4. Start the server

API Endpoints

    POST /api/users/register: Registers a new user.
    POST /api/users/login: Logs in a user and returns a JWT token.
    GET /api/products: Retrieves all products.
    POST /api/products: Adds a new product (Admin only).
    PUT /api/products/:id: Updates product details (Admin only).
    DELETE /api/products/:id: Deletes a product (Admin only).
    GET /api/cart: Retrieves current user's cart.
    POST /api/cart: Adds a product to the user's cart.
    DELETE /api/cart/:productId: Removes a product from the cart.
    POST /api/orders: Places an order with products from the user's cart.

Testing

To test the API, use tools like Postman or Insomnia. Make sure to pass the JWT token in the Authorization header for protected routes.
