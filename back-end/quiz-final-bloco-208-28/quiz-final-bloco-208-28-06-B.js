app.use(express.static(`${__dirname}/uploads`)); const upload = multer({ destination: 'uploads' }); app.post('/files/upload', upload(), uploadMiddleware);
