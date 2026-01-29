import style from './Grid.module.scss'

interface GridProps {
  gtr?: number
  gtc?: number
  gap: number
  children: React.ReactNode
}

export function Grid({ gtr, gtc, gap, children }: GridProps) {
  let cName

  if (gtc) {
    cName = { gridTemplateColumns: `repeat(${gtc}, 1fr)`, gap: gap + 'px' }
  } else if (gtr) {
    cName = { gridTemplateRows: `repeat(${gtr}, 1fr)`, gap: gap + 'px' }
  } else {
    cName = { gridAutoFlow: 'column', gap: gap + 'px' }
  }

  return (
    <section className={style.gridStyle} style={cName}>
      {children}
    </section>
  )
}
