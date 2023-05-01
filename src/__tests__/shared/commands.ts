import { MockResource, exampleResource } from "../__mocks__";
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
import { Logging } from "../../helpers";

chai.use(chaiHttp);

const chaiServer = chai.request(app).keepOpen();

export const closeServer = (): ChaiHttp.Agent => chaiServer.close();

const createMockResource = (title: string): MockResource => {
    return {
        ...exampleResource,
        title,
    };
};

const fetchMockResources = async () => {
    const res = await chaiServer.get("/examples/fetch");
    Logging.info(res.body);
    return res;
};

export { createMockResource, fetchMockResources };
