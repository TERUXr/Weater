import React, { useState } from 'react'
import { images } from '../../assets/image'
import style from './navbar.module.scss'
import { getLatLon } from '../../store/features/weather'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const setWeather = (event)=>{
    if (event.key == 'Enter' && query) {
      dispatch(getLatLon(query))    
    }
  }

  return (
    <nav className={style.nav}>
        <a href="" className={style.logo}>
            <img src={images.logo} alt="" className={style.logo__img} />
            vue weather
        </a>
        
        <div className={style.search}>
            <img src={images.city} alt="" className={style.search__img} />
            <input 
              value={query}
              type="text" 
              className={style.search__input} 
              placeholder='Выбрать город'
              onChange={(event)=>{ setQuery(event.target.value) }}
              onKeyUp={setWeather}
            />
        </div>
    </nav>
  )
}

export default Navbar