// import { DivType } from "../types"

import { Button, ReducedIcon } from ".."

// interface FooterMenuProps extends DivType {}

export const FooterMenu = () => {
  return (
    <div
      className="w-[100%] p-1 font-black border-t-2 border-primary-300 self-end bottom-1 left-0 bg-primary-400"
    >
      <Button>
        <ReducedIcon />
        Start
      </Button>
    </div>
  )
}


