import { Request } from "express";
import { Example } from "../models";

class ExampleService {
    constructor() {
        this.createExample = this.createExample.bind(this);
        this.fetchExamples = this.fetchExamples.bind(this);
    }

    async createExample(req: Request) {
        const example = await Example.create({
            title: req.body.title,
            description: req.body.description,
        });

        return example;
    }

    async fetchExamples() {
        const examples = await Example.find();
        return examples;
    }
}

export default new ExampleService();
