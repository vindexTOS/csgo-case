import React from 'react'
import { UseCaseContext } from '../../context/CaseContext'
import Gaben from '../../assets/Audio/Gaben.mp3'
const GabeMain = () => {
  const { gabeRef } = UseCaseContext()
  const style = {
    mainDiv: `flex w-[100%] h-[100vh] items-center  ustify-center bg-gray-900 flex-col`,
  }
  return (
    <div className={style.mainDiv}>
      <audio ref={gabeRef} src={Gaben}>
        <source />
      </audio>
    </div>
  )
}

export default GabeMain
