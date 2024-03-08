import { ButtonType } from '../types'

interface ButtonProps extends ButtonType {}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={`px-2 pt-1 pb-1 text-primary-900 bg-primary-400 relative group`}>
      <div className="w-full h-full border-t-2 border-primary-200 absolute top-0 left-0 group-active:border-primary-900 "></div>
      <div className="w-full h-full border-r-2 border-primary-900 absolute top-0 right-0 group-active:border-primary-200"></div>
      <div className="w-full h-full border-b-2 border-primary-900 absolute bottom-0 left-0 group-active:border-primary-200"></div>
      <div className="w-full h-full border-l-2 border-primary-200 absolute bottom-0 right-0 group-active:border-primary-900"></div>
      <div className='flex'>
      {props.children}
      </div>
    </button>
  )
}


export const CloseButton = (props: ButtonProps) => {
  return (
    <button {...props} className="cursor-pointer relative group bg-primary-400 text-primary-900 flex justify-center items-center h-5 w-5 font-black text-xs">
      <div className="w-full h-full border-t-2 border-primary-200 absolute top-0 left-0 group-active:border-primary-900 "></div>
      <div className="w-full h-full border-r-2 border-primary-900 absolute top-0 right-0 group-active:border-primary-200"></div>
      <div className="w-full h-full border-b-2 border-primary-900 absolute bottom-0 left-0 group-active:border-primary-200"></div>
      <div className="w-full h-full border-l-2 border-primary-200 absolute bottom-0 right-0 group-active:border-primary-900"></div>
      <div className='flex'>
      {props.children}
      </div>
    </button>
  )
}

