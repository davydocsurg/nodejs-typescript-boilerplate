import { createMockResource } from "./shared";

describe("createExampleResource", () => {
    it("returns a mock resource with the correct properties", () => {
        const mockResource = createMockResource("Test Resource");
        expect(mockResource).toEqual({
            name: "Test Resource",
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
            id: expect.any(String),
        });
    });
});
