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
 *      summary: Get all technicals requests
 *      tags: [Requests]
 *      responses:
 *        "200":
 *          description: Get all technicals requests
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
 *      summary: Get technicals requests by customer
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
 *          description: Get technicals requests by customer
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Requests'
 */
router.get('/:consumerId', requests.getRequests);

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

module.exports = router;