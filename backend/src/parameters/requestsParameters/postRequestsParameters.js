const requestEnum = require('../../enums/requests');

class PostRequestParameters {
    constructor(req) {
      this.request = {
        email: req.body.email,
        title: req.body.title,
        requestStatus: req.body.requestStatus,
        body: req.body.body
      };
    }
  
    validate() {
      let errors = [];
      
      if (!this.request.email) {
        errors.push('email Invalid');
      }

      if(!this.request.requestStatus || (this.request.requestStatus && !requestEnum[this.request.requestStatus])) {
        errors.push('Status Invalid. Access /requests/status/types route to get all disponible request status.');
      }
  
      if (!this.request.title) {
        errors.push('title is invalid');
      }

      if (!this.request.body) {
        errors.push('body is invalid');
      }
  
      return errors;
    }
  }
  
  module.exports = PostRequestParameters;