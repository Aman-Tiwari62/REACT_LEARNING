import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors()); // this allows cross-origin requests from any domain
app.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json({ username: 'Aman Tiwari' });
  }, 8000);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});