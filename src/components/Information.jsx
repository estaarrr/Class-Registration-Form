import { useState } from 'react'
import React from 'react'
import Card from "./shared/Card"

function Information() {

    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    

  return <Card>
        <div className="card-title">
            <h3 className="title">Registration Information</h3>
            <p className="subtitle">Please fill out all required fields to register.</p>
        </div>

        <div className="field">
            <label htmlFor="" className="field-label">Full Name</label>
            <input 
                type="text" 
                className="field-input" 
                onChange={handleTextChange}
                value={text}
                placeholder='Enter your first and last name' required/>
        </div>

        <div className="field">
            <label htmlFor="" className="field-label">E-mail Address</label>
            <input 
                type="email" 
                className="field-input"
                onChange={handleEmailChange} 
                value={email}
                placeholder='E-mail' required/>
        </div>

        <div className="field">
            <label htmlFor="" className="field-label">Birthday</label>
            <input type="date" 
            className="field-input" 
            onChange={handleDateChange}
            value={date}
            placeholder='Enter your first and last name' required/>
        </div>



  </Card>
}

export default Information;
