app.use(express.static(`${__dirname}/uploads`)); const upload = multer('uploads'); app.post('/files/upload', upload.single('file'), uploadMiddleware);
