import React from 'react'
import Information from "./Information"
import Study from "./Study"
import Schedule from "./Schedule"
import Review from "./Review"
import Button from "./shared/Button"
import StudyItem from './StudyItem'


function Form() {
  
  return <div>
    <form className="form">
        <Information />
        <Study />
        <Schedule />
        <Review />
        <Button type="submit">Register</Button>
    </form>
  </div>
}

export default Form
