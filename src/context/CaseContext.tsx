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
  randomizeGuns: any | unknown
  opendCase: any | unknown
  scrollRef: React.RefObject<HTMLDivElement>
  line: boolean
  openPop: boolean
  setOpenPop: React.Dispatch<SetStateAction<boolean>>
  saveInentory: () => void
  inventory: any
}

const CaseContext = createContext<Cell | null>(null)

export const CaseContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const randomIDnumbs = new Array(26)
    .fill('')
    .map((_, i) => String.fromCharCode(i + 97))

  const [click, setClick] = useState<boolean>(false)
  const [caseData, setCaseData] = useState<any | unknown>([])
  const [opendCase, setOpendCase] = useState<any | unknown>()
  useEffect(() => {}, [click])
  const [randomizeGuns, setRandomizeGuns] = useState<any | unknown>([])

  const scrollRef = React.useRef(null)
  const [line, setLine] = useState<boolean>(false)
  const OpenCase = (box: any) => {
    //raondomizing first level array from the objects
    //randomizing 10 guns for scrolling array
    const arr = []
    if (box) {
      setLine(true)
      for (let i = 0; i < 30; i++) {
        const randomCase = Math.floor(Math.random() * box?.length)
        /// initialising randomized first level array

        const randomGroupe = box[randomCase]?.gunArray
        // randmoziing group for scroll
        const randomizedArray = Math.floor(Math.random() * randomGroupe?.length)
        if (randomGroupe) {
          arr.push(randomGroupe[randomizedArray])
        }
      }
    }

    /// random id
    let randomId = ''

    for (let i = 0; i < 16; i++) {
      let randomizer = Math.floor(Math.random() * randomIDnumbs.length)

      randomId += randomIDnumbs[randomizer]
    }

    //randomizing secoend level array

    if (arr) {
      let newArr = arr.map((gun: any) => {
        let color = ''
        if (gun.rarity === 'Mil-Spec') {
          color = '#4b69cd'
        } else if (gun.rarity === 'Restricted') {
          color = '#8847ff'
        } else if (gun.rarity === 'Classified') {
          color = '#d32ce6'
        } else if (gun.rarity === 'Covert') {
          color = '#eb4b4b'
          color
        } else if (gun.rarity === 'Rare') {
          color = '#FFD700'
        }

        return { ...gun, color, id: randomId }
      })
      console.log(newArr)
      const randomizerArr = Math.floor(Math.random() * newArr.length)
      // const randomizedForGroup = newArr[randomizerArr]

      setRandomizeGuns(newArr)
    }
  }

  // case opening pop up

  const [openPop, setOpenPop] = useState<boolean>(false)
  useEffect(() => {
    const scrollDistance = 2000
    const element = (scrollRef.current as unknown) as HTMLDivElement

    if (element) {
      element.scrollBy({
        left: scrollDistance,
        behavior: 'smooth',
      })
    }
    setTimeout(() => {
      setOpendCase(randomizeGuns[randomizeGuns.length - 3])
    }, 1000)
  }, [randomizeGuns])
  // inventory

  const [inventory, setInventory] = useState<any>([])
  const saveInentory = () => {
    setInventory([...inventory, opendCase])

    setRandomizeGuns([])
    setLine(!line)
  }
  return (
    <CaseContext.Provider
      value={{
        click,
        setClick,
        OpenCase,
        caseData,
        randomizeGuns,
        scrollRef,
        opendCase,
        line,
        openPop,
        setOpenPop,
        saveInentory,
        inventory,
      }}
    >
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
