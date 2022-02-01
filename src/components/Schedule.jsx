import {useContext} from 'react'
import Card from "./shared/Card"
import Chart from "./shared/Chart"
import ScheduleItem from './ScheduleItem'
import ClassesContext from '../context/Context'




function Schedule() {
  const {classes} = useContext(ClassesContext)


  return <Card>
    <div className="card-title">
        <h3 className="title">Class Schedule</h3>
        <p className="subtitle">Please choose one class per area of study. 
        You cannot take multiple classes that are in the same date range.</p>
    </div>
    <Chart />
    <div className="schedule-chart" >
        {classes.map((item)=> (
          <ScheduleItem item={item}
                        key={item.study}
                        />
      ))}

    </div> 

  </Card>
}

export default Schedule
