import React from 'react'
import { Chroma2Utils } from '../assets/DataUtils'
import { UseCaseContext } from '../context/CaseContext'
import { Chroma2, KnifeCase } from '../data/Data'
import giftBox from '../assets/game/giftBox.webp'
import { motion as m } from 'framer-motion'
const Cases = () => {
  const { OpenCase, caseData } = UseCaseContext()

  return (
    <m.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      className="cursor-pointer flex items-center justify-center"
    >
      <div className="w-[4rem] h-[2rem] p-2 bg-green-500 rounded-[20px] flex   items-center justify-center text-white  absolute  mr-[20rem] mt-[9rem] z-50  font-bold">
        $2.25
      </div>
      <m.img
        whileHover={{ y: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => OpenCase(Chroma2, '2.25')}
        src={Chroma2Utils.case}
      />
      <div className="w-[4rem] h-[2rem] px-10 bg-green-500 rounded-[20px] flex   items-center justify-center text-white  absolute  ml-[15rem] mt-[9rem] z-50  font-bold">
        $300.00
      </div>
      <m.img
        className="w-[240px] h-[210px]"
        onClick={() => OpenCase(KnifeCase, '300.00')}
        src={giftBox}
        whileHover={{ y: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </m.div>
  )
}

export default Cases
