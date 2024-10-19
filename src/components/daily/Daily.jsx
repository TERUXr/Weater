import React, { useState } from 'react'
import s from './daily.module.scss'
import DailyItem from './DailyItem'
import { useSelector } from 'react-redux'

const Daily = () => {
  const daily = useSelector((state)=>state.weather.weather.daily)
  console.log(daily);
  const [show , setShow] = useState(true);
  return (
    <div className={s.daily}>
      <nav className={s.daily__nav}>
        <button 
        className={`${s.daily__btn} ${show ? s.active : ''}`} 
        onClick={()=>{setShow(true)}}>На неделю</button>
        <button 
        className={`${s.daily__btn} ${!show ? s.active : ''}`} 
        onClick={()=>{setShow(false)}}>Отменить</button>
      </nav>
      <div className={`${s.daily__content} ${!show ? s.active : ''}`}>
        {
          daily.map((elem , index)=>{
            return <DailyItem day={elem} index={index} key={elem.dt}/>
          }).slice(0,7)
          }
      </div>
    </div>
  )
}

export default Daily