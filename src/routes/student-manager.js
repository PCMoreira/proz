const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file-register');
const studentController = require('../controllers/student');
const uploadFile = require('../configs/multer');

router.post('/students/register/:reference', uploadFile.single('file'), fileController.studentsRegister);
router.get('/students/register/:reference', fileController.checkFile);

router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.find);
router.put('/students/:id', studentController.update);
router.delete('/students/:id', studentController.deleteStudent);



module.exports = router;