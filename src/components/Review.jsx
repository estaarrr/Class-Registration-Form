import {useContext} from 'react'
import React from 'react'
import Card from './shared/Card'
import Chart from './shared/Chart'
import ReviewItem from './ReviewItem'
import Schedule from './Schedule'
import ClassesContext from '../context/Context'


function Review() {
  const {classes} = useContext(ClassesContext)

  
  return <Card>
   <div className="card-title">
      <h3 className="title">Review</h3>
      <p className="subtitle">Please review the following class schedule before submitting.</p>
    </div>
    <Chart />

    <div className="review-chart">
      {classes.map((item) => (
        <div key= {item.study}> 
          <ul>
            {item.schedules.map(schedule => (
              <ReviewItem schedule={schedule}
                          item={item}
                          key={schedule.date} />
            ))}
          </ul>
      </div>
      ))}
      </div>



    
  </Card>
}

export default Review
