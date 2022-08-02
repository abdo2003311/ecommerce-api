import { Request } from 'express';

interface request extends Request {
    user : any;
}

export default request;