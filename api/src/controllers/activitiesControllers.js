const { Activity } = require('../db')

const allActivities = async () => {
    const activities = await Activity.findAll();
    return activities;
}

const createActivity = async ( name, difficulty, duration, season ) => {
    const newActivity = await Activity.create( {name, difficulty, duration, season} )
    return newActivity;
}

module.exports = {
    createActivity,
    allActivities
}