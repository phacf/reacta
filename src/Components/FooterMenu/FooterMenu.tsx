// import { DivType } from "../types"

import { Button, ReducedIcon, Clock } from ".."

// interface FooterMenuProps extends DivType {}

export const FooterMenu = () => {
  return (
    <footer
      className="w-full flex justify-between items-center z-40 absolute px-2 py-1 font-black border-t-2 border-primary-300 self-end bottom-1 left-0 bg-primary-400"
    >
      <Button>
        <ReducedIcon />
        Start
      </Button>
      <div className="relative w-fit px-4 py-1 h-full ">
        <div className="w-full h-full border-t-2 border-primary-450 absolute top-0 left-0  "></div>
        <div className="w-full h-full border-r-2 border-primary-350 absolute top-0 right-0 "></div>
        <div className="w-full h-full border-b-2 border-primary-350 absolute bottom-0 left-0 "></div>
        <div className="w-full h-full border-l-2 border-primary-450 absolute bottom-0 right-0 "></div>

        <Clock />
      </div>
    </footer>
  )
}


