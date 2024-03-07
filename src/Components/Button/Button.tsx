import { ButtonType } from '../types'

interface ButtonProps extends ButtonType {}

export const Button = (props: ButtonProps) => {
  return (
    <button className='px-2 pt-2 pb-1  relative group'>
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


