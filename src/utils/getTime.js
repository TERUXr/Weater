export default function getTime(dt , type) {
  let milsec = dt * 1000;
  let date = new Date(milsec)
  const result = 
  type == 'hours'  ? date.getHours(): 
  type == 'min' ?date.getMinutes() : 
  type == 'weekday' ?date.toLocaleString('ru-RU' , {weekday: 'short'}) :  
  type == 'day' ?date.toLocaleString('ru-RU' , {day: 'numeric'}) :  
  date.toLocaleString('ru-RU' , {month : 'short'}) 
  return result
}