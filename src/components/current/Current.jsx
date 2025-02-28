import React from 'react'
import s from './current.module.scss'
import { icons, images } from '../../assets/image'
import { useSelector } from 'react-redux'
import getWind from '../../utils/getWind'
import getTime from '../../utils/getTime'

const Current = () => {
  const {current , name} = useSelector((state)=>state.weather.weather)
  const icon = parseInt(current.weather[0].icon) 
  const iconImg = icons[icon]
  console.log(icon);
  return (
    <div className={s.current}>
        <div className={s.current__info}>
            <p className={s.current__deg}>{Math.round(current.temp)}°</p>
            <p className={s.current__day}>Сегодня</p>
            <p className={s.current__time}>
              Время: {getTime(current.dt , 'hours')}:
              {getTime(current.dt , 'min') < 10 ? '0' + getTime(current.dt , 'min'): getTime(current.dt , 'min')}
              </p>
            <p className={s.current__city}>Город: {name}</p>
            <img src={iconImg} alt="" className={s.current__img} />
        </div>
        <div className={s.current__content}>
          <div className={s.current__card}>
            <div className={s.current__icon}>
              <img src={images.temp} alt="" />
            </div>
            <p className={s.current__name}>Температура</p>
            <p className={s.current__desc}>
              {Math.round(current.temp)}° - ощущается как {Math.round(current.feels_like)}°
              </p>
          </div>
          <div className={s.current__card}>
            <div className={s.current__icon}>
              <img src={images.pressure} alt="" />
            </div>
            <p className={s.current__name}>Давление </p>
            <p className={s.current__desc}>{current.pressure} мм ртутного столба</p>
          </div>
          <div className={s.current__card}>
            <div className={s.current__icon}>
              <img src={images.precipitation} alt="" />
            </div>
            <p className={s.current__name}>Осадки</p>
            <p className={s.current__desc}>
              { current.rain ? 'Возможен дождь' : current.snow ? 'Возможен снег' : 'Без осадков' }
              </p>
          </div>
          <div className={s.current__card}> 
            <div className={s.current__icon}>
              <img src={images.wind} alt="" />
            </div>
            <p className={s.current__name}>Ветер</p>
            <p className={s.current__desc}>{current.wind_speed} м/с {getWind(current.wind_deg)}</p>
          </div>
        </div>
    </div>
  )
}

export default Current