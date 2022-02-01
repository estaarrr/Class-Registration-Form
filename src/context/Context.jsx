import { createContext, useState, useEffect } from 'react'
import classData from "../data/classData"

const ClassesContext = createContext()

export const ClassesProvider = ({children}) => {

    const [classes, setClasses] = useState(classData)


    const [scheduleList, setScheduleList] = useState({
        item: {},
        show: false
    })
    const [reviewList, setReviewList] = useState({
        schedule: {},
        show: false
    })

    // //Fetch class data
    // useEffect(() => {
    //     fetchClasses()
    // }, [])
    // const fetchClasses = async () => {
    //     const response = await
    //     fetch ("http://localhost:5000/classes?_sort=id&_order=desc")
    //     const data = await response.json()

    //     setClasses(data)
    // }

    //Show schedule of selected area of study

    const showSchedule = (item) => {
        setScheduleList({
            item,
            show: true
        })
    }

    //Show review of selected dates
    const showReview = (schedule) => {
        setReviewList({
            schedule,
            show: true
        })
    }

    return <ClassesContext.Provider value={{
        classes,
        scheduleList,
        showSchedule,
        scheduleList,
        reviewList,
        showSchedule,
        showReview,
    }}>
        {children}
    </ClassesContext.Provider>
}

export default ClassesContext