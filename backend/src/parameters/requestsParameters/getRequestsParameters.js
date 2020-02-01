const requestEnum = require('../../enums/requests');

class GetRequestsParameters {
    constructor(req) {
      this.filters = {
        consumerId: req.params.consumerId,
        requestType: req.params.requestType,
        requestDate: req.params.requestDate,
        requestStatus: req.params.requestStatus
      };
    }

    validate() {
      let response = [];
  
      if(this.filters.requestStatus && !requestEnum[this.filters.requestStatus]) {
        response.push('Status Invalid. Access /requests/status route to get all disponible request status.');
      }
  
      return response;
    }
  
    getFilter() {
      let filter = {};
  
      if (this.filters.consumerId) {
        filter.consumerId = this.filters.consumerId;
      }
  
      if (this.filters.requestType) {
        filter.key = this.filters.requestType;
      }
  
      if (this.filters.requestDate) {
        filter.value = this.filters.requestDate;
      }
  
      if (this.filters.requestStatus) {
        filter.value = this.filters.requestStatus;
      }
  
      return filter;
    }
  }
  
  module.exports = GetRequestsParameters;