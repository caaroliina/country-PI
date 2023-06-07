const { Activity } = require('../db')

const allActivities = async () => {
    const activities = await Activity.findAll();
    return activities;
}

const createActivity = async ( name, difficulty, duration, season ) => {
    try {
        const newActivity = await Activity.create({ name: name, difficulty: difficulty, duration: duration, season: season })
        return newActivity;
    } catch (error) {
        alert(error.message)
    }
}

module.exports = {
    createActivity,
    allActivities
}