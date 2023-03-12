import React, { useEffect } from 'react'
import { Chroma2 } from '../data/Data'
import { Chroma2Utils } from '../assets/DataUtils'
import { UseCaseContext } from '../context/CaseContext'
import Cases from './Cases'
import Scroller from './Scroller'
import Open from './Open'
const MainCase = () => {
  const {
    OpenCase,
    caseData,
    opendCase,
    line,
    openPop,
    setOpenPop,
    randomizeGuns,
  } = UseCaseContext()
  const style = {
    mainDiv: `flex w-[100%] h-[100vh] items-center  ustify-center bg-gray-900 flex-col`,
  }
  useEffect(() => {
    setOpenPop(!openPop)
  }, [opendCase])
  return (
    <div className={style.mainDiv}>
      {/* <h1 onClick={() => console.log(opendCase)}>on clikc</h1> */}

      {/* <h1 onClick={() => console.log(caseData)}>log</h1> */}
      {!openPop ? <Open /> : <Cases />}

      <div
        className={` z-50 absolute  h-[135px]  mt-[30rem]  w-[2px] bg-yellow-400 ${
          !line && 'hidden'
        }`}
      ></div>
      {line && <Scroller />}
    </div>
  )
}

export default MainCase
