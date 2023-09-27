import { useState } from 'react'
import s from './HireTypes.module.scss'
import InfoCard from '../InfoCard/InfoCard'
import ButtonsRow from '../../shared/ButtonsRow/ButtonsRow'

const HireTypes = () => {
    const countries = ['Россия', 'Беларусь', 'Армения', 'Казахстан', 'Узбекистан', 'Азербайджан', 'Китай']
    const [selectedCountry, setSelectedCountry] = useState(countries[0])

    const countryClickHandler = (countryName) => {
        setSelectedCountry(countryName)
    }

    return (
    <div className={s.wrapper}>
        <ButtonsRow 
            title={'Возможности оформления в страны'}
            items={countries} 
            selectedItem={selectedCountry} 
            clickHandler={countryClickHandler}
        />
        <InfoCard/>
    </div>
  )
}

export default HireTypes;