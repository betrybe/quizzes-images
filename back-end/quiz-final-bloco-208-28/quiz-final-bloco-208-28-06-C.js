app.use(express(`${__dirname}/uploads`)); const upload = multer({ dest: 'uploads' }); app.post('/files/upload', upload.single('file'), uploadMiddleware);
