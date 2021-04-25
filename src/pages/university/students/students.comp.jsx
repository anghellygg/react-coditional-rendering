import React from 'react';
import './students.style.css';
import women from '../img/women.jpg'
import men from '../img/men.jpg'
const Students = (props) => {
    
    return (
        
        
        <div className="student-container">
             {props.student.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         {
            

             props.student.grade < 3 
             ?
              <span className="student-reprobed">&nbsp;{props.student.grade} </span>
              
             : 
             <span>&nbsp;{props.student.grade} </span>
         }   
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         {
               props.student.gender === "Femenino"
               ?
               <span>&nbsp; {props.student.gender}  
               &nbsp;&nbsp;&nbsp;<img src={women} width="40px" height="45px"/> </span>
              : 
              <span>&nbsp;{props.student.gender} 
              &nbsp;&nbsp;&nbsp;&nbsp;<img src={men} width="40px" height="45px"/> </span> 
         }  
         

        
        </div>
    );
    
}

export default Students;