import s from './ButtonsRow.module.scss'

const ButtonsRow = ({title, items, selectedItem, clickHandler}) => {
  return (
    
        <div className={s.wrapper}>
            <h2>{title}</h2>
            <div className={s.buttonsRow}>
                {items.map(item => (
                    <button 
                    className={`${s.button} ${item === selectedItem ? s.active : ''}`}
                    onClick={() => clickHandler(item)}
                    key={item}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
   
  )
}

export default ButtonsRow;