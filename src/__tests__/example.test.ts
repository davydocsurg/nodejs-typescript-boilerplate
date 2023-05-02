import { mongoDBConnection, mongoDBDisconnection } from "../config";
import { CLog } from "../helpers";
import { createMockResource, fetchMockResources } from "./shared";

describe("/examples", () => {
    beforeAll(() => {
        CLog.info("Running beforeAll hook");
        mongoDBConnection();
    });

    afterAll(() => {
        CLog.info("Running afterAll hook");
        mongoDBDisconnection();
    });

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

    describe("GET /fetch", () => {
        it("returns a list of resources", async () => {
            const response = await fetchMockResources();
            CLog.info(response.body);
            expect(response.status).toBe(200);
            expect(response.body.data.examples).toEqual(expect.any(Array));
        });
    });

    describe("POST /create", () => {
        it("creates a resource", async () => {
            const response = await fetchMockResources();
            const initialLength = response.body.data.examples.length;
            const newResource = await createMockResource("Test Resource");
            const res = await fetchMockResources();
            const newLength = res.body.data.examples.length;
            expect(newLength).toBe(initialLength + 1);
        });
    });
});
