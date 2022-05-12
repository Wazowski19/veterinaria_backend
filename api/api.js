import express  from "express";
import userRoutes from "./routes/userRoutes.js"

const api = express();

//Configurar middlewares generales
api.use(express.json())
api.use(userRoutes)
api.use((err, req, res, next) =>{
    if(err instanceof SyntaxError){
        return res.status(400).json({
            msg: 'Json inválido'
        })
    }
    console.error(err);
    return res.status(500).json({
        msg: 'Ha ocurrido un error, ups'
    })
})

export default api