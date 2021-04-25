import React from 'react';
import './information-table.style.css';
import CoursePage from '../courses/courses.comp';
import Categories from '../categories/categories.comp';
import Students from '../students/students.comp';
import SearchBar from '../search-bar/search-bar.comp';
const InformationPage = () => {
    return (
        
        <div className="information-table-container">
            NOTAS DE ESTUDIANTES
           <SearchBar/>

            <CoursePage coursename="Microcontroladores"/>
            <Categories/>
            <Students student= {{
                name: "Jose Montes",
                grade: 3.2,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Fer Cortez",
                grade: 1.9,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Angie Giraldo",
                grade: 1.7,
                gender: "Femenino"
            }}/>
            <Students student= {{
                name: "Mario Lopez",
                grade: 5.0,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Camila Marin",
                grade: 3.7,
                gender: "Femenino"
            }}/>

            <CoursePage coursename="Matematicas Especiales"/>
            <Categories/>
            <Students student= {{
                name: " Juan Cardona",
                grade: 4.8,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Maria Cabezas",
                grade: 2.2,
                gender: "Femenino"
            }}/>
             <Students student= {{
                name: "Gabo Sanchez",
                grade: 3.9,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Paula Garcia",
                grade: 3.6,
                gender: "Femenino"
            }}/>
            
            <CoursePage coursename="Circuitos"/>
            <Categories/>
            <Students student= {{
                name: "Mariana Lopez",
                grade: 4.3,
                gender: "Femenino"
            }}/>
             <Students student= {{
                name: "Jose Martinez",
                grade: 2.3,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Juan M. Castro",
                grade: 4.7,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Jorge Marin",
                grade: 3.7,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Juan Montoya",
                grade: 1.7,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Angie Giraldo",
                grade: 3.7,
                gender: "Femenimo"
            }}/>
            <Students student= {{
                name: "Jose Buitrago",
                grade: 2.8,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Sebas. Grisales",
                grade: 4.8,
                gender: "Masculino"
            }}/>
            <CoursePage coursename="Programacion II"/>
            <Categories/>
            <Students student= {{
                name: "Luisa Castro",
                grade: 2.5,
                gender: "Femenino"
            }}/>
            <Students student= {{
                name: "Jairo Gonzales",
                grade: 3.5,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Esteban Rios",
                grade: 4.9,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Maria Montes",
                grade: 4.2,
                gender: "Femenino"
            }}/>
             <Students student= {{
                name: "Alejo Osorio",
                grade: 2.2,
                gender: "Masculino"
            }}/>

            <CoursePage coursename="Arquitectura de software"/>
            <Categories/>
            <Students student= {{
                name: "Enrrique Perez",
                grade: 4.3,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Pedro Toro",
                grade: 3.5,
                gender: "Masculino"
            }}/>
            <Students student= {{
                name: "Angie Giraldo",
                grade: 4.2,
                gender: "Masculino"
            }}/>
             <Students student= {{
                name: "Aleja Cuesta",
                grade: 4.1,
                gender: "Femenino"
            }}/>
             <Students student= {{
                name: "Juan Garcia",
                grade: 2.3,
                gender: "Masculino"
            }}/>
        </div>
    );
    
}

export default InformationPage;