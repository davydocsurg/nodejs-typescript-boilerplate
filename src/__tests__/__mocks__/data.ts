type MockResource = {
    _id: string;
    title: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
};

const exampleResource: MockResource = {
    _id: "5f8f8b8a4f8d4b1b1c9f8b8a",
    title: "Example Resource",
    description: "This is an example of a mock resource",
    createdAt: new Date(),
    updatedAt: new Date(),
};

export { exampleResource, MockResource };
