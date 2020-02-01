const requestEnum = require('../../enums/requests');

class PostRequestParameters {
    constructor(req) {
      this.validateStatus = req.body.requestStatus;
      this.request = {
        consumerId: req.body.consumerId,
        requestType: req.body.requestType,
        requestDate: new Date().toISOString(),
        requestStatus: requestEnum[req.body.requestStatus]
      };
    }
  
    validate() {
      let response = [];
  
      if (!this.request.consumerId) {
        response.push('consumerId Invalid');
      }

      if(!this.request.requestStatus && !requestEnum[this.validateStatus]) {
        response.push('Status Invalid. Access /requests/status/types route to get all disponible request status.');
      }
  
      if (!this.request.requestType) {
        response.push('Request Type is invalid');
      }
  
      return response;
    }
  }
  
  module.exports = PostRequestParameters;