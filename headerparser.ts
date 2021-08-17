import {Request, Response} from "express";

export interface HeaderParser {
    parse(req: Request, res: Response): void;
}

class DefaultParser implements HeaderParser {
    parse(req: Request, res: Response) {
      console.log("Hello default parser!")
      res.status(200).send({greeting: 'hello WHO AM I'})
    }
}
export { DefaultParser };
export { DefaultParser as mainParser };
