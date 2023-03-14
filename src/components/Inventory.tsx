import React, { useRef } from 'react'
import { UseCaseContext } from '../context/CaseContext'
import { BsFillFileArrowUpFill, BsFillFileArrowDownFill } from 'react-icons/Bs'
const Inventory = () => {
  const { inventory, Sell } = UseCaseContext()
  const style = {
    mainDiv: ` flex items-center justify-center    w-[100%] h-[100vh]   bg-gray-900  `,
    btnDiv: `flex flex-col gap-2 items-end justify-end  mb-2  h-[445px]`,
    icon: `text-[2rem] text-gray-500  hover:text-gray-600 cursor-pointer`,
  }

  const scroll = useRef(null)

  const scrollUpDown = (up: string, down: string) => {
    const element = (scroll.current as unknown) as HTMLDivElement
    if (up === 'up') {
      if (element) {
        element.scrollBy({
          top: -445,
          behavior: 'smooth',
        })
      }
    }

    if (down == 'down') {
      if (element) {
        element.scrollBy({
          top: 445,
          behavior: 'smooth',
        })
      }
    }
  }
  /// side photo and price div for single product
  const [singleInventoryProduct, setSingleInvenotoryProduct] = React.useState<
    any | unknown
  >()
  React.useEffect(() => {
    setSingleInvenotoryProduct(inventory[0])
  }, [inventory])
  const SingleProduct = (id: string) => {
    const singleProd = inventory?.find((val: any) => val.id === id)
    setSingleInvenotoryProduct(singleProd)
    console.log(id)
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.btnDiv}>
        <BsFillFileArrowUpFill
          onClick={() => scrollUpDown('up', '')}
          className={style.icon}
        />{' '}
        <BsFillFileArrowDownFill
          onClick={() => scrollUpDown('', 'down')}
          className={style.icon}
        />
      </div>
      <div className=" flex items-start justify-center w-[35%]  bg-gray-700">
        <div
          ref={scroll}
          className="   w-[100%]    h-[445px] overflow-y-scroll  scroll bg-gray-800"
        >
          <div className="max-h-[445px]  w-[100%] inventoryGrid  ">
            {inventory?.map((val: any, i: number) => {
              return (
                <div
                  key={i}
                  style={{ border: `1px solid  ${val?.color}` }}
                  onClick={() => SingleProduct(val?.id)}
                  className="rounded-[2px] h-[9rem] w-[8rem] flex flex-col justify-center cursor-pointer hover:bg-gray-600"
                >
                  <p className="text-[9px] ml-1  text-gray-400">{val?.title}</p>
                  <img className="w-[110px] h-[110px]" src={val?.img} />
                  <p className="text-[10px] text-white ml-1">${val?.price}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div
        className="  h-[445px] w-[400px] bg-gray-700 flex flex-col items-center justify-center "
        style={{ border: `1px solid ${singleInventoryProduct?.color}` }}
      >
        <img
          className="w-[300px]  h-[270px] mb-10 "
          src={singleInventoryProduct && singleInventoryProduct?.img}
        />

        <div className="outline outline-[1px] outline-gray-300  opacity-20 w-[80%] rounded-[100px] "></div>

        <div className="w-[100%] ml-20 text-[10px] text-gray-400">
          <h1
            className="text-[1.5rem] font-bold"
            style={{ color: singleInventoryProduct?.color }}
          >
            {singleInventoryProduct?.title}
          </h1>
          <div className="text-white gap-1 flex ">
            <p>exterior :</p>
            <span className="text-gray-400">
              {singleInventoryProduct?.exterior}
            </span>
          </div>
          <div className="text-white w-[100%]  flex gap-1 ">
            <p>Skin Rarity :</p>
            <span
              className="text-gray-400"
              style={{ color: singleInventoryProduct?.color }}
            >
              {singleInventoryProduct?.rarity}
            </span>
          </div>
          <p>${singleInventoryProduct?.price}</p>
        </div>
        <button
          onClick={() =>
            Sell(singleInventoryProduct?.id, singleInventoryProduct?.price)
          }
          className="text-white text-[12px] bg-green-700 p-1 px-2 rounded-[9px] hover:bg-green-600  ml-60"
        >
          put item on sale
        </button>
      </div>
    </div>
  )
}

export default Inventory
