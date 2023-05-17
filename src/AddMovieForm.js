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

    function deleteMovie(id){
        setMovies(movies.filter((item) => item.id !== id));
    }

    function sortByTitle() {
        const sortedByTitle = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedByTitle);
    }

    function sortByGrade() {
        const sortedByGrade = [...movies].sort((a, b) => b.grade - a.grade);
        setMovies(sortedByGrade);
      }

    return (
    <div>
        <h3> Lägg till en film </h3>
        <hr></hr>
        <input className="form-control mb-3" placeholder="Titel här..." ref={inputRef} ></input>
        <select className="form-control mb-1" ref={grade}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        <button type= "button" class="btn btn-success mr-2" onClick={addMovie}>Spara film</button>
       
        <h2> Inlagda filmer</h2>
        <hr></hr>

        <ul className= "list-group">
            {movies.map((item) => (< Movie key={item.id} item={item} deleteMovie={deleteMovie}/> ))}
        </ul>

        <button type= "button" class="btn btn-outline-success me-2 mt-2 mb-4" onClick={sortByTitle}>Sortera efter titel</button>
        <button type= "button" class="btn btn-outline-success mt-2 mb-4" onClick={sortByGrade}>Sortera efter betyg</button>
    </div>)
};
