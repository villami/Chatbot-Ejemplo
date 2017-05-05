var express = require('express');
var watsonAPI = require('../model/watsonApi.js');
var apiRouter = express.Router();

apiRouter.route('/tone')
    .post(function(req, res) {
        console.log(req.body.text);
        watsonAPI.getSocialTone(req.body.text).then(function(tone) {
            console.log('Tone:' + tone.tone_name);
            console.log('Using color:' + color);
            res.write(tone.tone_name);
            res.end();
        });
    });
module.exports = apiRouter;
