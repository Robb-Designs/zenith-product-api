//DB Connection
const mongoose = require('mongoose');

async function mongoConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connection Successful');

    } catch (error) {
        console.error('MongoDB Connection Error: ', error.message);
        process.exit(1); // exit code: Startup failed. Shut app down.
    }
}

module.exports = mongoConnect;