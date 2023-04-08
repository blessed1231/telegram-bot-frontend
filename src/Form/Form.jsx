import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../Hooks/useTelegram.jsx";
const Form = () => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [subject, setSubject] = useState('man')
    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
        const data = {
            country,
            city,
            subject
        }
        tg.sendData(JSON.stringify(data))
    })

    useEffect(() => {
        tg.WebApp.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.WebApp.offEvent('mainButtonClicked', onSendData)
        }
    } ,[])

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
                <option value={'man'}>Есть права (мужлан)</option>
                <option value={'woman'}>Нет прав) (фемка)</option>
            </select>
        </div>
    );
};

export default Form;