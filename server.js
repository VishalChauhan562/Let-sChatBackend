const mongoose = require('mongoose');
const app = require('./app');

app.listen(5000, () => {
  console.log(`App running on port 5000...`);
});

mongoose
  .connect(
    'mongodb+srv://vishalchauhan562:Vishu562@cluster0.zqv1r.mongodb.net/narayana?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connection is Sucessfull');
  });