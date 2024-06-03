const db = require('../db');

const listadoBandas = (req, res) => {
    res.render('listadoBandas', {bandas: db.lista})
};

const detalleBanda = (req, res) => {
    const banda = db.lista.find(b => b.id === parseInt(req.params.id));
    if (banda) {
      res.render('detalleBanda', { banda });
    } else {
      res.status(404).send('Banda no encontrada');
    }
};

const genero = (req, res) => {
    const genero = req.params.genero
    const bandas = db.lista.filter(b => b.genero.toLowerCase() === genero.toLowerCase());
    if (bandas.length > 0) {
        res.render('genero', { genero, bandas });
    } else {
        res.status(404).send('No hay bandas de este genero');
    }
};


module.exports = {
    listadoBandas,
    detalleBanda,
    genero
}