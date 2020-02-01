const requestEnum = require('../../enums/requests');

class GetRequestsParameters {
    constructor(req) {
      this.filters = {
        _id: req.params.id,
        email: req.query.email,
        title: req.query.title,
        requestStatus: req.query.requestStatus
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
  
      if (this.filters._id) {
        filter._id = this.filters._id;
      }

      if (this.filters.email) {
        filter.email = this.filters.email;
      }
  
      if (this.filters.title) {
        filter.title = this.filters.title;
      }
  
      if (this.filters.requestStatus) {
        filter.requestStatus = this.filters.requestStatus;
      }
  
      return filter;
    }
  }
  
  module.exports = GetRequestsParameters;