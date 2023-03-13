import React from 'react'
import Gabe from '../../assets/game/GabeLost.jpg'
import GiftBox from '../../assets/game/giftBox.webp'
import { motion as m } from 'framer-motion'
import { UseCaseContext } from '../../context/CaseContext'
import { Chroma2 } from '../../data/Data'
const GabeLost = () => {
  const { takePrize, giftMoney, giftInvenotry } = UseCaseContext()

  const [giftPop, setGiftPop] = React.useState<boolean>(false)
  return (
    <div
      className={`absolute w-[100vh] z-20 flex items-center justify-center ml-[10rem]`}
    >
      <h1 className="text-[2rem] font-bold text-blue-500 absolute text-center">
        Im just getting old , good for you son , take your prize
      </h1>
      <img className="w-[1200px] h-[500px] rounded-[10px]" src={Gabe} />
      <m.img
        animate={{
          y: [0, 10, -10, 0, 10, -10, 0, 10, -10, 0, 10, -10, 0, 10, -10],
        }}
        transition={{ repeat: Infinity, duration: 10 }}
        className=" w-[250px] mt-[22rem] rounded-[10px] absolute cursor-pointer "
        src={GiftBox}
        onClick={() => takePrize(Chroma2)}
      />
      <div className="absolute bg-gray-700 ">
        <p>{giftMoney && giftMoney}</p>
        <div>
          {giftInvenotry?.map((val: any, i: number) => {
            return (
              <div key={i}>
                <p>{val.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GabeLost
