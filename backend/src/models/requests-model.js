/**
 * @swagger
 *  components:
 *    schemas:
 *      Requests:
 *        type: object
 *        required:
 *          - consumerId
 *        properties:
 *          consumerId:
 *            type: string
 *          requestType:
 *            type: string
 *          requestDate:
 *            type: string
 *          requestStatus:
 *            type: string
 *      
 *          
 *        example:
 *           consumerId: 1
 *           requestType: FAIL_ON_ACCESS_ACCOUNT
 *           requestDate: 2019-11-14T10:25:00
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
  consumerId: { type: String, required: true },
  requestType: { type: String, required: false },
  requestDate: { type: Date, required: false },
  requestStatus: {type: String, required: false }
})

module.exports = mongoose.model('requests', requests);