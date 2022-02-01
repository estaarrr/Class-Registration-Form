import {useContext, useEffect, useState} from 'react'
import Card from './shared/Card'
import ClassesContext from '../context/Context'


function ScheduleItem({item, schedule}) {
    const [scheduleShow, setScheduleShow] = useState(true)
    const {classes, scheduleList, showReview, reviewList} = useContext(ClassesContext)
    const [message, setMessage] = useState('')


    useEffect(() => {
        if (scheduleList.show === true && scheduleList.item === item.study) {
          setScheduleShow(false)
        } 
      },[scheduleList])

    

  return <Card>
  <div key={item.study} hidden={scheduleShow} className="study-column">{item.study}
      <ul >
            {item.schedules.map((schedule) => (
            <li key={schedule.id} className="schedule-dates">
                <input type="checkbox" 
                        value={schedule.date} 
                        onChange={() => showReview(schedule.date)}
                         required/>
                <label key={schedule.id}>{schedule.date}</label>
    
            </li>
            ))}

      </ul> 
    </div>   
      {message && <div className="message">{message}</div>}

</Card>
}

export default ScheduleItem
