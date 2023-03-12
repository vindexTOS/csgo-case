import React from 'react'
import { Link } from 'react-router-dom'
import { UseCaseContext } from '../context/CaseContext'
const NavBar = () => {
  const { inventory, money } = UseCaseContext()

  return (
    <nav className="w-[100vw] h-[60px] bg-gray-700 flex items-center justify-center gap-10">
      <Link className="text-white hover:text-gray-200" to="/">
        Open Case
      </Link>
      <Link to="/inventory" className="text-white hover:text-gray-200">
        Inventory
      </Link>
      <div
        className={`${
          inventory?.length > 0
            ? 'w-[14px] h-[14px] rounded-[50%] text-white bg-red-500 absolute text-[10px] text-center flex items-center justify-center mr-[4rem] mt-[2.5rem]'
            : 'hidden'
        }`}
      >
        {inventory?.length}
      </div>
      <div className="text-white ">Wallet Balance ${money}</div>
    </nav>
  )
}

export default NavBar
