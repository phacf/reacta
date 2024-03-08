import IconSprite from 'assets/icons/ms98icons.png'
import IconWin from 'assets/icons/Windows98ComputerIcon.webp'

import { iconMap } from './iconMap'
import { DivType } from '../types'

interface IconProps extends DivType {
  iconname: string
}

export const IconComponent = (props: IconProps) => {
  const { iconname } = props

  const { x, y } = iconMap[iconname]

  return <div
    {...props}
    style={{
      cursor: 'pointer',
      backgroundImage: `url(${IconSprite})`,
      backgroundPosition: `-${25 + 54 * x}px -${25 + 54 * y}px`,
      width: '28px',
      height: '27px',
      transform: 'scale(1.5)'
    }}
  >
  </div>
}

export const ReducedIcon = () => {
  return <div
    style={{
      backgroundImage: `url(${IconWin})`,
      width: '28px',
      height: '25px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      margin: '0 5px 0 0'
    }}
  ></div>
}
