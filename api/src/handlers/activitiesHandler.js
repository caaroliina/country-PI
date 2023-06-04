const { createActivity, allActivities } = require('../controllers/activitiesControllers');

const getActivities = (req, res) => {
    try {
        const activities = allActivities()
        return res.status(200).json(activities)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

const postActivities = async (req, res) => {
    try {
        const { name, difficulty, duration, season } = req.body;
        const newActivity = await createActivity(name, difficulty, duration, season)
        return res.status(201).json(newActivity)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = {
    getActivities,
    postActivities
}