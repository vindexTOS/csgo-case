import React, { FC, SetStateAction } from 'react'
import { UseCaseContext } from '../context/CaseContext'
import { Chroma2Display } from '../data/Data'
import Scroller from './Scroller'
import { motion as m } from 'framer-motion'
type caseProps = {
  caseType: any
  pointMoney: string
  caseImg: string
  data: any
  setState: React.Dispatch<SetStateAction<boolean>>
  state: boolean
  style: string
}

const CaseInsides: FC<caseProps> = ({
  caseType,
  pointMoney,
  caseImg,
  data,
  setState,
  state,
  style,
}): JSX.Element => {
  const { OpenCase, line, err } = UseCaseContext()
  return (
    <div className="w-[80%] h-[600px] flex flex-col items-center justify-between  bg-gray-600 absolute z-40 mt-[25rem]">
      <div
        onClick={() => setState(!state)}
        className="w-[100%]   flex items-center justify-end  px-5 py-2"
      >
        <p className="text-gray-400">Close</p>
      </div>
      <button onClick={() => OpenCase(caseType, pointMoney)}>
        <m.img
          whileHover={{ y: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className={style}
          src={caseImg}
        />
      </button>

      <div className="flex flex-wrap gap-7 items-center justify-center ">
        {data.map((val: any) => {
          return (
            <div
              key={val.title}
              style={{
                background: ` linear-gradient(180deg, rgba(115,115,115,0.7204131652661064) 12%, rgba(185,183,183,0.829656862745098) 34%, rgba(230,230,230,0.8828781512605042) 69%, rgba(255,255,255,0.9921218487394958) 88%, rgba(255,255,255,0.9921218487394958) 100%)`,
              }}
              className=" w-[120px]  h-[90px] flex  items-center  "
            >
              <div
                className="w-[5px] h-[90px]  absolute  "
                style={{ backgroundColor: val.color }}
              ></div>
              <div className="flex flex-col  ">
                <img className="w-[110px] h-[100px] ml-2 " src={val.img} />
                <p className="text-[8px] absolute mt-[6rem] text-gray-400 w-[6rem] ">
                  {val.title}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div
        className={` z-50 absolute  h-[135px]  mt-[10rem]  w-[2px] bg-yellow-400 ${
          !line && 'hidden'
        }`}
      ></div>
      <p className="text-red-600 font-bold text-[2rem] absolute mt-[19rem]">
        {err}
      </p>
      {line && <Scroller />}
      <div
        onClick={() => setState(!state)}
        className="w-[100%]   flex items-center justify-end  px-5 py-2"
      >
        <p className="text-gray-400">Close</p>
      </div>
    </div>
  )
}

export default CaseInsides
