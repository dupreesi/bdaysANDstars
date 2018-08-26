const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('app is listening on port %d', app.get('port'));
});