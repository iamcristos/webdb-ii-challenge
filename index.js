const app = require('./server');
const carRoute = require('./route/car');


const PORT = process.env.PORT || 5000;

app.use('/api/car-dealers', carRoute);
app.listen(PORT, ()=>{
    console.log(`app is listening at ${PORT}`)
});