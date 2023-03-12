import React from 'react'
import { UseCaseContext } from '../context/CaseContext'

const Open = () => {
  const { opendCase } = UseCaseContext()
  return (
    <div className="bg-gray-700 rounded-[20px] ">
      <img
        className="w-[200px] h-[200px] rounded-[20px]"
        style={{ backgroundColor: opendCase?.color }}
        src={opendCase?.img}
      />
    </div>
  )
}

export default Open
