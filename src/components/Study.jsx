import {useContext, useState} from 'react'
import React from 'react'
import Card from "../components/shared/Card"
import StudyItem from './StudyItem'
import ClassesContext from '../context/Context'

function Study() {
  const { classes } = useContext(ClassesContext);
  const [study, setStudy] = useState('');

  return <Card>
    <div className="card-title">
        <h3 className="title">Area of Study</h3>
        <p className="subtitle">Please choose your area of study. Mutliple selections are allowed.</p>
    </div>


    {classes.map((item) => (
      <StudyItem 
        item={item}
        select={(study) => setStudy(study)}/>
    ))}


  </Card>
}

export default Study;
