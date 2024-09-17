import { expect } from 'chai';
import sinon from 'sinon';
import GraphData from '../models/dataSchema.js';
import { getData } from './dataController.js';

describe('getData Controller', () => {
  let req, res, findStub;

  beforeEach(() => {
    // Create a mock request and response
    req = {};
    res = {
      json: sinon.stub().returnsThis(),
      status: sinon.stub().returnsThis(),
    };

    findStub = sinon.stub(GraphData, 'find');
  });

  afterEach(() => {
    findStub.restore();
  });

  it('should return data and respond with JSON', async () => {
    const mockData = [{ name: 'A' }, { name: 'B' }];
    findStub.resolves(mockData);
    await getData(req, res);
    expect(findStub.calledOnce).to.be.true;

    // Verify that res.json was called with the correct data
    expect(res.json.calledWith(mockData)).to.be.true;
  });

  it('should handle errors and respond with a 500 status', async () => {
    const error = new Error('Database error');
    findStub.rejects(error);
    await getData(req, res);
    expect(findStub.calledOnce).to.be.true;

    // Verify that res.status was called with 500
    expect(res.status.calledWith(500)).to.be.true;

    // Verify that res.json was called with the error message
    expect(res.json.calledWith({ message: error.message })).to.be.true; 
  });
});
