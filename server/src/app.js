import express from 'express'
import aiRoutes from './routes/ai.routes.js'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

// Mount your routes
app.use('/api/ai', aiRoutes);

export default app;
