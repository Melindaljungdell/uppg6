import React, { useState, useRef } from 'react'
import Movie from './Movie';

export default function AddMovieForm (){

    const [movies, setMovies]= useState([ 
    
    ]);

    const inputRef = useRef();
    const grade = useRef();

    function addMovie(){
        if (inputRef.current.value === "") {
            alert("Du måste lägga till en titel")
        }
        else if (grade.current.value === "0") {
            alert("Du måste lägga till ett betyg")
        }
        else {
            
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

            setMovies([...movies, {
                id : newId,
                title: inputRef.current.value,
                grade: grade.current.value
            } ]);

            inputRef.current.value="";
            grade.current.value= "0";


        }
    };

    return (
    <div>
        <h3> Lägg till en film </h3>
        <hr></hr>
        <input className="form-control mb-3" placeholder="Titel här..." ref={inputRef} ></input>
        <select className="form-control mb-3" ref={grade}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

        </select>
        <button type= "button" class="btn btn-success mb-5" onClick={addMovie}>Spara film</button>
        

        <ul className= "list-group">
            {movies.map((item) => (< Movie key={item.id} item={item} /> ))}
        </ul>
    
    </div>)
};
