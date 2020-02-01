/**
 * @swagger
 *  components:
 *    schemas:
 *      Requests:
 *        type: object
 *        required:
 *          - email
 *        properties:
 *          email:
 *            type: string
 *          title:
 *            type: string
 *          body:
 *            type: string
 *          requestStatus:
 *            type: number
 *      
 *          
 *        example:
 *           email: user.lastname@jurupinga.com
 *           title: How can I transfer money?
 *           body: 2019-11-14T10:25:00
 *           requestStatus: 1
 * 
 *      RequestsStatusType:
 *        type: object
 *          
 *        example:
 *           data: {
                NEW_REQUEST: '1',
                IN_PROGRESS: '2',
                PENDING_ANALYSIS: '3',
                FINISHED: '4'
            }
 */

const mongoose = require('mongoose');

const requests = new mongoose.Schema({
  email: { type: String, required: true },
  title: { type: String, required: false },
  body: { type: String, required: false },
  requestStatus: {type: Number, required: false }
})

module.exports = mongoose.model('requests', requests);