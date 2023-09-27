import s from './ItemsList.module.scss'

const ItemsList = ({title, items}) => {
  return (
        <div className={s.wrapper}>
            <h2>{title}</h2>
            <ul className={s.itemsList}>
                {items.map(item => (
                    <li 
                    className={s.listItem}
                    key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default ItemsList;