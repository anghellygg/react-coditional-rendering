import React from 'react';
import './search-bar.styles.css';

const SearchBar = () => {
    return (
        
        <div className="search-bar-container">
            <div className="Searchbar-input">
                Puedes utilizar algun filtro<br/><br/>
                <input type="text" placeholder="Buscar estudiante"/> </div>
            <div>
            <input type ="radio" name='choice'/> Estudiantes de Circuitos <br/>
            <input type ="radio" name='choice'/> Estudiantes de Programacion II <br/>
            <input type ="radio" name='choice'/> Otro
            </div>
            
        </div>
    );
    
}

export default SearchBar;