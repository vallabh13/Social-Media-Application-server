const mongoose = require('mongoose');

module.exports = async() => {
    const mongoUri = 'mongodb+srv://vallabh13:zijhI3H4nVgE8F5Q@cluster0.os9ytj1.mongodb.net/?retryWrites=true&w=majority'

    try{
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology : true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
    
}