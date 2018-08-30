
module.exports = zodiac => {
    const fetch = require('node-fetch');
    const URL = `https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`;
    fetch(URL, {
        method: 'POST'
    })
        .then(response => response.json())
        .then(json => {
            console.log(json.description.toString());
            return json.description;
        });
}
