# Node.js E-commerce API

This project is a Node.js-based e-commerce API that supports operations for products, brands, categories, subcategories, and orders. The API includes error handling and validation layers.

## Features

- **Product Order:** Manage orders that include products.
- **Brand Order:** Order products based on their brand.
- **SubCategory Order:** Organize and order products within subcategories.
- **Category Order:** Organize and order products within main categories.
- **Error Handling:** Centralized error handling to ensure consistent error responses across the API.
- **Validation Layer:** Input validation for API endpoints to ensure data integrity.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abdelrahmanelhabal/node-js-ecommerce-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-js-ecommerce-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Access the API at `http://localhost:8000`.

## API Endpoints

### Products

- **GET /products**: Retrieve all products.
- **POST /products**: Create a new product.
- **PUT /products/:id**: Update a product by ID.
- **DELETE /products/:id**: Delete a product by ID.

### Brands

- **GET /api/v1/brand**: Retrieve all brands.
- **GET /api/v1/brand/:id**: Retrieve specific brand by ID.
- **POST /api/v1/brand**: Create a new brand.
- **PUT /api/v1/brand/:id**: Update a brand by ID.
- **DELETE /api/v1/brand/:id**: Delete a brand by ID.

### Categories

- **GET /api/v1/categories**: Retrieve all categories.
- **GET /api/v1/categories/:id**: Retrieve specific category by ID.
- **POST /api/v1/categories**: Create a new category.
- **PUT /api/v1/categories/:id**: Update a category by ID.
- **DELETE /api/v1/categories/:id**: Delete a category by ID.

### SubCategories

- **GET /api/v1/subCategories**: Retrieve all subcategories.
- **GET /api/v1/subCategories/:id**: Retrieve specific subCategory by ID.
- **POST /api/v1/subCategories**: Create a new subcategory.
- **PUT /api/v1/subCategories/:id**: Update a subcategory by ID.
- **DELETE /api/v1/subCategories/:id**: Delete a subcategory by ID.

### Product

- **GET /api/v1/product**: Retrieve all product.
- **GET /api/v1/product/:id**: Retrieve specific product by ID.
- **POST /api/v1/product**: Create a new product.
- **PUT /api/v1/product/:id**: Update an product by ID.
- **DELETE /api/v1/product/:id**: Delete an product by ID.

## Error Handling

The API implements a centralized error handling mechanism to ensure consistent and informative error responses. Custom error messages are returned for validation errors, not found errors, and other server errors.

## Validation

The API includes a validation layer that checks incoming requests to ensure data integrity. This helps prevent invalid data from being processed by the server.

This project was developed by [Abdelrahman Elhabal].
