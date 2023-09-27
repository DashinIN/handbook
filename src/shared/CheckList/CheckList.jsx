import s from './CheckList.module.scss'

const CheckList = ({title, items}) => {
  return (
    <div className={s.wrapper}>
            <h2>{title}</h2>
            <div className={s.itemsList}>
                {items.map(item => (
                    <div 
                    className={s.checkItem}
                    key={item}>
                        {item}
                        <input type="checkbox"/>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default CheckList;