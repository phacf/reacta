import { CloseButton } from "../../Components"
import { DivType } from "../../Components/types"

interface PageProps extends DivType {
  label: string
  onClose: () => void
}

export const Page = (props: PageProps) => {
  const { onClose, label = 'Page'} = props
  return (
    <div className="w-full h-full bg-primary-400 relative">
      <div className="w-full z-10 h-full border-t-2 border-primary-200 absolute top-0 left-0  "></div>
      <div className="w-full z-10 h-full border-r-2 border-primary-900 absolute top-0 right-0 "></div>

      <div className="w-[83.4rem] top-1 py-1 px-2 z-50 bg-primary-600 left-1 absolute  text-primary-200 flex items-center justify-between">
        {label}
        <CloseButton onClick={onClose} >X</CloseButton>
      </div>
      <div className="w-full h-full border-b-2 border-primary-900 absolute bottom-0 left-0 "></div>
      <div className="w-full h-full border-l-2 border-primary-200 absolute bottom-0 right-0 "></div>
      <div className='flex pt-16 pl-1 pr-1 pb-1'>

        {props.children}
      </div>
    </div>
  )
}

