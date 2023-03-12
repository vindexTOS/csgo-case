import React from 'react'
import { Chroma2Utils } from '../assets/DataUtils'
import { UseCaseContext } from '../context/CaseContext'
import { Chroma2 } from '../data/Data'
import { motion as m } from 'framer-motion'
const Cases = () => {
  const { OpenCase, caseData } = UseCaseContext()

  return (
    <div>
      <m.img
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        onClick={() => OpenCase(Chroma2)}
        src={Chroma2Utils.case}
      />
    </div>
  )
}

export default Cases
