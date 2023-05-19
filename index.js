import express from 'express';
import dotenv from "dotenv";
import cors from 'cors'
import connectDB from './config/db.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js'
import pacienteRoutes from './routes/pacienteRoutes.js'

const app = express();
app.use(express.json())

dotenv.config();

connectDB();

const corsOptions = {
  origin: process.env.FRONTEND_URL
};
app.use(cors(corsOptions));

app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listen from port: http://localhost:${PORT}`);
})
