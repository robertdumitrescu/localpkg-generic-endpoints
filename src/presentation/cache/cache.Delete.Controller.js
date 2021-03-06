'use strict';

/** NPM packages */
const express = require('express');
const router = express.Router();

class CacheDeleteController {
    static async hardDelete(mcache) {

        let successResponseDomainModel = {
            status: 200,
        };

        let x = mcache.clear();

        successResponseDomainModel.x = x;

        return successResponseDomainModel;
    }
}

function argumentWrapper(app, mcache, endpointAddress) {

    return router.delete(endpointAddress, (request, response) => {

        CacheDeleteController.hardDelete(mcache)
            .then((successResponseGenericModel) => {

                response.status(successResponseGenericModel.status).send(successResponseGenericModel);

            })
            .catch((errorResponseGenericModel) => {
                console.log(errorResponseGenericModel);
                response.status(errorResponseGenericModel.status).send(errorResponseGenericModel);
            });

    });
}


module.exports = argumentWrapper;
