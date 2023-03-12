import React from 'react'
import { UseCaseContext } from '../context/CaseContext'

const Open = () => {
  const { opendCase, saveInentory, sellItem } = UseCaseContext()
  return (
    <div className="bg-gray-700 w-[280px] h-[350px] mt-[2rem] flex flex-col items-center justify-center rounded-[20px] gap-3 ">
      <h1 className="absolute mt-[3.7rem] mr-[8rem] text-green-500 ">
        ${opendCase?.price}
      </h1>
      <img
        className="w-[200px] h-[200px] rounded-[20px]"
        style={{ backgroundColor: opendCase?.color }}
        src={opendCase?.img}
      />

      <div className="flex flex-col gap-3">
        <h1 className="text-[1.2rem]" style={{ color: opendCase?.color }}>
          {opendCase?.title}
        </h1>
        <p
          style={{ backgroundColor: opendCase?.color }}
          className="rounded-[10px] text-white text-[1.1rem] text-center"
        >
          {opendCase?.rarity}
        </p>
      </div>
      <div className="flex items-center justify-between w-[100%] text-center px-7">
        <div
          onClick={() => sellItem(opendCase?.id, opendCase?.price)}
          className="w-[6rem] bg-green-500  text-[1.1rem] text-white rounded-[20px] cursor-pointer"
        >
          Sell
        </div>
        <div
          onClick={() => saveInentory()}
          className="w-[6rem] bg-yellow-500  text-[1.1rem] text-white rounded-[20px] cursor-pointer"
        >
          Save
        </div>
      </div>
    </div>
  )
}

export default Open
