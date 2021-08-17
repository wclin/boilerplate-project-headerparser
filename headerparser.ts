import {Request, Response} from "express";

export interface HeaderParser {
    parse(req: Request, res: Response): void;
}

class DefaultParser implements HeaderParser {
    parse(req: Request, res: Response) {
      let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
      res.status(200).send({
          ipaddress: ip,
          language: req.headers["accept-language"],
          software: req.headers["user-agent"],
        })
    }
}
export { DefaultParser };
export { DefaultParser as mainParser };
