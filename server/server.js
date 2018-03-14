const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const schema = require('./schema');
const mongoose = require('mongoose');
const { graphqlExpress } = require('apollo-server-express');

const app = express()
const port = process.env.PORT;

const db = process.env.MONGODB_URL;
mongoose.Promise = global.Promise;
mongoose.connect(db, {});

// server static react bundle
// this is will add the client in deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Production ready graphql server
app.use( '/graphql', bodyParser.json(), graphqlExpress({schema}) )

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});