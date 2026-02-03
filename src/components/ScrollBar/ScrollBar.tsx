import style from './ScrollBar.module.scss'

interface ScrollBarProps {
  scrollPercent: number
}

export function ScrollBar({ scrollPercent }: ScrollBarProps) {
  return <span className={style.scrollBar} style={{ width: scrollPercent + '%' }}></span>
}
