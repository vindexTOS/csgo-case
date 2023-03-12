import React from 'react'
import { UseCaseContext } from '../context/CaseContext'

const Inventory = () => {
  const { inventory } = UseCaseContext()
  const style = {
    mainDiv: `flex w-[100%] h-[100vh] items-center  ustify-center bg-gray-900 flex-col`,
  }
  return (
    <div className={style.mainDiv}>
      {inventory?.map((val: any) => {
        return (
          <div>
            <img className="w-[110px] h-[110px]" src={val.img} />
          </div>
        )
      })}
    </div>
  )
}

export default Inventory
