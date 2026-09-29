```jsx
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="logo">meesho</div>

        <input
          type="text"
          className="search"
          placeholder="Search for products"
        />

        <div className="header-links">
          <span>Download App</span>
          <span>Become a Supplier</span>
          <span>Profile</span>
          <span>Cart</span>
        </div>
      </header>

      <nav className="navbar">
        <span>Women</span>
        <span>Men</span>
        <span>Kids</span>
        <span>Home & Kitchen</span>
        <span>Beauty</span>
        <span>Electronics</span>
        <span>Grocery</span>
      </nav>

      <section className="hero">
        <h1>Everything You Love, At Amazing Prices</h1>

        <p>
          Discover fashion, electronics, home products and more.
        </p>

        <button>Shop Now</button>
      </section>

      <section className="products-section">
        <h2>Trending Products</h2>

        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="products">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">🛍️</div>

                <h3>{product.name}</h3>

                <p className="category">
                  {product.category}
                </p>

                <p className="price">
                  ₹{product.price}
                </p>

                <button className="cart-button">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
```
