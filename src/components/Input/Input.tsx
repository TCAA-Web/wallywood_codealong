import style from './Input.module.scss'

interface inputProps {
  label: string
  type: string
  name: string
  value?: string
}

export function Input({ label, type, name }: inputProps) {
  return (
    <label className={style.inputStyle}>
      {label}
      <input type={type} name={name} placeholder={`Indtast ${name}`}></input>
    </label>
  )
}
