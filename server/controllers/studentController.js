var studentController = function(Student) {

    var post = function(req, res) {
        var student = new Student(req.body);
        student.save();
        res.status(201).send(student);
    };

    var get = function(req, res) {
        Student.find(function(error, students) {
            if (error) {
                res.status(500).send(error);

            } else {
                res.json(students);
            }
        });
    }

    return {
        post: post,
        get: get
    };
}

module.exports = studentController