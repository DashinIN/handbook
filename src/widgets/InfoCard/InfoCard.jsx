import { useState } from "react";
import ButtonsRow from "../../shared/ButtonsRow/ButtonsRow";
import s from './InfoCard.module.scss'
import ItemsList from "../../shared/ItemsList/ItemsList";
import CheckList from "../../shared/CheckList/CheckList";
import TicketField from "../TicketField/TicketField";

const InfoCard = () => {

    const workForms = ['ТК РФ', 'ГПХ', 'ИП', 'Самозанятые']
    const [selectedWorkForm, setSelectedWorkForm] = useState(workForms[0])

    const workFormClickHandler = (formName) => {
        setSelectedWorkForm(formName)
    }

    const workers = ['Гражданин РФ', 'Гражданин РБ', 'Другой']
    const [selectedWorkers, setSelectedWorkers] = useState(workers[0])

    const workerClickHandler = (workerName) => {
        setSelectedWorkers(workerName)
    }

    const docs = ['Первый документ', 'Второй документ', 'Третий документ']
    const checking = ['Отпуск', 'Больничный', 'Техника', 'Карта']
    const requirements = ['Письмо сюда', 'Письмо сюда']

    const office = ['Первый оффис', 'Второй оффис', 'Третий оффис']
    const [selectedOffice, setSelectedOffice] = useState(office[0])

    const officeClickHandler = (officeName) => {
        setSelectedOffice(officeName)
    }

  return (
    <div className={s.wrapper}>
        <ButtonsRow 
            title={'Формы сотрудничества'}
            items={workForms} 
            selectedItem={selectedWorkForm} 
            clickHandler={workFormClickHandler}
        />
        <ButtonsRow 
            title={'Кого можем оформлять'}
            items={workers} 
            selectedItem={selectedWorkers} 
            clickHandler={workerClickHandler}
       />
       <ItemsList
            title={'Список необходимых документов'}
            items={docs}
       />
       <CheckList
       title={'Условия'}
       items={checking}
       />
        <ItemsList
            title={'Что требуется для оформления'}
            items={requirements}
       />
       <ButtonsRow 
            title={'Где офис'}
            items={office} 
            selectedItem={selectedOffice} 
            clickHandler={officeClickHandler}
       />
       <TicketField/>
    </div>
  )
}

export default InfoCard;