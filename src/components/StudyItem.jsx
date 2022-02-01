import {useContext} from 'react'
import React from 'react'
import ClassesContext from '../context/Context'

function StudyItem({item, select}) {
    const {classes, showSchedule} = useContext(ClassesContext)

  return <div>
      <ul className="selections">
      <input 
        type="checkbox" 
        id={item.study}  
        name={item.study} 
        value={item.study} 
        onChange={() => showSchedule(item.study)} 
        required/>
      <label key={item.study} className="study-label">{item.study}</label>
  </ul> 
  </div>

}

export default StudyItem
