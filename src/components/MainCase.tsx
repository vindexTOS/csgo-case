import React from 'react'
import { Chroma2 } from '../data/Data'
import { Chroma2Utils } from '../assets/DataUtils'
import { UseCaseContext } from '../context/CaseContext'
const MainCase = () => {
  const { OpenCase, caseData } = UseCaseContext()

  return (
    <div>
      {' '}
      <button>ON CLICK</button>
      <h1 onClick={() => console.log(caseData)}>log</h1>
      <img onClick={() => OpenCase(Chroma2)} src={Chroma2Utils.case} />
      {caseData && (
        <div>
          <img className="w-[110px] h-[110px]" src={caseData.img} />
        </div>
      )}
    </div>
  )
}

export default MainCase
