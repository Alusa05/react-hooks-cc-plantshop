import React from "react";

function PlantCard({ plant, onSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {plant.soldOut ? (
        <button className="primary">Sold Out</button>
      ) : (
        <button onClick={() => onSoldOut(plant.id)}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
