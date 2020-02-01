const requestsCollection = require('../models/requests-model');
const { GetRequestsParameters, PostRequestsParameters } = require('../parameters');
const requestsEnum = require('../enums/requests');

const getRequests = (req, res) => {

  const parameters = new GetRequestsParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400)
      .json({
        status: false,
        message: errors
      });
  }

  const filters = parameters.getFilter();

  requestsCollection.find(filters)
    .then(Requests => res.status(200).json({ status: true, message: 'Success!', data: Requests }))
    .catch(e => res.status(500).json({ status: false, message: e }))
};

const createRequests = (req, res) => {
  
  const parameters = new PostRequestsParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400)
      .json({
        status: false,
        message: errors
      });
  }

  requestsCollection.create(parameters.request)
    .then(() => res.status(200).json({ status: true, message: 'Success!' }))
    .catch(e => res.status(500).json({ status: false, message: 'An error was occurred.' }))
};

const getStatusTypes = (req, res) => {
  return res.status(200).json({ requestsEnum });
};

module.exports = { getStatusTypes, createRequests, getRequests }; 