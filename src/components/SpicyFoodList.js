import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood]); // Add the new food to the array using spread operator
  }

  function handleRemoveFood(id) {
    // Filter out the food with the clicked ID
    const updatedFoods = foods.filter(food => food.id !== id);
    setFoods(updatedFoods); // Update the state with the filtered array
  }

  function handleUpdateHeatLevel(id) {
    // Update the heat level of the clicked food
    const updatedFoods = foods.map(food => {
      if (food.id === id) {
        // Increment the heat level by one
        return { ...food, heatLevel: food.heatLevel + 1 };
      }
      return food;
    });
    setFoods(updatedFoods); // Update the state with the modified array
  }

  const foodList = foods.map(food => (
    <li key={food.id} onClick={() => handleRemoveFood(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
