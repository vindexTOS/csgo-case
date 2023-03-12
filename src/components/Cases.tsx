import React from 'react'
import { Chroma2Utils } from '../assets/DataUtils'
import { UseCaseContext } from '../context/CaseContext'
import { Chroma2 } from '../data/Data'
import { motion as m } from 'framer-motion'
const Cases = () => {
  const { OpenCase, caseData } = UseCaseContext()

  return (
    <m.div initial={{ x: 100 }} animate={{ x: 0 }} className="cursor-pointer ">
      <m.img
        whileHover={{ y: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => OpenCase(Chroma2)}
        src={Chroma2Utils.case}
      />
    </m.div>
  )
}

export default Cases
