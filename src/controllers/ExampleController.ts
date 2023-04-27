import { NextFunction, Request, Response } from "express";
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
                data: {
                    example,
                },
            });
        } catch (err) {
            return res.json({
                success: false,
                errors: {
                    err,
                },
            });
        }
    }
}

export default new ExampleController();
