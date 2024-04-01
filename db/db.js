const mongoose = require('mongoose');

const URL='mongodb://127.0.0.1:27017/taskmanage';
const options={
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(URL, options).then(()=>{
    console.log("Conntected to the Database");
}).catch((error)=>{
    console.error("Error connecting to the Database", error);
});