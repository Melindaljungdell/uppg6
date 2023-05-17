import React from "react"

export default function Movie(props) { 
    
    const imageStyle = {
        width: '25px',
        height: 'auto',
      };
    
    function setStars (grade) {
        const stars = [];
        for (let i = 0; i < grade; i++) {
            stars.push(<img src = "images/star.png" alt="star" style= {imageStyle} className="float-end"/>)
        }
        return stars; 
    }


    return (
        <div>
            <li className="list-group-item text-right">
            {props.item.title}
            <img src = "images/delete.png" alt= "delete" style= {imageStyle} className= "float-end" onClick={() => { props.deleteMovie(props.item.id) }}/>
            {setStars(props.item.grade)}
            </li>
         </div>
        );
};