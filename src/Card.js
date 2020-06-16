import React from "react";

function Card(props) {
    console.log(props);

    function setDollar(props) {
        let dollar = "";

        if (props > 1000) {
            dollar = "$$$";
        } else if (props < 500) {
            dollar = "$";
        } else {
            dollar = "$$";
        }

        return dollar;
    }

    function setColor(props) {
        let color = "";

        if (props === "Spring") {
            color = "green";
        } else if (props === "Winter") {
            color = "blue";
        } else if (props === "Fall") {
            color = "orange";
        } else {
            color = "yellow";
        }

        return color;
    }
    return (
        <div style={{ backgroundColor: setColor(props.time) }} className="card">
            <h1>Place: {props.place}</h1>
            <p>
                Cost: {setDollar(props.price)}
                {props.price}
            </p>
            <p>When: {props.time}</p>
        </div>
    );
}

export default Card;
