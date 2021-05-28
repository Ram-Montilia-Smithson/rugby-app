// consider cases of errors
// find a better name to the variables
// team.jsx needs checking about its functions imported from here

const address = process.env.REACT_APP_ADDRESS
const headers = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        "x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
    }
}

export const match = (matchID) => {
    fetch(`${address}match/${matchID}`, headers)
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}

export const standings = (comp_id, comp_season) => {
    fetch(`${address}standings/${comp_id}/${comp_season}`, headers)
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}

export const FixturesByTeam = (team_id) => {
    fetch(`${address}fixtures-by-team/${team_id}`, headers)
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}

export const TeamsByCompetitionSeason = (comp_id, comp_season) => {
    fetch(`${address}teams/${comp_id}/${comp_season}`, headers)
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}

export const competitions = () => {
    fetch(`${address}competitions`, headers)
    .then(response => response.json())
        .then(data => {
            const results = data.results.filter(result => result.season >= new Date().getFullYear())
        return (results)
    })
    .catch(err => {
        console.error(err);
    });
}

export const Fixtures = (comp_id, comp_season) => {
    fetch(`${address}fixtures/${comp_id}/${comp_season}`, headers)
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}