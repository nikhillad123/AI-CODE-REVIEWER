import express from 'express';
import aiRoutes from './routes/ai.routes.js';

const app = express();

app.use(express.json());

// Mount your routes
app.use('/api/ai', aiRoutes);

export default app;
