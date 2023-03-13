import React from 'react'
import GabenWon from '../../assets/game/GabenWon.jpg'
import { UseCaseContext } from '../../context/CaseContext'
import { AiOutlineReload } from 'react-icons/ai'
import { motion as m } from 'framer-motion'
const GabeWon = () => {
  const { reTry } = UseCaseContext()
  return (
    <div
      className={`absolute w-[100vh] z-20 flex items-center justify-center ml-[10rem]`}
    >
      <h1 className="text-[2rem] text-white absolute">
        I won bozo, wanna try again{' '}
      </h1>
      <m.p
        onClick={reTry}
        animate={{ rotate: [0, 90, 180, 360] }}
        transition={{ repeat: Infinity }}
        className="text-[6rem] mt-[15rem] text-white absolute cursor-pointer hover:text-blue-300"
      >
        <AiOutlineReload />
      </m.p>
      <img className="w-[1200px] h-[500px] rounded-[10px]" src={GabenWon} />
    </div>
  )
}

export default GabeWon
