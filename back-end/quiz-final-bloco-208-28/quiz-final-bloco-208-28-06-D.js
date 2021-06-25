app.use(express(`${__dirname}/uploads`)); const upload = multer({ destination: 'uploads' }); app.post('/files/upload', upload.single('file'), uploadMiddleware);
