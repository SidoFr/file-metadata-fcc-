const multer = require('multer');

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter: function(req, file, cb) {
        const isPhoto = file.mimetype.startsWith('image/');
        const isAudio = file.mimetype.startsWith('audio/');
        if (isPhoto || isAudio) {
            cb(null, true);
        } else {
            cb("error: wrong type of file!");
        }
    }
};

exports.upload = multer(multerOptions).single('file');

exports.getSize = (req, res) => {
    res.json({"size": req.file.size});
};