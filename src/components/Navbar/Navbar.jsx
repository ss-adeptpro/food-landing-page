import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <>
      <div className='navContainer'>
        <div className="navLeft">
          <AiOutlineMenu size={30} className='hamburger' onClick={() => setOpenMobileMenu(!isOpenMobileMenu)}/>
          <h1 className='navLogo'>
            Best <span className='font-bold'>Eats</span>
          </h1>
          <div className="navToggle">
            <button className='btnCls buttonSelected'>Delivery</button>
            <button className='btnCls text-black'>Pickup</button>
          </div>        
        </div>

        {
          (
            <div className = {isOpenMobileMenu ? 'navLeftMobileOpen' : 'navLeftMobileClose'}>
              <div className='w-full absolute flex justify-between items-center top-4 pl-4 pr-4'>
                <h1 className='navLogo'>
                  Best <span className='font-bold'>Eats</span>
                </h1>
                <AiOutlineClose onClick={() => setOpenMobileMenu(!isOpenMobileMenu)} size={30} className='cursor-pointer'  />
              </div>
              
              <nav className='w-full absolute flex justify-between items-center top-14 pl-2 pr-4'>
                  <ul className='flex flex-col p-4 text-gray-800'>
                      <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                      <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                      <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                      <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                      <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                      <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                      <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                  </ul>
              </nav>

            </div>
          )          
        }
        
        <div className="navMiddle">
        {/* Search bar */}
          <form>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" className="inptSearch" placeholder="Search foods..." required />
                  <button type="submit" className="btnCls btn-black btn-search">Search</button>
              </div>
          </form>
        </div>

          {/* Cart button */}
          <div className='relative'>
            <button className='btnCls btn-Cart btn-black'>
              <BsFillCartFill size={20} className='mr-2' /> Cart
            </button>
          </div>
      </div>

    {
      isOpenMobileMenu && <div className='navOverlay'></div>
    }
    </>
  );
}

export default Navbar;
