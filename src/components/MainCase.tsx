import React, { useEffect } from 'react'
import { Chroma2 } from '../data/Data'
import { Chroma2Utils } from '../assets/DataUtils'
import { UseCaseContext } from '../context/CaseContext'
import CsGoCase from '../assets/Audio/case.mp3'

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
    audioCaseRef,
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
      <audio ref={audioCaseRef} src={CsGoCase} className="hidden">
        <source type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default MainCase
