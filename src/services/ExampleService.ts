import { Request } from "express";
import { Example } from "../models";

class ExampleService {
    constructor() {
        this.createExample = this.createExample.bind(this);
    }

    async createExample(req: Request) {
        const example = await Example.create({
            title: req.body.title,
            description: req.body.description,
        });

        return example;
    }
}

export default new ExampleService();
