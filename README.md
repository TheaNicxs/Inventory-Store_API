# Inventory Management API

A RESTful API for managing products, orders, and suppliers with MongoDB Atlas.

## Base URL
`http://localhost:3000/api` (local development)

## Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get single product |
| POST | `/products` | Create new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |
| POST | `/products/deduct-stock` | Deduct product stock |

## Sample Requests

### Create Product

POST http://localhost:3000/api/products </br>
Content-Type: application/json

{
  "sku": "P001", <!-- you can create your own stock keeping unit name -->
  "name": "Gaming keyboard",
  "price": 1200,
  "stock": 50
}

### Deduct Stock
POST http://localhost:3000/api/products/deduct-stock </br>
Contents-Type:json

{
  "productId": "64f1a2b3c4d5e6f789012345", <!-- put the ID of the product that you created --> 
  "quantity": 5 <!-- numbers of how much you want to deduct in the product -->
}


### Suppliers
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/suppliers` | Get all suppliers |
| GET | `/suppliers/:id` | Get single supplier |
| POST | `/suppliers` | Create new supplier |
| PUT | `/suppliers/:id` | Update supplier |
| DELETE | `/suppliers/:id` | Delete supplier |


## Sample Requests
### Create Supplier
POST http://localhost:3000/api/suppliers </br>
Content-Type: application/json

{
  "name": "Test Supplier Co.",
  "contact": {
    "email": "test@supplier.com",
    "phone": "+12-456-908-345"
  }
}


 ### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/orders` | Get all orders |
| GET | `/orders/:id` | Get single order |
| POST | `/orders` | Create new order |
| PUT | `/orders/:id` | Update order |
| DELETE | `/orders/:id` | Delete order |

## Sample Request
### Create order

POST http://localhost:3000/api/orders </br>
Content-Type: application/json

{
  "items": [
    {
      "productId": "64f1a2b3c4d5e6f789012345", <!-- ID of the created product -->
      "quantity": 2, 
      "price": 1200
    }
  ],
  "supplierId": "68f108c9495fcb4b47be1aea", <!-- ID of the supplier that you created / posted -->
  "status": "pending"
}
