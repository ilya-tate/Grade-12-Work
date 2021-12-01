# Models

### Product

- name*
  - String

- price*
  - String

- image*
  - String

# Controllers

### Uploading Images

- uploadImage
  - Takes req.file and places that file on the local storage.

### Products

- createProduct
  - Crate a document on the database of a new product.

- getAllProducts
  - Find all products on the database.

# Routes

### Products Route

- "/"
  - post - createProduct
  - get - getAllProducts

- "/uploads"
  - post - uploadProductImage