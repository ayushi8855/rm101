import React from 'react'
import displayRazorpay from '../utils/payments'
export const CourseCard = () => {
  return (
    <div>
        <h1>Payment Gateway</h1>
        <button onClick={displayRazorpay} className="course-button">Buy Course</button>
    </div>
  )
}
