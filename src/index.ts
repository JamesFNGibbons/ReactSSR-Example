import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import fs from 'fs';
import path from 'path';

import { attachControllers } from '@decorators/express';
import { IndexController } from './controllers';

async function start() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/static", express.static(__dirname + "/static"));

  // Dynamically load router classes
  // const controllersDir = path.join(__dirname, 'controllers');
  // fs.readdirSync(controllersDir).forEach(dir => {
  //   const dirPath = path.join(controllersDir, dir);
  //   if (fs.statSync(dirPath).isDirectory()) {
  //     const indexPath = path.join(dirPath, 'index.ts');
  //     if (fs.existsSync(indexPath)) {
  //       const controllerModule = require(indexPath);
  //       if (controllerModule.default && controllerModule.default.prototype instanceof express.Router) {
  //         const routerInstance = new controllerModule.default();
  //         routerInstance.stack.forEach(layer => {
  //           console.log(`Loading ${layer.route.path} => ${dir}/${layer.route.stack[0].name}`);
  //         });
  //         app.use('/', routerInstance);
  //       }
  //     }
  //   }
  // });

  const PORT = process.env.PORT || 3000;

  try {
    // const connection = await createConnection();
    // await connection.synchronize();
    // console.log('Entities synchronized successfully');


    const apiRouter = express.Router();
    attachControllers(apiRouter, [IndexController]);
    app.use("/", apiRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

start().catch(error => {
  console.error('Error starting the server:', error);
});
