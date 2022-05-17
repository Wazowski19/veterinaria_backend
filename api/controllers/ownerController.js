import connection from '../utils/database.js';
const getOwners = async (req, res) => {
  try {
    const owners = await connection.select('*').from('owner');
    return res.json({
      owners,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Ocurrio un error al consultar los dueños',
    });
  }
};

export { getOwners };
