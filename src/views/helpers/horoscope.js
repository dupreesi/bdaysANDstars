module.exports = zodiac => {

    const URL = `https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`;

    fetch(URL, {
        method: 'POST'
    })
        .then(response => response.json())
        .then(json => {
            console.log(json.description);
            return json.description
        });

}


