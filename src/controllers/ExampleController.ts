import { NextFunction, Request, Response } from "express";
import { Logging } from "../helpers";
import { Example } from "../models";
import { ExampleService } from "../services";

class ExampleController {
    constructor() {
        this.createExample = this.createExample.bind(this);
    }

    async createExample(req: Request, res: Response, next: NextFunction) {
        try {
            const example = await ExampleService.createExample(req);

            res.status(200).json({
                success: true,
                results: 1,
                data: {
                    example,
                },
            });
        } catch (err) {
            Logging.error(err);
        }
    }
}

export default new ExampleController();
