import { createMockResource } from "./shared";

describe("createExampleResource", () => {
    it("returns a mock resource with the correct properties", () => {
        const mockResource = createMockResource("Test Resource");
        expect(mockResource).toEqual({
            _id: expect.any(String),
            title: "Test Resource",
            description: "This is an example of a mock resource",
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
        });
    });
});
