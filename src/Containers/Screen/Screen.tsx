export const Screen = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className="w-[96%] flex flex-col p-3 h-[90%] bg-beige-650 bg-primary-500 relative">
      <div className="w-full h-full border-t-4 border-primary-700 absolute top-0 left-0"></div>
      <div className="w-full h-full border-r-4 border-primary-700 absolute top-0 right-0"></div>
      <div className="w-full h-full border-b-4 border-primary-650 absolute bottom-0 left-0"></div>
      <div className="w-full h-full border-l-4 border-primary-650 absolute bottom-0 right-0"></div>
      {props.children}
    </div>
  )
}
