type MockResource = {
    title: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
};

const exampleResource: MockResource = {
    title: "Example Resource",
    description: "This is an example of a mock resource",
    createdAt: new Date(),
    updatedAt: new Date(),
};

export { exampleResource, MockResource };
