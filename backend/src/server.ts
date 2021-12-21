import express from 'express'

import { StripeRoutes} from './routes/Stripe.routes';
import { UserRoutes } from './routes/user.routes';

import cors from 'cors'
//Connect to MongoDB
import  './DB/ConnectDB';


const Port = process.env.PORT  || 5000;

const server = express()
server.use(
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ): void => {
      if (req.originalUrl === '/webhook') {
        next();
      } else {
        express.json()(req, res, next);
      }
    }
  );

server.use(cors())

server.use(express.json())

server.use(StripeRoutes)

server.use(UserRoutes)

server.listen(Port , ()=> console.log(`Server is running at:${Port}`))

