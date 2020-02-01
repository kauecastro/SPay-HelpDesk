const express = require('express');
const router = express.Router();
const requests = require('../controllers/requests-controller');

/**
 * @swagger
 * path:
 *  /requests/:
 *    post:
 *      summary: Create new technicals requests
 *      tags: [Requests]
 *      requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Requests'
              }
            }
          },
          required: true
        }
 *      responses:
 *        "200":
 *          description: Create new technicals requests
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 * 
 */
router.post('/', requests.createRequests);

/**
 * @swagger
 * path:
 *  /requests/:
 *    get:
 *      summary: Get all technicals requests and apply filter if needed
 *      tags: [Requests]
 *      responses:
 *        "200":
 *          description: Get all technicals requests and apply filter if needed
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Requests'
 */
router.get('/', requests.getRequests);

/**
 * @swagger
 * path:
 *  /requests/{consumerId}:
 *    get:
 *      summary: Get technicals requests by id
 *      tags: [Requests]
 *      parameters: [
 *          {
                name: 'consumerId',
                in: 'path',
                schema: {
                    type: 'string',
                },
                required: false
            },
 *      ]
 *      responses:
 *        "200":
 *          description: Get technicals requests by id
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Requests'
 */
router.get('/:id', requests.getRequests);

/**
 * @swagger
 * path:
 *  /requests/status/types:
 *    get:
 *      summary: Get all requests status types
 *      tags: [Requests]
 *      responses:
 *        "200":
 *          description: An list of requests status
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/RequestsStatusType'
 */
router.get('/status/types', requests.getStatusTypes);

/**
 * @swagger
 * path:
 *  /requests/{consumerId}:
 *    delete:
 *      summary: Delete an technical request by Id.
 *      tags: [Requests]
 *      parameters: [
 *          {
                name: 'requestId',
                in: 'path',
                schema: {
                    type: 'string',
                },
                required: false
            },
 *      ]
 *      responses:
 *        "200":
 *          description: Delete an technical request by Id.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Requests'
 */
router.delete('/:id', requests.deleteOne); 

/**
 * @swagger
 * path:
 *  /requests/{consumerId}:
 *    put:
 *      summary: Update an technical request by Id.
 *      tags: [Requests]
 *      parameters: [
 *          {
                name: 'requestId',
                in: 'path',
                schema: {
                    type: 'string',
                },
                required: false
            },
 *      ]
 *      responses:
 *        "200":
 *          description: Update an technical request by Id.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Requests'
 */
router.put('/:id', requests.updateOne); 

module.exports = router;