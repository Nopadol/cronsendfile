var express = require('express');
var request = require("request");
var fs = require('fs');
var cron = require('node-cron');

var app = express();

cron.schedule('*/1 * * * * *', function(){
    // every 2 seconds
    var formData = {
        // Pass data via Streams
        my_file: fs.createReadStream(__dirname + '/file/test.txt')
    };
    request.post({url:'http://203.154.91.43:7070/upload', formData: formData, auth: {username: 'nopadoloak',password: 'oak042135'} }, function (err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
    });
});


app.listen(6000, function() {
    console.log('Listening on port 6000');
});

module.exports = app;
