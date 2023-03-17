import React, { useState, useEffect } from 'react';

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderProducts = () => {
    const groupsOfFive = [];

    for (let i = 0; i < products.length; i += 5) {
      groupsOfFive.push(products.slice(i, i + 5));
    }

    return groupsOfFive.map((group, index) => (
      <div className="product-group" key={index}>
        {group.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <h1>Store</h1>
      <div className="product-grid">{renderProducts()}</div>
      <style>
        {`
          .product-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px;
            margin-top: 20px;
          }

          @media (min-width: 768px) {
            .product-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 992px) {
            .product-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .product-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .product {
            width: 100%;
            margin-bottom: 20px;
            padding: 20px;
            background-color: #f7f7f7;
            border-radius: 5px;
            box-shadow

            width: 100%;
            margin-bottom: 20px;
            padding: 20px;
            background-color: #f7f7f7;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }

          .product img {
            display: block;
            max-width: 100%;
            height: auto;
            margin-bottom: 10px;
          }

          .product h3 {
            margin: 0 0 10px 0;
            font-size: 1.2rem;
          }

          .product p {
            margin: 0;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  );
}

export default Store;
