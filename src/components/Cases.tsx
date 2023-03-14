import React, { useReducer, useState } from 'react'
import { Chroma2Utils } from '../assets/DataUtils'
import { UseCaseContext } from '../context/CaseContext'
import { Chroma2, KnifeCase } from '../data/Data'
import giftBox from '../assets/game/giftBox.webp'
import { motion as m } from 'framer-motion'
import CaseInsides from './CaseInsides'
import { Chroma2Display, knifeDisplay } from '../data/Data'

type State = {
  index: number
}
type Action = {
  type: string
  payload: number
}

const Cases = () => {
  const { OpenCase, caseData, err } = UseCaseContext()
  const [chromaTwo, setChromaTwo] = useState<boolean>(false)
  const [knifeCase, setKnifeCase] = useState<boolean>(false)
  const CSGOcases = [
    {
      style:
        'w-[4rem] h-[2rem] p-2 bg-green-500 rounded-[20px] flex   items-center justify-center text-white  absolute   ml-[4rem] mt-[14rem] z-40  font-bold',
      price: `2.25`,
      case: Chroma2,
      img: Chroma2Utils.case,
      imgStyle: '',
      setState: setChromaTwo,
      state: chromaTwo,
    },
    {
      style:
        'w-[4rem] h-[2rem] px-10 bg-green-500 rounded-[20px] flex   items-center justify-center text-white  absolute  mr-[15rem] mt-[8.4rem] z-40  font-bold',
      price: '300.00',
      case: KnifeCase,
      img: giftBox,
      imgStyle: 'w-[250px] h-[190px]',
      setState: setKnifeCase,
      state: knifeCase,
    },
  ]

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'UP_INDEX':
        return { index: state.index + action.payload }
      case 'DOWN_INDEX':
        return { index: state.index - action.payload }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, {
    index: 0,
  })
  return (
    <m.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      className="cursor-pointer flex items-center justify-center flex-wrap"
    >
      {CSGOcases.map((val: any) => {
        return (
          <div>
            <div className={val.style}>${val.price}</div>
            <m.img
              className={val.imgStyle}
              whileHover={{ y: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              onClick={() => val.setState(!val.state)}
              src={val.img}
            />
          </div>
        )
      })}
      {chromaTwo && (
        <CaseInsides
          caseType={Chroma2}
          pointMoney={'2.25'}
          caseImg={Chroma2Utils.case}
          data={Chroma2Display}
          setState={setChromaTwo}
          state={chromaTwo}
          style={'w-[290px] h-[290px] '}
        />
      )}
      {knifeCase && (
        <CaseInsides
          caseType={KnifeCase}
          pointMoney={'300.00'}
          caseImg={giftBox}
          data={knifeDisplay}
          setState={setKnifeCase}
          state={knifeCase}
          style={'w-[250px] h-[190px]'}
        />
      )}
    </m.div>
  )
}

export default Cases
