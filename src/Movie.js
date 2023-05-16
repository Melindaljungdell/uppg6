import React from "react"

export default function Movie(props) { 

    return (
        <div>
            <h2> Inlagda filmer</h2>
            <hr></hr>
            <li className="list-group-item">
            {props.item.title}
            </li>
         </div>
        );
};