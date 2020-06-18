/**
 * this file contain sub url for query database 
 */

const express = require('express');
var router = express.Router();
var util = require('util');
const fs = require('fs')
var dbconnection = require('./db');
const format = require('string-format')
const fsx = require('fs-extra');

// api for response query cutoff time schedule that have data in current time 
router.get('/getcutoff', (req, res) => {
    dbconnection.query("SELECT nco.M_Id,nco.Id,nco.Source,nco.Destination,TIME_FORMAT(nco.Time1,'%H:%i') AS \
    Time1,TIME_FORMAT(nco.Time2,'%H:%i') AS Time2,TIME_FORMAT(nco.Time3,'%H:%i') AS Time3, \
    TIME_FORMAT(nco.Time4,'%H:%i') AS Time4, nco.TimeRangeId, nco.Type_ID FROM nmiv_cut_off nco INNER JOIN nmiv_time_range ntr \
    ON nco.TimeRangeId = ntr.Id \
    INNER JOIN nmiv_type nt ON ntr.Type_ID = nt.Type_ID \
    WHERE CAST(TIME_FORMAT(NOW(),'%H:%i') AS TIME) BETWEEN CAST(TIME_FORMAT(ntr.Start_time,'%H:%i') AS TIME) \
    AND CAST(TIME_FORMAT(ntr.End_time,'%H:%i') AS TIME)", function (error, results, fields) {
        if (error) throw error;
        res.send(results, 200);
    });
});

// api for response query cutoff time schedule by check condition from TimeRangeId for show time range in cutoff edit page.
router.get('/getcutoff/:condition', (req, res) => {
    var timeCondition = req.params.condition;
    dbconnection.query("SELECT nco.M_Id,nco.Id,nco.Source,nco.Destination,TIME_FORMAT(nco.Time1,'%H:%i') AS \
    Time1,TIME_FORMAT(nco.Time2,'%H:%i') AS Time2,TIME_FORMAT(nco.Time3,'%H:%i') AS Time3, \
    TIME_FORMAT(nco.Time4,'%H:%i') AS Time4,nco.TimeRangeId, nco.Type_ID FROM nmiv_cut_off nco INNER JOIN nmiv_time_range ntr \
    ON nco.TimeRangeId = ntr.Id \
    INNER JOIN nmiv_type nt ON ntr.Type_ID = nt.Type_ID \
    WHERE " + timeCondition + " = nco.TimeRangeId", function (error, results, fields) {
        if (error) throw error;
        res.send(results, 200);
    });

});

// api for response query service center time schedule that have data in current time 
router.get('/getservicecenter', (req, res) => {
    dbconnection.query("SELECT nsc.M_Id,nsc.Id,nsc.Source,TIME_FORMAT(nsc.Time1,'%H:%i') AS \
    Time1,TIME_FORMAT(nsc.Time2,'%H:%i') AS Time2,TIME_FORMAT(nsc.Time3,'%H:%i') AS Time3,\
     TIME_FORMAT(nsc.Time4,'%H:%i') AS Time4,TIME_FORMAT(nsc.Time5,'%H:%i') AS Time5,\
     TIME_FORMAT(nsc.Time6,'%H:%i') AS Time6,TIME_FORMAT(nsc.Time7,'%H:%i') AS Time7,\
     TIME_FORMAT(nsc.Time8,'%H:%i') AS Time8,TIME_FORMAT(nsc.Time9,'%H:%i') AS Time9,\
     TIME_FORMAT(nsc.Time10,'%H:%i') AS Time10,TIME_FORMAT(nsc.Time11,'%H:%i') AS Time11,\
     TIME_FORMAT(nsc.Time12,'%H:%i') AS Time12,TIME_FORMAT(nsc.Time13,'%H:%i') AS Time13,\
     TIME_FORMAT(nsc.Time14,'%H:%i') AS Time14,TIME_FORMAT(nsc.Time15,'%H:%i') AS Time15,\
     TIME_FORMAT(nsc.Time16,'%H:%i') AS Time16, nsc.TimeRangeId ,nsc.Type_ID FROM nmiv_service_center nsc \
     INNER JOIN nmiv_time_range ntr ON nsc.TimeRangeId = ntr.Id \
     INNER JOIN nmiv_type nt ON ntr.Type_ID = nt.Type_ID \
     WHERE CAST(TIME_FORMAT(NOW(),'%H:%i') AS TIME)\
      BETWEEN CAST(TIME_FORMAT(ntr.Start_time,'%H:%i') AS TIME) AND CAST(TIME_FORMAT(ntr.End_time,'%H:%i') AS TIME) \
      ORDER BY nsc.Id ASC", function (error, results, fields) {
        if (error) throw error;
        res.send(results, 200);
    });
});

// api for response query cutoff time schedule by check condition from TimeRangeId for show time range in service center edit page.
router.get('/getservicecenter/:condition', (req, res) => {
    var timeCondition = req.params.condition;
    dbconnection.query("SELECT nsc.M_Id,nsc.Id,nsc.Source,TIME_FORMAT(nsc.Time1,'%H:%i') AS \
    Time1,TIME_FORMAT(nsc.Time2,'%H:%i') AS Time2,TIME_FORMAT(nsc.Time3,'%H:%i') AS Time3,\
     TIME_FORMAT(nsc.Time4,'%H:%i') AS Time4,TIME_FORMAT(nsc.Time5,'%H:%i') AS Time5,\
     TIME_FORMAT(nsc.Time6,'%H:%i') AS Time6,TIME_FORMAT(nsc.Time7,'%H:%i') AS Time7,\
     TIME_FORMAT(nsc.Time8,'%H:%i') AS Time8,TIME_FORMAT(nsc.Time9,'%H:%i') AS Time9,\
     TIME_FORMAT(nsc.Time10,'%H:%i') AS Time10,TIME_FORMAT(nsc.Time11,'%H:%i') AS Time11,\
     TIME_FORMAT(nsc.Time12,'%H:%i') AS Time12,TIME_FORMAT(nsc.Time13,'%H:%i') AS Time13,\
     TIME_FORMAT(nsc.Time14,'%H:%i') AS Time14,TIME_FORMAT(nsc.Time15,'%H:%i') AS Time15,\
     TIME_FORMAT(nsc.Time16,'%H:%i') AS Time16, nsc.TimeRangeId, nsc.Type_ID FROM nmiv_service_center nsc \
     INNER JOIN nmiv_time_range ntr ON nsc.TimeRangeId = ntr.Id\
     INNER JOIN nmiv_type nt ON ntr.Type_ID = nt.Type_ID \
     WHERE " + timeCondition + " = nsc.TimeRangeId \
    ORDER BY nsc.Id ASC", function (error, results, fields) {
        if (error) throw error;
        res.send(results, 200);
    });
});

// api for response query time range (nmiv_time_range table) by type id.
router.get('/timerange/:id', (req, res) => {
    var timeTypeId = req.params.id;
    dbconnection.query("SELECT * FROM nmiv_time_range WHERE nmiv_time_range.Type_ID = " + timeTypeId, function (error, results, fields) {
        if (error) throw error;
        res.send(results, 200);
    });
});

// api for response query time range (nmiv_time_range table) select all row 
router.get('/timerange', (req, res) => {
    dbconnection.query("SELECT ntr.*,nt.Type_name FROM nmiv_time_range ntr INNER JOIN nmiv_type nt ON ntr.Type_ID = nt.Type_ID", function (error, results, fields) {
        if (error) throw error;
        res.send(results, 200);
    });
});

// api for response query time range type select all row from nmiv_type table.
router.get('/timerangetype', (req, res) => {
    dbconnection.query("SELECT * FROM nmiv_type", function (error, results, fields) {
        if (error) throw error;
        res.send(results, 200);
    });
});

/**
 * api for update nmiv_time_range it have 2 step
 * - step 1 : check Start_time and End_time where Type_ID if it not overlab will be allow to update
 * ---- overlab : response to client it can't update.
 * ---- not overlab : go to step 2.
 * - step 2 : update that data from request to database.
 */
router.put('/update/timerange',async (req, res) => {
    var ID = req.body.Id;
    var Name_display = req.body.Name_display;
    var Start_time = req.body.Start_time;
    var End_time = req.body.End_time;
    var Type_ID = req.body.Type_ID;

    console.log("Update with ID : "+ID);

    var checkDuplicateTime = await dbconnection.query("SELECT * FROM nmiv_time_range ntr WHERE ntr.Type_ID = "+Type_ID+" AND ntr.Id NOT IN ("+ID+")\
    AND CAST(TIME_FORMAT('" + Start_time + "','%H:%i') AS TIME) <= CAST(TIME_FORMAT(ntr.End_time,'%H:%i') AS TIME) \
    AND CAST(TIME_FORMAT('" + End_time + "','%H:%i') AS TIME) >= CAST(TIME_FORMAT(ntr.Start_time,'%H:%i') AS TIME)");

    if (checkDuplicateTime.length <= 0) {
        try {
            var sql = "UPDATE nmiv_time_range SET Name_display = '{}',Start_time = '{}',End_time = '{}',Type_ID = {} WHERE Id = {}";
            sql = format(sql,Name_display,Start_time,End_time,Type_ID,ID);
            dbconnection.query(sql).then((error, results, fields) => {
                if (error){
                    console.log(error);
                    res.send({
                        "path":"in try",
                        "error": true,
                        "message": error,
                        "status": "OK"
                    }, 200); 
                    return;
                }
            });
            res.send({
                "error": false,
                "message": "Update Time Schedule Already.",
                "status": "OK"
            }, 200);
        } 
        catch (error) {
            console.error(error);
            res.send({
                "path":"in catch",
                "error": true,
                "message": error,
                "status": "OK"
            }, 200);
        }

    } else {
        res.send({
            "path":"in else",
            "error": true,
            "message": "Time is Duplicate Please use other time or change value.",
            "status": "OK"
        }, 200);
    }
});

/**
 * api for update cutoff data (nmiv_cut_off) 
 */
router.put('/update/cutoff', (req, res) => {
    (String(req.body.Time1).trim() == "") ? '00:00' : '';
    (String(req.body.Time2).trim() == "") ? '00:00' : '';
    (String(req.body.Time3).trim() == "") ? '00:00' : '';
    (String(req.body.Time4).trim() == "") ? '00:00' : '';
    dbconnection.query("UPDATE nmiv_cut_off nco SET \
    nco.Source = '" + req.body.Source + "',nco.Destination = '" + req.body.Destination + "',\
    nco.Time1 = '" + req.body.Time1 + "', nco.Time2 = '" + req.body.Time2 + "', \
    nco.Time3 = '" + req.body.Time3 + "', nco.Time4 = '" + req.body.Time4 + "' \
    WHERE nco.M_Id = " + req.body.M_Id + " \
    AND nco.TimeRangeId = " + req.body.TimeRangeId, function (error, results, fields) {
        if (error) throw error;
        res.send(results, 200);
    });
});


/**
 * api for update servicecenter data (nmiv_cut_off) 
 */
router.put('/update/servicecenter', (req, res) => {
    (String(req.body.Time1).trim() == "") ? '00:00' : '';
    (String(req.body.Time2).trim() == "") ? '00:00' : '';
    (String(req.body.Time3).trim() == "") ? '00:00' : '';
    (String(req.body.Time4).trim() == "") ? '00:00' : '';
    (String(req.body.Time5).trim() == "") ? '00:00' : '';
    (String(req.body.Time6).trim() == "") ? '00:00' : '';
    (String(req.body.Time7).trim() == "") ? '00:00' : '';
    (String(req.body.Time8).trim() == "") ? '00:00' : '';
    (String(req.body.Time9).trim() == "") ? '00:00' : '';
    (String(req.body.Time10).trim() == "") ? '00:00' : '';
    (String(req.body.Time11).trim() == "") ? '00:00' : '';
    (String(req.body.Time12).trim() == "") ? '00:00' : '';
    (String(req.body.Time13).trim() == "") ? '00:00' : '';
    (String(req.body.Time14).trim() == "") ? '00:00' : '';
    (String(req.body.Time15).trim() == "") ? '00:00' : '';
    (String(req.body.Time16).trim() == "") ? '00:00' : '';
    dbconnection.query("UPDATE nmiv_service_center nsc SET \
    nsc.Source = '" + req.body.Source + "',nsc.Time1 = '" + req.body.Time1 + "',nsc.Time2 = '" + req.body.Time2 + "', \
    nsc.Time3 = '" + req.body.Time3 + "',nsc.Time4 = '" + req.body.Time4 + "',nsc.Time5 = '" + req.body.Time5 + "', \
    nsc.Time6 = '" + req.body.Time6 + "',nsc.Time7 = '" + req.body.Time7 + "',nsc.Time8 = '" + req.body.Time8 + "', \
    nsc.Time9 = '" + req.body.Time9 + "',nsc.Time10 = '" + req.body.Time10 + "',nsc.Time11 = '" + req.body.Time11 + "', \
    nsc.Time12 = '" + req.body.Time12 + "',nsc.Time13 = '" + req.body.Time13 + "',nsc.Time14 = '" + req.body.Time14 + "', \
    nsc.Time15 = '" + req.body.Time15 + "',nsc.Time16 = '" + req.body.Time16 + "'\
    WHERE nsc.M_Id = " + req.body.M_Id + " \
    AND nsc.TimeRangeId = " + req.body.TimeRangeId, function (error, results, fields) {
        if (error) throw error;
        res.send(results, 200);
    });
});

// api for streamimg video when cutoff or service center not have data to display. it load video file from (assets folder)
router.get('/stream', function (req, res) {
    const path = 'assets/sample.mp4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1] ?
            parseInt(parts[1], 10) :
            fileSize - 1
        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, {
            start,
            end
        })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
});

// api for upload video to server folder (assets folder) and rename to sample.mp4
router.post('/upload/vtr', function (req, res) {
    var fstream;
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);
        //Path where image will be uploaded
        fstream = fsx.createWriteStream('./assets/sample.mp4');
        file.pipe(fstream);
        fstream.on('close', function () {
            console.log("Upload Finished of " + filename);
            res.send({
                "message": "Upload Finished of " + filename,
                "status": "OK"
            }, 200); //where to go next
        });
    });
    return req.pipe(req.busboy);
});

// api for delete cutoff time schedule 
router.post('/delete/cutoff',async (req, res) => {
    const TimeRangeId = req.body.Id;
    try{
        console.log("DELETE FROM nmiv_cut_off WHERE TimeRangeId =  " + TimeRangeId);
        await dbconnection.query("DELETE FROM nmiv_cut_off WHERE TimeRangeId =  " + TimeRangeId);
        await dbconnection.query("DELETE FROM nmiv_time_range WHERE Id = " + TimeRangeId);
        res.send({
            "error": false,
            "message": "Delete Time Schedule Already.",
            "status": "OK"
        }, 200);
    }
    catch(error){
        console.error(error);
        res.send({
            "error": true,
            "message": error.message,
            "status": "OK"
        }, 200);
    }

});

// api for delete service center time schedule 
router.post('/delete/servicecenter',async (req, res) => {
    const TimeRangeId = req.body.Id;
    try{
        console.log("DELETE FROM nmiv_service_center WHERE TimeRangeId =  " + TimeRangeId);
        await dbconnection.query("DELETE FROM nmiv_service_center WHERE TimeRangeId =  " + TimeRangeId);
        await dbconnection.query("DELETE FROM nmiv_time_range WHERE Id = " + TimeRangeId);
        res.send({
            "error": false,
            "message": "Delete Time Schedule Already.",
            "status": "OK"
        }, 200);
    }
    catch(error){
        console.error(error);
        res.send({
            "error": true,
            "message": error.message,
            "status": "OK"
        }, 200);
    }

});

/**
 * api for add new cutoff time schedule it have 2 step 
 * - step 1 : check Start_time and End_time in cutoff database if it have time overlab will not allow to save if not overlab will allow to next step.
 * ---- overlab : return to client "Time is Duplicate Please use other time or change value."
 * ---- not overlab : go to step 2.
 * - step 2 : loop for generate data to add in cutoff database 9 row 
 */
router.post('/addnewtemplate/cutoff', async function (req, res) {

    var Type_ID = req.body.Type_ID;   
    var Name_display = req.body.Name_display;
    var Start_time = req.body.Start_time;
    var End_time = req.body.End_time;
    let buff_cutoff = [];

    var checkDuplicateTime = await dbconnection.query("SELECT * FROM nmiv_time_range ntr WHERE ntr.Type_ID = 2\
    AND CAST(TIME_FORMAT('" + Start_time + "','%H:%i') AS TIME) <= CAST(TIME_FORMAT(ntr.End_time,'%H:%i') AS TIME) \
    AND CAST(TIME_FORMAT('" + End_time + "','%H:%i') AS TIME) >= CAST(TIME_FORMAT(ntr.Start_time,'%H:%i') AS TIME)");

    if (checkDuplicateTime.length <= 0) {
        try {
            var time_template = "INSERT INTO nmiv_time_range (Name_display, Start_time, End_time, Type_ID) VALUES ('{}','{}','{}','{}')";
            time_template = format(time_template, Name_display, Start_time, End_time, Type_ID);
            await dbconnection.query(time_template);

            var results = await dbconnection.query("SELECT * FROM `nmiv_time_range` ORDER BY Id DESC LIMIT 1");

            for (var i = 1; i < 10; i++) {
                buff_cutoff.push([i, "", "", "", "", "", "", parseInt(results[0].Id), parseInt(results[0].Type_ID)]);
                console.log([i, "", "", "", "", "", "", parseInt(results[0].Id), parseInt(results[0].Type_ID)]);
            }

            var cutoff_template = "INSERT INTO nmiv_cut_off (Id, Source, Destination, Time1, Time2, Time3, Time4, TimeRangeId, Type_ID) \
        VALUES ?";

            dbconnection.query(cutoff_template, [buff_cutoff]).then((error, results, fields) => {
                if (error) throw error;
            });
            res.send({
                "error": false,
                "message": "Created Time Schedule Already.",
                "status": "OK"
            }, 201);
        } catch (error) {
            console.error(error);
            res.send({
                "error": true,
                "message": error.message,
                "status": "OK"
            }, 200);
        }
    } else {
        res.send({
            "error": true,
            "message": "Time is Duplicate Please use other time or change value.",
            "status": "OK",
            "data": checkDuplicateTime
        }, 200);
    }
});

/**
 * api for add new service center time schedule it have 2 step 
 * - step 1 : check Start_time and End_time in service center database if it have time overlab will not allow to save if not overlab will allow to next step.
 * ---- overlab : return to client "Time is Duplicate Please use other time or change value."
 * ---- not overlab : go to step 2.
 * - step 2 : loop for generate data to add in service center database 9 row 
 */
router.post('/addnewtemplate/servicecenter', async function (req, res) {

    var Type_ID = req.body.Type_ID;
    var Name_display = req.body.Name_display;
    var Start_time = req.body.Start_time;
    var End_time = req.body.End_time;
    var buff_servicecenter = [];

    var checkDuplicateTime = await dbconnection.query("SELECT * FROM nmiv_time_range ntr WHERE ntr.Type_ID = 1\
    AND CAST(TIME_FORMAT('" + Start_time + "','%H:%i') AS TIME) <= CAST(TIME_FORMAT(ntr.End_time,'%H:%i') AS TIME) \
    AND CAST(TIME_FORMAT('" + End_time + "','%H:%i') AS TIME) >= CAST(TIME_FORMAT(ntr.Start_time,'%H:%i') AS TIME)");

    if (checkDuplicateTime.length <= 0) {
        try {
            var time_template = "INSERT INTO nmiv_time_range (Name_display, Start_time, End_time, Type_ID) VALUES ('{}','{}','{}','{}')";
            time_template = format(time_template, Name_display, Start_time, End_time, Type_ID);
            await dbconnection.query(time_template);

            var results = await dbconnection.query("SELECT * FROM `nmiv_time_range` ORDER BY Id DESC LIMIT 1");
            for (var i = 1; i < 10; i++) {
                buff_servicecenter.push([i, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", parseInt(results[0].Id), parseInt(results[0].Type_ID)]);
                console.log([i, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", parseInt(results[0].Id), parseInt(results[0].Type_ID)]);
            }

            var servicecenter_template = "INSERT INTO nmiv_service_center (Id, Source, Time1, Time2, Time3, Time4, Time5, Time6, Time7, Time8, Time9, Time10, Time11, Time12, Time13, Time14, Time15, Time16, TimeRangeId, Type_ID) \
        VALUES ?";
            dbconnection.query(servicecenter_template, [buff_servicecenter]).then((error, results, fields) => {
                if (error) throw error;
            });
            res.send({
                "error": false,
                "message": "Created Time Schedule Already.",
                "status": "OK"
            }, 200);
        } catch (error) {
            console.error(error);
            res.send({
                "error": true,
                "message": error.message,
                "status": "OK"
            }, 201);
        }
    } else {
        res.send({
            "error": true,
            "message": "Time is Duplicate Please use other time or change value.",
            "status": "OK",
            "data": checkDuplicateTime
        }, 200);
    }
});

module.exports = router;