import React, { useState } from 'react';
import { data } from "./../../data/data";
import FoodItem from './FoodItem';

const Food = () => {
  
  const [foods, setFoods] = useState(data);
  const [counter, setCounter] = useState(0);

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

  const incrementCounter = () => {
    setCounter(counter+1)
  }

  return (
    <div className='food-gallery'>
      <div className='container-heading'>Top Rated Menu Items</div>
      {/* <div className='container-heading'><button onClick={incrementCounter}> Increment Counter</button></div> */}
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
                // <FoodItem key={index} foodImage={food.image} foodName={food.name} foodPrice={food.price}></FoodItem>
                <FoodItem key={index} food={food} faltuProp="testing"></FoodItem>
              )
            )
          }
        </div>

    </div>
  );
}

export default Food;
