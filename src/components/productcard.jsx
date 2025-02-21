import React from 'react';
import Button from '../components/button';

const Productcard = () => {
  const productImage = 'https://picsum.photos/200/300';
  const productName = 'Product Name';
  const productPrice = '$100';

  return (
    <div className="card">
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <p>Price: {productPrice}</p>
      <Button />
    </div>
  );
};

export default Productcard;