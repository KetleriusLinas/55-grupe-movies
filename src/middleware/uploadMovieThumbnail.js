import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/movies');
    },
    filename: function (req, file, cb) {
        const extension = file.originalname.split('.').at(-1);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E6);
        const newFileName = 'movie-' + uniqueSuffix + '.' + extension;
        req.newFileName = newFileName;
        cb(null, newFileName);
    },
});

export const uploadMovieThumbnailImage = multer({
    storage: storage,
    limits: {
        fileSize: 2800000,
    },
});