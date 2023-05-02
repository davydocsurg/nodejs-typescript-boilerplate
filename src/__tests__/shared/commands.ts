import { MockResource, exampleResource } from "../__mocks__";
// import chai from "chai";
// import chaiHttp from "chai-http";
import request from "supertest";
import app from "../../app";
import { CLog } from "../../helpers";
import { API_ROUTE, mongoDBConnection } from "../../config";

// chai.use(chaiHttp);

// const chaiServer = chai.request(app).keepOpen();
const server = request(app);

// export const closeServer = (): ChaiHttp.Agent => chaiServer.close();

const createMockResource = (title: string): MockResource => {
    return {
        ...exampleResource,
        title,
    };
};

const fetchMockResources = async () => {
    const res = await server.get(`${API_ROUTE}/examples/fetch`);
    return res;
};

export { createMockResource, fetchMockResources };
