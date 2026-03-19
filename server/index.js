import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: process.env.CLIENT_URL,  // e.g. https://your-client.vercel.app
  credentials: true
}))

app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute)

// Only listen locally, not on Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;  // ← Vercel needs this