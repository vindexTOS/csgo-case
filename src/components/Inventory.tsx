import React, { useRef } from 'react'
import { UseCaseContext } from '../context/CaseContext'
import { BsFillFileArrowUpFill, BsFillFileArrowDownFill } from 'react-icons/Bs'
const Inventory = () => {
  const { inventory } = UseCaseContext()
  const style = {
    mainDiv: ` flex items-center justify-center    w-[100%] h-[100vh]   bg-gray-900  `,
    btnDiv: `flex flex-col gap-2 items-end justify-end  mb-2  h-[445px]`,
    icon: `text-[2rem] text-gray-500  hover:text-gray-600 cursor-pointer`,
  }

  const scroll = useRef(null)

  const scrollUpDown = (up: string, down: string) => {
    const element = (scroll.current as unknown) as HTMLDivElement
    if (up === 'up') {
      if (element) {
        element.scrollBy({
          top: -445,
          behavior: 'smooth',
        })
      }
    }

    if (down == 'down') {
      if (element) {
        element.scrollBy({
          top: 445,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <div className={style.mainDiv}>
      <div className={style.btnDiv}>
        <BsFillFileArrowUpFill
          onClick={() => scrollUpDown('up', '')}
          className={style.icon}
        />{' '}
        <BsFillFileArrowDownFill
          onClick={() => scrollUpDown('', 'down')}
          className={style.icon}
        />
      </div>
      <div className=" flex items-start justify-center w-[26%]  bg-gray-700">
        <div
          ref={scroll}
          className=" inventoryGrid  w-[100%]   max-h-[445px] overflow-y-scroll  scroll bg-gray-800"
        >
          {inventory?.map((val: any) => {
            return (
              <div
                style={{ border: `1px solid  ${val.color}` }}
                className="rounded-[2px] h-[9rem] w-[8rem] flex flex-col justify-center"
              >
                <p className="text-[9px] text-gray-400">{val.title}</p>
                <img className="w-[110px] h-[110px]" src={val.img} />
                <p className="text-[10px] text-white">${val.price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Inventory
