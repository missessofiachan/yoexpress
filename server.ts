// basic express server serve html

import express from 'express';
import path from 'path';


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//   add 404 and 500 error handling
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
    }
);
import { Request, Response, NextFunction } from 'express';

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

