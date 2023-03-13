import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  SetStateAction,
  RefObject,
} from 'react'
import { useLocation } from 'react-router-dom'
import { Chroma2 } from '../data/Data'
type Cell = {
  click: boolean
  setClick: React.Dispatch<SetStateAction<boolean>>
  OpenCase: (box: any, points: string) => void
  caseData: any | unknown
  randomizeGuns: any | unknown
  opendCase: any | unknown
  scrollRef: RefObject<HTMLDivElement>
  line: boolean
  openPop: boolean
  setOpenPop: React.Dispatch<SetStateAction<boolean>>
  saveInentory: () => void
  inventory: any
  sellItem: (id: string, points: string) => void
  money: number

  Sell: (id: string, price: string) => void
  audioCaseRef: RefObject<HTMLAudioElement>
  handleMusic: () => void
  audioRef: RefObject<HTMLAudioElement>
  gabeRef: RefObject<HTMLAudioElement>
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

  // save money system
  const [money, setMoney] = useState<number>(50)

  const audioCaseRef: RefObject<HTMLAudioElement> = React.useRef(null)

  const OpenCase = (box: any, points: string) => {
    if (audioCaseRef.current !== null) {
      audioCaseRef.current.play()
    }
    //raondomizing first level array from the objects
    //randomizing 10 guns for scrolling array
    setMoney(money - Number(points))
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
    setLine(!line)
    setInventory([...inventory, opendCase])
    setRandomizeGuns([])
  }

  const sellItem = (id: string, points: string) => {
    setMoney(money + Number(points))

    setRandomizeGuns([])
    setLine(!line)
  }

  const inventoryBase = localStorage.getItem('inventory' || '[]')
  const moneyBase = localStorage.getItem('money' || Number)
  useEffect(() => {
    if (inventoryBase) {
      setInventory(JSON.parse(inventoryBase))
    }
  }, [])

  useEffect(() => {
    if (moneyBase) {
      setMoney(JSON.parse(moneyBase))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory))
  }, [inventory])

  useEffect(() => {
    localStorage.setItem('money', JSON.stringify(money))
  }, [money])

  /// selling items

  const Sell = (id: string, price: string) => {
    let singleItem = inventory?.filter((val: any) => id !== val.id)
    setInventory(singleItem)
    setMoney(money + Number(price))
  }

  /// main theme song playing
  const audioRef: RefObject<HTMLAudioElement> = React.useRef(null)
  // gaben ref
  const gabeRef: RefObject<HTMLAudioElement> = React.useRef(null)

  const [musicStop, setMusicStop] = React.useState<boolean>(true)
  const handleMusic = () => {
    if (location.pathname === '/') {
      setMusicStop(!musicStop)
      if (musicStop) {
        if (audioRef.current !== null) {
          audioRef.current.play()
          audioRef.current.volume = 0.2
        }
      } else {
        if (audioRef.current !== null) {
          audioRef.current.pause()
        }
      }
    } else if (location.pathname === '/gabe') {
      setMusicStop(!musicStop)
      if (musicStop) {
        if (gabeRef.current !== null) {
          gabeRef.current.pause()
        }
      }
      if (!musicStop) {
        if (gabeRef.current !== null) {
          gabeRef.current.play()
          gabeRef.current.volume = 0.2
        }
      }
    }
  }
  useEffect(() => {
    setMusicStop(!musicStop)
    if (audioRef.current !== null) {
      audioRef.current.pause()
    }
  }, [])

  const location = useLocation()
  // gabem audio

  useEffect(() => {
    if (location.pathname === '/gabe') {
      if (audioRef.current !== null) {
        audioRef.current.pause()
      }
      if (gabeRef.current !== null) {
        gabeRef.current.play()
        gabeRef.current.volume = 0.2
      }
    } else {
      if (audioRef.current !== null) {
        audioRef.current.play()
        audioRef.current.volume = 0.2
      }
    }
  }, [location])
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
        sellItem,
        money,
        Sell,
        audioCaseRef,
        handleMusic,
        audioRef,
        gabeRef,
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
