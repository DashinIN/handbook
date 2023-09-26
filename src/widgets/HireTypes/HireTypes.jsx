import { useState } from 'react'
import s from './HireTypes.module.scss'

const HireTypes = () => {
    const countries = ['Россия', 'Беларусь', 'Армения', 'Казахстан', 'Узбекистан', 'Азербайджан', 'Китай']
    const [selectedCountry, setSelectedCountry] = useState(countries[0])

    const clickHandler = (countryName) => {
        setSelectedCountry(countryName)
    }

    return (
    <div className={s.wrapper}>
        <h2>Возможности оформления в страны</h2>
        <div className={s.buttonsRow}>
            {countries.map(country => (
                <button 
                className={`${s.countryBtn} ${country === selectedCountry ? s.active : ''}`}
                onClick={() => clickHandler(country)}
                key={country}>
                    {country}
                </button>
            ))}
        </div>
    </div>
  )
}

export default HireTypes;