import connection from '../utils/database.js'

const createUser = async(req, res) =>{
    const {user} = req.body;

    try {
        const newUser = await connection('User').insert({user})
        return res.json({
            msg: 'Usuario registrado correctamente',
            user: NewUser
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al registrar nuevo usuario'
        })
    }
}

export {
    createUser
}