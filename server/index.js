
const http = require('http');
const app = require('./app');


const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};


const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind + '.!.');
});

server.listen(port);






















// var CONNECTION_STRING = 'mongodb+srv://admin:ruslan1987@cluster0.hvhmdzv.mongodb.net/?retryWrites=true&w=majority'



// const client = new MongoClient(CONNECTION_STRING, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

//  function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     client.connect();
//     // Send a ping to confirm a successful connection
//     client.db("admin").command({ ping: 1 });
//     // client.db
//     console.log('client.db("admin")', "Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//      client.close();
//   }
// }
