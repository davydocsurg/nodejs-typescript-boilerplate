import { Logging } from "../helpers";
import { createMockResource, fetchMockResources } from "./shared";

describe("/examples", () => {
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
            Logging.info(response.body);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(expect.any(Array));
        });
    });

    // describe("Create", () => {
    //     it("should create an example", async () => {
    //         const mockResource = createMockResource("Example 1");
    //         const res = await chaiServer
    //             .post("/example")
    //             .send(mockResource);

    //         expect(res.status).to.equal(201);
    //         expect(res.body).to.have.property("data");
    //         expect(res.body.data).to.have.property("title");
    //         expect(res.body.data.title).to.equal(mockResource.title);
    //     });
    // });

    // describe("Fetch", () => {
    //     it("should fetch examples", async () => {
    //         const res = await fetchMockResources();

    //         expect(res.status).to.equal(200);
    //         expect(res.body).to.have.property("data");
    //         expect(res.body.data).to.be.an("array");
    //     });
    // });
});
