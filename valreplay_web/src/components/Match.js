import React from "react";

// pass in a match object
//match object has a map, a date, win/loss, a score, a duration
function Match({match, onClick}){
    return (
        <div className="match" onClick={()=>onClick(match.matchId)}>
            <h3>MATCH</h3>
            <p>Map: {match.map}</p>
            <p>Date: {match.date}</p>
            <p>Result: {match.result}</p>
            <p>Score: {match.score}</p>
        </div>
    );
}
export default Match;


