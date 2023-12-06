import React, { memo, useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoadingImage from '../LoadingImage/LoadingImage';
import placeholderImage from "./../../data/dummy.png";

// Initialization for ES Users
import {
  Animate,
  initTE,
} from "tw-elements";

initTE({ Animate });

//memoized component
//It will re-render only if we change the passed arguments.
//But wont re-render if we change any of parent's state not affecting the arguments passed to this
  const FoodItem = ({
        faltuProp,
        //simple destructuring
        food: {image, name, price},

        //destructuring with renaming
        food: {image: foodImage, name: foodName, price: foodPrice}
      }) =>
    {

      const [isLoading, setIsLoading] = useState(true);

      // animations examples:
      //   hover:scale-105 duration-300
      //   hover:animate-pulse
      //   hover:animate-bounce
      //   hover:animate-spin      
      //   hover:animate-ping
      

        return (
          <div 
          className='food-item'>

{/*
            Lazy Loading Saves Data and Bandwidth
            Since images out of the viewport are not downloaded immediately, lazy loading conserves extra bandwidth usage
*/}
    {/* <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    </button> */}
            
        <LazyLoadImage src={foodImage} placeholderSrc={placeholderImage} effect='blur' onLoad={() => setIsLoading(false)}></LazyLoadImage>
        { isLoading &&
          <LoadingImage />
        }

          <div className='food-details'>
              <div className='food-title'>{foodName}</div>
              <div className='btn-orange'>{price}</div>
          </div>
          </div>
        );
  }

export default memo(FoodItem);
