import React from 'react'
import { UseCaseContext } from '../context/CaseContext'

const Scroller = () => {
  const { randomizeGuns, scrollRef, opendCase } = UseCaseContext()

  const [randomIndex, setRandomIndex] = React.useState<string[]>([])

  //   setRandomIndex()
  const style = {
    mainDiv: `     `,
    img: ``,
  }

  return (
    <div
      ref={scrollRef}
      style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}
      className="bg-gray-700 flex   items-center justify-center shrink-0   w-[600px]   mt-[25rem]  gap-1    absolute  scroll    rounded-[7px]    "
    >
      {randomizeGuns?.map((gun: any, index: number) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: gun.color }}
            className={` rounded-[7px]    shrink-0     flex flex-col   items-center justify-center mt-2 gap-3 select-none    `}
          >
            <img className={`w-[110px] h-[110px]  `} src={gun.img} />
          </div>
        )
      })}
    </div>
  )
}

export default Scroller
