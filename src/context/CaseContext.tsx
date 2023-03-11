import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  SetStateAction,
} from 'react'
import { Chroma2 } from '../data/Data'
type Cell = {
  click: boolean
  setClick: React.Dispatch<SetStateAction<boolean>>
  OpenCase: (box: any) => void
  caseData: any | unknown
}

const CaseContext = createContext<Cell | null>(null)

export const CaseContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [click, setClick] = useState<boolean>(false)
  const [caseData, setCaseData] = useState<any | unknown>([])

  useEffect(() => {}, [click])

  const OpenCase = (box: any) => {
    //raondomizing first level array from the objects
    const randomCase = Math.floor(Math.random() * box.length)
    /// initialising randomized first level array

    const randomGroupe = box[randomCase]?.gunArray
    //randomizing secoend level array
    if (randomGroupe) {
      const randomizedArray = Math.floor(Math.random() * randomGroupe?.length)
      const randomizedGun = randomGroupe[randomizedArray]
      if (randomizedGun !== undefined) {
        setCaseData(randomizedGun)
        setCaseData(randomizedGun)
      }

      console.log(randomizedGun)
    }
  }

  return (
    <CaseContext.Provider value={{ click, setClick, OpenCase, caseData }}>
      {children}
    </CaseContext.Provider>
  )
}

export const UseCaseContext = () => {
  const context = useContext(CaseContext)
  if (!context) {
    throw new Error('it is not wrapped')
  }
  return context
}
