import { MockResource, exampleResource } from "../__mocks__";

const createMockResource = (title: string): MockResource => {
    return {
        ...exampleResource,
        title,
    };
};

export { createMockResource };
