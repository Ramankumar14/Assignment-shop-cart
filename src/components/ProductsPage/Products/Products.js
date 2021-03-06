import "./products.scss";
import Product from "./Product";

function Products({ productsData, addProduct }) {

  return (
    <div className="products">
      {productsData.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            imageUrl={product.imageURL}
            description={product.description}
            price={product.price}
            addProduct={() => addProduct(product)}
          />
        );
      })}
    </div>
  );
}

export default Products;