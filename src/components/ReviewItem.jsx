import {useContext, useEffect, useState} from 'react'
import React from 'react'
import Card from './shared/Card'
import ClassesContext from '../context/Context'


function ReviewItem({item, schedule, key}) {
  const [reviewShow, setReviewShow] = useState(true)
  const {classes, reviewList} = useContext(ClassesContext)
  const [message, setMessage] = useState('')

  
  useEffect(() => {
     if (reviewList.show === true && reviewList.schedule === schedule.date) {
      setReviewShow(false)
    } 
  },[reviewList])


  useEffect(() => {
    if (reviewShow === false && key == 'May 10 to June 10' && key == 'June 9 to July 9'
  ) {
      setMessage('Warning: You cannot take multiple classes that are in the same date range')
  }
  }, [reviewList])


  return <Card>
      <div key= {item.study} hidden={reviewShow}> 
        {item.study}
          <ul>
              <div key={schedule.date}>{schedule.date}</div>
          </ul>

      </div>
    
      {message && <div className="message">{message}</div>}

  </Card>
}

export default ReviewItem
