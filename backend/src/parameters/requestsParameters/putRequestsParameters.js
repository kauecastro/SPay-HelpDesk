const requestEnum = require('../../enums/requests');

class PutRequestParameters {
    constructor(req) {
      this.parameters = {
        _id: req.params.id,
        email: req.body.email,
        title: req.body.title,
        body: req.body.body,
        requestStatus: req.body.requestStatus
      };
    }
  
    validate() {
      let errors = [];
  
      if(!this.parameters._id) {
        response.push('Invalid Id. You must identify the item that you want to delete with the Id.');
      }

      if(this.parameters.requestStatus && !requestEnum[this.parameters.requestStatus]) {
        errors.push('Status Invalid. Access /requests/status/types route to get all disponible request status.');
      }
  
      return errors;
    }

    getFilter() {
      let filter = {};

      if (this.parameters.email) {
        filter.email = this.parameters.email;
      }
  
      if (this.parameters.title) {
        filter.title = this.parameters.title;
      }

      if (this.parameters.body) {
        filter.body = this.parameters.body;
      }
  
      if (this.parameters.requestStatus) {
        filter.requestStatus = this.parameters.requestStatus;
      }
  
      return filter;
    }

    getId() {
      return this.parameters._id;
    }
  }
  
  module.exports = PutRequestParameters;
