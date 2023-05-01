const ProductManager = require('./ProductManager');

const productManager = new ProductManager('./productos.txt');

const product = {
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 100,
  thumbnail: 'ruta/a/imagen1',
  code: 'P1',
  stock: 10
};
productManager.addProduct(product);

const products = productManager.getProducts();
console.log(products);

const productId = 1;
const productById = productManager.getProductById(productId);
console.log(productById);

const productToUpdate = {
  title: 'Producto 2',
  description: 'Descripción del producto 2',
  price: 200,
  thumbnail: 'ruta/a/imagen2',
  code: 'P2',
  stock: 20
};
productManager.updateProduct(productId, productToUpdate);

productManager.deleteProduct(productId);
