import express from "express"
import clientRouter from "./src/routes/client.router.js"
import lendingRouter from "./src/routes/lending.router.js"
import "dotenv/config";
import "./src/database/mongoConnect.js";

const App = express();


App.use(express.json())

App.get('/', function (req, res) {
  res.send('Bienvenido a su aplicación de prestamos.');
});


//useRoutes
App.use('/api/V1/client', clientRouter);
App.use('/api/V1/lending' , lendingRouter);

App.set('puerto', process.env.PORT || 3000);

App.listen(App.get('puerto'), function () {
  console.log('Aplicación ejecutada');
});