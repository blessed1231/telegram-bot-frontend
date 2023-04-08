import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../Hooks/useTelegram.jsx";
const Form = () => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [subject, setSubject] = useState('man')
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    })

    useEffect(() => {
        if (!city || !country ) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }

    }, [country, city])

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    const onChangeCountry = (e) =>  {
        setCountry(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} placeholder={'Страна'} type={'text'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} placeholder={'Улица'} type={'text'} value={city}  onChange={onChangeCity}/>
            <select value={subject} onChange={onChangeSubject} className='select'>
                <option value={'man'}>Есть права</option>
                <option value={'woman'}>Нет прав) </option>
            </select>
        </div>
    );
};

export default Form;