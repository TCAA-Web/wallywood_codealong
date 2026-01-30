import style from './Grid.module.scss'

interface GridProps {
  gtr?: string
  gtc?: string
  gap: number
  children: React.ReactNode
}

export function Grid({ gtr, gtc, gap, children }: GridProps) {
  let cName

  if (gtc) {
    cName = { gridTemplateColumns: `${gtc}`, gap: gap + 'px' }
  } else if (gtr) {
    cName = { gridTemplateRows: `${gtr}`, gap: gap + 'px' }
  } else {
    cName = { gridAutoFlow: 'column', gap: gap + 'px' }
  }

  return (
    <section className={style.gridStyle} style={cName}>
      {children}
    </section>
  )
}
