const express = require('express');

// const server = require('http').Server(app);
// const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
// const flash = require('connect-flash');

const app = express();
const port = 3006;

// app.use(cors());


const userController = require('./controllers/user');
const postController = require('./controllers/post');
const googleMapController = require('./controllers/map');

app.set('view engine', 'ejs');
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
}));

// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.use(cors({
  origin: ['http://tour.julypenguin.tw/', 'http://localhost:3000'],
  // origin: ['http://tour.julypenguin.tw:80'],
  // origin: ['http://localhost:3000'],
  // origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // enable set cookie
}));
app.options('*', cors()); // pre-flight
// app.use(flash());


// app.use((req, res, next) => {
//   res.locals.userId = req.session.userId;
//   res.locals.nickname = req.session.nickname;
//   res.locals.errorMessage = req.flash('errorMessage');
//   next();
// });

// function redirectBack(req, res) {
//   res.redirect('back');
// }
app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


// app.get('/api', postController.indexx);
app.get('/apiuserInfo', userController.apiCheckuser);
app.get('/apiposts', postController.index);
app.get('/apiposts/:id', postController.post);
app.post('/apiposts', postController.add);
app.put('/apiposts/:id', postController.handleUpdate);
app.delete('/apiposts/:id', postController.handleDelete);

app.get('/apimaps/:id', googleMapController.getMap);
app.post('/apimaps/:id', googleMapController.createMap);
app.post('/apiregister', userController.handleRegister);
app.post('/apilogin', userController.handleLogin);
app.get('/apilogout', userController.handleLogout);

app.get('/apicategory', postController.getCategory);
app.post('/apicategory', postController.setCategory);

// app.get('/chatroom', (req, res) => {
//   res.sendFile(`${__dirname}/index.html`);
// });

// io.on('connection', (socket) => {
//   console.log('success connect!');
//   // socket.emit('news', { hello: 'world' });
//   socket.on('getMessage', (message) => {
//     console.log('testMessage!', message);
//     socket.emit('getMessage', message);
//   });
// });

app.listen(port, () => {
  console.log('Example app listening on port 5001!');
});

// app.options('*', cors()); // pre-flight
