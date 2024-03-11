import { DivType } from "../types"

interface MenuProps extends DivType {
  isOpen: boolean
}

export const Menu = (props: MenuProps) => {

  const { isOpen } = props

  return (
    <div className={`w-48 h-[20rem] flex pl-[3px] ${!isOpen && 'hidden'}  items-center -translate-y-[20.5rem] -translate-x-[0.1rem] bg-primary-400 absolute`}>
      <div className="w-full h-full border-t-2 border-primary-200 absolute top-0 left-0 group-active:border-primary-900 "></div>
      <div className="w-full h-full border-r-2 border-primary-900 absolute top-0 right-0 group-active:border-primary-200"></div>
      <div className="w-full h-full border-b-2 border-primary-900 absolute bottom-0 left-0 group-active:border-primary-200"></div>
      <div className="w-full h-full border-l-2 border-primary-200 absolute bottom-0 right-0 group-active:border-primary-900"></div>
      <div className="h-[19.8rem] w-[98%] relative cursor-pointer z-20 before:absolute before:z-10  before:border-l-[30px]  before:border-primary-600 before:h-full before:w-full before:content-['']">
        <div className="w-full h-full text-ellipsis overflow-hidden pt-2 pl-10 ">

          asdasdfasfasfasfasdfdssfasfdfasdfasfasfd
        </div>
      </div>
    </div>
  )
}


