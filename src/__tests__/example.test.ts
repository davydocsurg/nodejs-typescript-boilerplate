import { Logging } from "../helpers";
import { createMockResource, fetchMockResources } from "./shared";

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

    it("returns a list of resources", async () => {
        const response = await fetchMockResources();
        Logging.info(response.body);
        // expect(response.status).toBe(200);
        // expect(response.body).toEqual(expect.any(Array));
    });
});
