import React, { useState } from 'react';
import { data } from "./../../data/data";
import FoodItem from './FoodItem';

const Food = () => {
  
  const [foods, setFoods] = useState(data);

  const filterByCategory = (foodCategory) => {
    setFoods(
      data.filter((item) => {
        return item.category === foodCategory
      })
    )
  }

  const filterByPrice = (foodPrice) => {
    setFoods(
      data.filter((item) => {
        return item.price === foodPrice
      })
    )
  }
  

  return (
    <div className='food-gallery'>
      <div className='container-heading'>Top Rated Menu Items</div>
      <div className='food-filter'>
          <div className='flex flex-col'>
              <span className='food-text'>Filter type</span>
              <div className='filter-buttons'>
                <button className='btn-white' onClick={() => setFoods(data)}>All</button> 
                <button className='btn-white' onClick={() => filterByCategory('burger')}>Burgers</button> 
                <button className='btn-white' onClick={() => filterByCategory('pizza')}>pizza</button>
                <button className='btn-white' onClick={() => filterByCategory('salad')}>salads</button> 
                <button className='btn-white' onClick={() => filterByCategory('chicken')}>chicken</button>
              </div>
          </div>
          <div className='flex flex-col'>
              <span className='food-text'>Filter price</span>
              <div className='filter-buttons'>
                <button className='btn-white' onClick={() => filterByPrice('$')}>$</button>
                <button className='btn-white' onClick={() => filterByPrice('$$')}>$$</button>
                <button className='btn-white' onClick={() => filterByPrice('$$$')}>$$$</button>
                <button className='btn-white' onClick={() => filterByPrice('$$$$')}>$$$$</button>
              </div>
          </div>
      </div>

      {/* food listing */}
        <div className='food-items'>
          {
            foods.map((food, index) => (
                <FoodItem key={index} food={food}></FoodItem>
              )
            )
          }
        </div>

    </div>
  );
}

export default Food;
