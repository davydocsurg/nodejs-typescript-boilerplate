import { NextFunction, Request, Response } from "express";
import { ExampleService } from "../services";

class ExampleController {
    constructor() {
        this.createExample = this.createExample.bind(this);
    }

    async createExample(req: Request, res: Response, next: NextFunction) {
        try {
            const example = await ExampleService.createExample(req);

            return res.status(200).json({
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

    async fetchExamples(req: Request, res: Response, next: NextFunction) {
        try {
            const examples = await ExampleService.fetchExamples();

            return res.status(200).json({
                success: true,
                data: {
                    examples,
                },
            });
        } catch (error: any) {
            return res.json({
                success: false,
                errors: {
                    error,
                },
            });
        }
    }
}

export default new ExampleController();
