import React from 'react'
import Gabe from '../../assets/game/GabeLost.jpg'
import GiftBox from '../../assets/game/giftBox.webp'
import { motion as m } from 'framer-motion'
import { UseCaseContext } from '../../context/CaseContext'
import { Chroma2 } from '../../data/Data'
const GabeLost = () => {
  const {
    takePrize,
    giftMoney,
    giftInvenotry,
    giftPop,
    reTryIfWin,
  } = UseCaseContext()

  return (
    <div
      className={`absolute w-[100vh] z-20 flex items-center justify-center ml-[10rem]`}
    >
      <h1 className="text-[2rem] font-bold text-blue-500 absolute text-center">
        Im just getting old , good for you son , take your prize
      </h1>
      <img className="w-[1200px] h-[500px] rounded-[10px]" src={Gabe} />
      {giftPop && (
        <m.img
          animate={{
            y: [0, 10, -10, 0, 10, -10, 0, 10, -10, 0, 10, -10, 0, 10, -10],
          }}
          transition={{ repeat: Infinity, duration: 10 }}
          className=" w-[250px] mt-[22rem] rounded-[10px] absolute cursor-pointer "
          src={GiftBox}
          onClick={() => takePrize(Chroma2)}
        />
      )}
      <div
        className={` absolute bg-gray-700 flex  flex-col items-center  py-5 ${
          giftMoney === 0 && 'hidden'
        } `}
      >
        <h1 className="text-[2rem] text-white">Your prize</h1>
        <div className="flex gap-5  py-5 px-5">
          {giftInvenotry?.map((val: any, i: number) => {
            return (
              <div
                style={{ border: ` 1px solid ${val.color}` }}
                className="flex rounded-[5px] p-2 flex-col w-[120px] h-[140px]  items-center justify-center border-2 "
                key={i}
              >
                <p className="text-white h-[3rem] w-[110px] text-center text-[10px]">
                  {val.title}
                </p>

                <img src={val.img} className="w-[110px] h-[110px]" />
              </div>
            )
          })}
          <div
            className={`${
              giftMoney === 0 && 'hidden'
            } flex rounded-[5px]  bg-green-500 text-white  p-2 flex-col w-[120px] h-[140px]  items-center justify-center border-2 `}
          >
            <p className="text-[2.5rem]">${giftMoney > 0 && giftMoney}</p>
          </div>
        </div>
        <button
          onClick={reTryIfWin}
          className="text-white bg-green-400 px-3 py-1 rounded-[10px] hover:bg-green-300 "
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default GabeLost
