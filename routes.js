const express = require('express')
const router = express.Router()
const userController = require('./src/controllers/userController')
const shareController = require('./src/controllers/shareController')
const transactionController = require('./src/controllers/transactionController')

router.post('/user/create',
    userController.createUser.bind(userController)
);

router.get('/share/:name',
    shareController.getShareByName.bind(shareController)
);

router.post('/share/create',
    shareController.createShare.bind(shareController)
);

router.post('/share/bulkCreate',
    shareController.bulkCreateShare.bind(shareController)
);

router.put('/share/update',
    shareController.updateShareAmount.bind(shareController)
);

router.post('/transactions/execute',
    transactionController.execute.bind(transactionController)
);

module.exports = router