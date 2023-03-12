import React from 'react'
import { Chroma2Utils } from '../assets/DataUtils'
import { UseCaseContext } from '../context/CaseContext'
import { Chroma2 } from '../data/Data'
import { motion as m } from 'framer-motion'
const Cases = () => {
  const { OpenCase, caseData } = UseCaseContext()

  return (
    <m.div initial={{ x: 100 }} animate={{ x: 0 }} className="cursor-pointer ">
      <div className="w-[4rem] h-[2rem] p-2 bg-green-500 rounded-[20px] flex items-center justify-center text-white  absolute mt-[14rem] ml-[5rem] z-50  font-bold">
        $2.25
      </div>
      <m.img
        whileHover={{ y: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => OpenCase(Chroma2, '2.25')}
        src={Chroma2Utils.case}
      />
    </m.div>
  )
}

export default Cases
