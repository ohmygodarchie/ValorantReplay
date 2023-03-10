import React from "react";
import MatchList from "../components/MatchList";
import MatchReview from "../components/MatchReview";
// left column has a list of matches with a search bar
// right side has a list of maps

//add refresh functionality to the match list
//something like a button that when pressed re-calls the api, updates the matchList array and redisplays
//would need to change return to a variable and then call the variable in the return
function Main() {
    const [match_selected, setmatch_selected] = React.useState(-1);
    const [isMatchSelected, setisMatchSelected] = React.useState(false);
    //handling the current selected match this way might add unnecessary api calls bc it might re render this main page
    let handleCurrentMatch = (matchId) => {
        console.log("Current match: " + matchId);
        setisMatchSelected(true); 
        setmatch_selected(matchId);
    }
    return (
        <div className="main">
            <h1>MAIN</h1>
            <MatchList matchList={[{"map":"haven", //this array will be result of api call
                                    "date":"today",
                                    "result":"loss", 
                                    "score":"1-13",
                                    "matchId":1234},
                                    {"map":"split",
                                    "date":"yesterday",
                                    "result":"loss", 
                                    "score":"9-13",
                                    "matchId":14},
                                ]}
                        currentMatch={handleCurrentMatch} />
            {isMatchSelected && <MatchReview matchId={match_selected} />}
        </div>
        
    );
}

export default Main;