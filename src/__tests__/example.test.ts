import { mongoDBConnection, mongoDBDisconnection } from "../config";
import { CLog } from "../helpers";
import { Example } from "../models";
import { createMockResource, fetchMockResources } from "./shared";

describe("/examples", () => {
    beforeAll(() => {
        CLog.info("Running beforeAll hook");
        mongoDBConnection();
    });

    afterAll(async () => {
        CLog.info("Running afterAll hook");
        await Example.deleteMany({});
        mongoDBDisconnection();
    });

    describe("createExampleResource", () => {
        it("returns a mock resource with the correct properties", async () => {
            const mockResource = await createMockResource(
                "Test Resource",
                "Test Description"
            );

            expect(mockResource.status).toBe(201);
            expect(mockResource.body.success).toBeTruthy();
            expect(mockResource.body.data.example).toEqual({
                _id: expect.any(String),
                title: expect.any(String),
                description: expect.any(String),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __v: expect.any(Number),
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
});
