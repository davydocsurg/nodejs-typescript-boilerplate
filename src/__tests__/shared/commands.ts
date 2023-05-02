import { MockResource, exampleResource } from "../__mocks__";
// import chai from "chai";
// import chaiHttp from "chai-http";
import request from "supertest";
import app from "../../app";
import { CLog } from "../../helpers";
import { API_ROUTE } from "../../config";

// chai.use(chaiHttp);

// const chaiServer = chai.request(app).keepOpen();
const server = request(app);

// export const closeServer = (): ChaiHttp.Agent => chaiServer.close();

const createMockResource = async (title: string, description: string) => {
    const res = await server
        .post(`${API_ROUTE}/examples/create`)
        .send({ title, description });
    return res;
    // return {
    //     ...exampleResource,
    //     title,
    // };
};

const fetchMockResources = async () => {
    const res = await server.get(`${API_ROUTE}/examples/fetch`);
    return res;
};

export { createMockResource, fetchMockResources };
