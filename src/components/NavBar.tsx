import React, { RefObject } from 'react'
import { Link } from 'react-router-dom'
import { UseCaseContext } from '../context/CaseContext'
import csgoAudio from '../assets/Audio/CsGoMain.mp3'
import { FiMusic } from 'react-icons/fi'
const NavBar = () => {
  const { inventory, money, handleMusic, audioRef } = UseCaseContext()

  return (
    <nav className="w-[100vw] h-[60px] bg-gray-700 flex items-center justify-center gap-10">
      <audio
        ref={audioRef}
        src={csgoAudio}
        controls
        className="hidden"
        autoPlay
      >
        <source type="audio/mpeg" />
      </audio>
      <FiMusic onClick={() => handleMusic()} />
      <Link className="text-white hover:text-gray-200" to="/">
        Open Case
      </Link>
      <Link to="/inventory" className="text-white hover:text-gray-200">
        Inventory
      </Link>
      <div
        className={`${
          inventory?.length > 0
            ? 'w-[14px] h-[14px] rounded-[50%] text-white bg-red-500 absolute text-[10px] text-center flex items-center justify-center mr-[4rem] mt-[2.5rem]'
            : 'hidden'
        }`}
      >
        {inventory?.length}
      </div>
      <div className="text-white ">Wallet Balance ${money.toFixed(2)}</div>
      <Link to="/gabe" className="text-white ">
        {' '}
        Fight Gaben
      </Link>
    </nav>
  )
}

export default NavBar
