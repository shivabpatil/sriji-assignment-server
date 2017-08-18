var express = require('express');

var routes = function(Student) {
    var studentRouter = express.Router();

    var studentController = require('../controllers/studentController')(Student);
    studentRouter.route('/students')
        .post(studentController.post)
        .get(studentController.get);


    //middleware for bike
    studentRouter.use('/students/:studentId', function(req, res, next) {

        Student.findById(req.params.studentId, function(error, student) {
            if (error) {
                res.status(500).send(error);
            } else if (student) {
                req.student = student;
                next();
            } else {
                res.status(400).send('Student not found');
            }
        })
    })

    studentRouter.route('/students/:studentId')
        .get(function(req, res) {
            res.json(req.student);
        })
        .put(function(req, res) {
            req.student.rollNo = req.body.rollNo;
            req.student.name = req.body.name;
            req.student.lname = req.body.lname;
            req.student.address = req.body.address;
            req.student.division = req.student.division;
            req.student.branch = req.student.branch;
            req.student.save(function(error) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.json(req.student);
                }
            });

        })
        .patch(function(req, res) {
            if (req.body._id) {
                delete req.body._id;
            }
            for (var p in req.body) {
                req.student[p] = req.body[p];
            }

            req.student.save(function(error) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.json(req.student);
                }
            });
        })
        .delete(function(req, res) {
            req.student.remove(function(error) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.status(204).send('Removed');
                }
            });
        })

    return studentRouter;
}

module.exports = routes;