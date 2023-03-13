import React from 'react'
import { UseCaseContext } from '../../context/CaseContext'
import Gaben from '../../assets/Audio/Gaben.mp3'
import { theGame } from '../../assets/game/gameutils'
import { motion as m } from 'framer-motion'
const GabeMain = () => {
  const { gabeRef, play, winLose, player, gabenAi } = UseCaseContext()
  const style = {
    mainDiv: `flex w-[100%] h-[100vh] items-center  justify-between bg-gray-900 px-60   `,
    imgDiv: `flex flex-col gap-4`,
    img: `w-[200px] cursor-pointer`,
    gabeCorner: `w-[300px] h-[500px]`,
  }
  const gabeEmotions =
    winLose === 'tie'
      ? theGame.normalGabe
      : winLose === 'player won'
      ? theGame.angryGabe
      : winLose === 'gabe won'
      ? theGame.happyGabe
      : theGame.normalGabe
  const gabesPlay =
    gabenAi === 'rock'
      ? theGame.nade
      : gabenAi === 'paper'
      ? theGame.shield
      : gabenAi === 'scissor'
      ? theGame.knife
      : ''

  const playerPlay =
    player === 'rock'
      ? theGame.nade
      : player === 'paper'
      ? theGame.shield
      : player === 'scissor'
      ? theGame.knife
      : ''
  return (
    <div className={style.mainDiv}>
      <audio ref={gabeRef} src={Gaben}>
        <source />
      </audio>
      <div className={style.imgDiv}>
        <m.img
          onClick={() => play('rock')}
          whileHover={{ y: [0, 6, -6, 0, 6, -6, 0, 6, -6, 0] }}
          animate={{ y: [0, 1, -1, 0, 1, 0, -1, 0, 1, -1, 0, 1, 0, -1] }}
          transition={{}}
          className={style.img}
          src={theGame.nade}
        />
        <m.img
          onClick={() => play('paper')}
          whileHover={{ y: [0, 6, -6, 0, 6, -6, 0, 6, -6, 0] }}
          animate={{ y: [0, 1, -1, 0, 1, 0, -1, 0, 1, -1, 0, 1, 0, -1] }}
          transition={{
            repeat: Infinity,
            duration: 7,
          }}
          className={`${style.img} shield`}
          src={theGame.shield}
        />
        <m.img
          onClick={() => play('scissor')}
          whileHover={{ y: [0, 6, -6, 0, 6, -6, 0, 6, -6, 0] }}
          animate={{ y: [0, 1, -1, 0, 1, 0, -1, 0, 1, -1, 0, 1, 0, -1] }}
          transition={{
            repeat: Infinity,
            duration: 7,
          }}
          className={style.img}
          src={theGame.knife}
        />
      </div>
      <div>
        <h1 className="absolute text-[2rem] text-white">{winLose}</h1>
        <img className="w-[250px]" src={playerPlay} />
        <img className="w-[250px]" src={gabesPlay} />
      </div>

      <div className={style.gabeCorner}>
        <m.img
          animate={{ y: [0, 5, 0, -5, 0, -5, 0, 5, -5, 0, 5, 0, -5] }}
          transition={{
            repeat: Infinity,
            duration: 7,
          }}
          src={
            winLose === 'tie'
              ? theGame.normalGabe
              : winLose === 'player won'
              ? theGame.angryGabe
              : winLose === 'gabe won'
              ? theGame.happyGabe
              : theGame.normalGabe
          }
        />
      </div>
    </div>
  )
}

export default GabeMain
