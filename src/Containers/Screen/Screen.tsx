import { FooterMenu } from "../../Components"

export const Screen = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className="w-[96%] flex flex-col pl-9 pt-10 h-[90%] bg-beige-650 bg-primary-500 relative">
      <div className="w-1 z-50 h-full border-r-4 border-primary-700 absolute top-0 right-0"></div>
      <div className="w-full z-50 h-1 border-b-4 border-primary-650 absolute bottom-0 left-0"></div>
      <div className="w-1 z-50 h-full border-l-4 border-primary-650 absolute bottom-0 left-0"></div>
      <div className="w-full z-50 h-1 border-t-4 border-primary-700 absolute top-0 left-0"></div>
      <div className=" w-[99%] z-10 h-[91%] absolute left-1 top-1">
        <div className="w-full pl-6 pt-6 h-full relative">
          {props.children}
        </div>
      </div>
        <FooterMenu />
    </div>
  )
}
