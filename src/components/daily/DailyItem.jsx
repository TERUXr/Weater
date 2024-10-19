import React from 'react'
import { icons } from '../../assets/image'
import s from './daily.module.scss'
import getTime from '../../utils/getTime';

const DailyItem = ({day , index}) => {
  // console.log(day);
  let desc = day.weather[0].description;
  desc = desc[0].toUpperCase() + desc.substring(1)
  const icon = parseInt(day.weather[0].icon) 
  const iconImg = icons[icon]
  return (
    <div className={s.daily__item}>
      <h3 className={s.daily__title}>{
        index == 0 ? 'Сегодня' :
        index == 1 ? 'Завтра' :
        getTime(day.dt , 'weekday')}
        </h3>
      <p className={s.daily__date}>{getTime(day.dt , 'day')} {getTime(day.dt)}</p>
      <img src={iconImg} alt="" className={s.daily__icon} />
      <p className={s.daily__temp}>{Math.round(day.temp.day)}°</p>
      <p className={s.daily__night}>{Math.round(day.temp.night)}°</p>
      <p className={s.daily__desc}>{desc}</p>
    </div>
  )
}

export default DailyItem