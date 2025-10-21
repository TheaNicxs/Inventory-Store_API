# Inventory Management API

A RESTful API for managing products, orders, and suppliers with MongoDB Atlas.

## Base URL
`https://inventory-store-api.onrender.com`
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

{ </br>
  "sku": "P001",   `(you can create your own stock keeping unit name)`  </br>
  "name": "Gaming keyboard", </br>
  "price": 1200,</br>
  "stock": 50</br>
}

### Deduct Stock
POST http://localhost:3000/api/products/deduct-stock </br>
Contents-Type:json

{ </br>
  "productId": "64f1a2b3c4d5e6f789012345",   `(put the ID of the product that you created)`  </br>
  "quantity": 5   `( numbers of how much you want to deduct in the product)`  </br>
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

{ </br>
  "name": "Test Supplier Co.", </br>
  "contact": {</br>
    "email": "test@supplier.com",</br>
    "phone": "+12-456-908-345"</br>
  }</br>
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

{ </br>
  "items": [ </br>
    { </br>
      "productId": "64f1a2b3c4d5e6f789012345",   `(ID of the created product )` </br> 
      "quantity": 2, </br>
      "price": 1200 </br>
    } </br>
  ], </br>
  "supplierId": "68f108c9495fcb4b47be1aea",  `(ID of the supplier that you created / posted) `  </br>
  "status": "pending" </br>
}
