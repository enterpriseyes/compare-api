const express = require('express');
const activityRouter = express.Router();
const Activity = require('../dbqueries/activity_log');
// GET Products By OS
activityRouter.post('/insertActivityLog/', (req, res, next) => {
    if (req.body) {
        Activity.insertActivityLog(
            req.body.iPAddress,
            req.body.continent,
            req.body.country,
            req.body.state,
            req.body.locality, 
            req.body.startTime, 
            req.body.endTime, 
            req.body.pageName, 
            req.body.activityName, 
            req.body.longitude, 
            req.body.latitude, 
            req.body.selectedProductId, 
            req.body.browserDetails, 
            req.body.deviceDetails, 
            req.body.userEmail, 
            req.body.request,req.body.response, (err, rows) => {
            if (err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    });

module.exports=activityRouter;