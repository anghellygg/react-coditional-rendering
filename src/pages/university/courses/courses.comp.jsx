import React from 'react';
import './course.style.css';

const CoursePage = (props) => {
    return (
        
        <div className="course-container">
          {props.coursename}
        </div>
    );
    
}

export default CoursePage;