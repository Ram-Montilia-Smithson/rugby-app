// get all fetches here 
// consider making season as a variable and not hard coded
// consider cases of errors
// add fetch ....teams, use it in competition.jsx instead of standings

const address = process.env.REACT_APP_ADDRESS
const headers = process.env.REACT_APP_HEADERS

export const match = (matchID) => {
    fetch(`${address}match/${matchID}`, {
        "method": "GET",
        "headers": headers
    })
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}

export const standings = (comp_id) => {
    fetch(`${address}standings/${comp_id}/2021`, {
        "method": "GET",
        "headers": headers
    })
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}

export const FixturesByTeam = (team_id) => {
    fetch(`${address}fixtures-by-team/${team_id}`, {
        "method": "GET",
        "headers": headers
    })
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}

export const TeamsByCompetitionSeason = (comp_id) => {
    fetch(`${address}teams/${comp_id}/2021`, {
        "method": "GET",
        "headers": headers
    })
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}

export const competitions = () => {
    fetch(`${address}competitions`, {
        "method": "GET",
        "headers": headers
    })
    .then(response => response.json())
    .then(data => {
        const results = data.results.filter(result => {result.season >= 2021})
        return (results)
    })
    .catch(err => {
        console.error(err);
    });
}

export const Fixtures = (comp_id) => {
    fetch(`${address}fixtures/${comp_id}/2021`, {
        "method": "GET",
        "headers": headers
    })
    .then(response => response.json())
        .then(data => {
            return (data)
    })
    .catch(err => {
        console.error(err);
    });
}