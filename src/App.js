import React from "react";
import "./App.css";
import Card from "./Card.js";
import vacationSpots from "./vacationSpots";

function App() {
    const vacaySpots = vacationSpots.map((spot) => (
        <Card
            key={spot.id}
            place={spot.place}
            price={spot.price}
            time={spot.timeToGo}
        />
    ));
    return <div className="App">{vacaySpots}</div>;
}

export default App;
