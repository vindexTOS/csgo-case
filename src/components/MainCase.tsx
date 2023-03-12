import React from 'react'
import { Chroma2 } from '../data/Data'
import { Chroma2Utils } from '../assets/DataUtils'
import { UseCaseContext } from '../context/CaseContext'
import Cases from './Cases'
import Scroller from './Scroller'
const MainCase = () => {
  const { OpenCase, caseData } = UseCaseContext()
  const style = {
    mainDiv: `flex w-[100%] h-[100vh] items-center justify-center flex-col`,
  }
  return (
    <div className={style.mainDiv}>
      {/* <h1 onClick={() => console.log(caseData)}>log</h1> */}
      <Cases />
      <Scroller />
    </div>
  )
}

export default MainCase
