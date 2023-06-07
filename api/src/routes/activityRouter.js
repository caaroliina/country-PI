const { Router } = require('express');
const { getActivities, postActivities } = require('../handlers/activitiesHandler')
const { validate } = require('../middlewares/validate')

const activityRouter = Router();


activityRouter.get('/', getActivities)

activityRouter.post('/', postActivities)

module.exports = activityRouter;