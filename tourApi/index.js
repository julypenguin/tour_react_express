const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const session = require('express-session');

const app = express();
const port = 3006;

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: ['http://tour.julypenguin.tw/', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.options('*', cors());

app.use(express.static(path.join(__dirname, 'build')));

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

app.listen(port, () => {
  console.log('Example app listening on port 5001!');
});
