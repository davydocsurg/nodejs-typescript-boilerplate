import { MockResource, exampleResource } from "../__mocks__";
import chai from "chai";
import chaiHttp from "chai-http";
import request from "supertest";
import app from "../../app";
import { Logging } from "../../helpers";
import { API_ROUTE } from "../../config";

chai.use(chaiHttp);

const chaiServer = chai.request(app).keepOpen();
const testReq = request.agent(app);

export const closeServer = (): ChaiHttp.Agent => chaiServer.close();

const createMockResource = (title: string): MockResource => {
    return {
        ...exampleResource,
        title,
    };
};

const fetchMockResources = async () => {
    const res = await request(app).get(`${API_ROUTE}/examples/fetch`);
    Logging.info(res);
    return res;
};

export { createMockResource, fetchMockResources };
