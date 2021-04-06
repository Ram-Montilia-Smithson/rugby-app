import React from 'react'

//  after reciving the competition's id that was sent from competitions.jsx
//  call fetch("https://rugby-live-data.p.rapidapi.com/standings/the id/2021", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "ef122e1472msh9e1a6187db0abafp1ca12ejsnab19288e6f05",
// 		"x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then(data => {
// console.log(data)
// })
// .catch(err => {
// 	console.error(err);
// });
// to show the info in a table
// show this table on the left side, make it almost the whole page's height
// also call fetch("https://rugby-live-data.p.rapidapi.com/fixtures/the id/2021", {
// "method": "GET",
// "headers": {
// "x-rapidapi-key": "ef122e1472msh9e1a6187db0abafp1ca12ejsnab19288e6f05",
// "x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
// }
// })
// .then(response => response.json())
// .then(data => {
// console.log(data)
// })
// .catch(err => {
// 	console.error(err);
// });
// show this info in horizontal lines next to the table on the right
// make 1 line as an example
// relevant info for each fixture:
// "away":"Glasgow Warriors" right side
// "away_score":14 next to name
// "date":"2019-09-27T17:05:00+00:00" show in line above
// "game_week":1 arange fixtures based on that and "date"
// "id":3780106 to use when fixture is pressed - send info to match.jsx component that would open as a drop down from the fixture downwards
// "home":"Cheetahs" left side
// "home_score":48 next to name
// "venue":"Toyota Stadium" show in line above
// the top line in light blue like in the navbar and the body line in while/greyish white
// download all teams's logos and show acordingly in table and fixtures
// show the competition's logo in middle top part of page quite big under the navbar
// consider changing colours of background etc, based on the competition's logo colours.

export default function Competition() {
    return (
        <div>
            
        </div>
    )
}
