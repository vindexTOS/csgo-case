import React from 'react'
import { UseCaseContext } from '../../context/CaseContext'
import Gaben from '../../assets/Audio/Gaben.mp3'
import { theGame } from '../../assets/game/gameutils'
import { motion as m } from 'framer-motion'
import heart from '../../assets/game/heart.png'
import GabeWon from './GabeWon'
import GabeLost from './GabeLost'
const GabeMain = () => {
  const {
    gabeRef,
    play,
    winLose,
    player,
    gabenAi,
    playerLife,
    gabenLife,
  } = UseCaseContext()
  const style = {
    lives: `bg-gray-900`,
    mainDiv: `flex w-[100%] h-[100vh] items-center  justify-between bg-gray-900 px-60   `,
    imgDiv: `flex flex-col gap-4`,
    img: `w-[200px] cursor-pointer`,
    gabeCorner: `w-[300px] h-[500px]`,
  }

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
    <div className={style.lives}>
      <div className="flex  items-center justify-between px-20 ">
        <div className="flex  ">
          {new Array(playerLife).fill('').map((val: any) => (
            <img src={heart} className="w-[50px]" />
          ))}
        </div>
        <div className="flex  ">
          {new Array(gabenLife).fill('').map((val: any) => (
            <img src={heart} className="w-[50px]" />
          ))}
        </div>
      </div>
      <div className={style.mainDiv}>
        <audio ref={gabeRef} src={Gaben}>
          <source />
        </audio>
        <GabeLost />
        {playerLife <= 0 && <GabeWon />}
        {gabenLife <= 0 && <GabeLost />}
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

        <div className="flex items-center justify-center">
          <h1 className="absolute text-[4rem]  text-white">
            {winLose.toUpperCase()}
          </h1>
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
    </div>
  )
}

export default GabeMain
