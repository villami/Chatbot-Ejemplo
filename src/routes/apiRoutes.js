var express = require('express');
var watsonAPI = require('../model/watsonApi.js');
var apiRouter = express.Router();

apiRouter.route('/tone')
    .post(function(req, res) {
        console.log(req.body.text);
        watsonAPI.getAllEmotionTones(req.body.text).then(function(tones) {
            console.log(tones);
            res.status(200).send(tones);
        });
    });
apiRouter.route('/analyze')
    .post(function(req,res){
        console.log(req.body);
        watsonAPI.getAllEmotionTones(req.body.text).then(function(tones) {
            console.log(tones);
            res.status(200).send(tones);
        });
    });
module.exports = apiRouter;
