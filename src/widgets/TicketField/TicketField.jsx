import s from './TicketField.module.scss'

const TicketField = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.alert}>Не нашли нужной информации?</div>
        <a href="/" className={s.link}>link to ticket</a>
    </div>
  )
}

export default TicketField;