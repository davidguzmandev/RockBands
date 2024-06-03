const db = require('../db');

const listadoBandas = (req, res) => {
    res.render('listadoBandas', {bandas: db.lista})
};

const detalleBanda = (req, res) => {
    const banda = db.lista.find(b => b.id === parseInt(req.params.id));
    if (banda) {
        res.render('detalleBanda', {banda});
    } else {
        res.status(404).send('Banda no encontrada');
    }
};

module.exports = {
    listadoBandas,
    detalleBanda
}