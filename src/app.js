const express = require('express');
const cors = require('cors');

require('./db/mongoose');

const taskRouter = require('./routers/task');
const userRouter = require('./routers/user');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;