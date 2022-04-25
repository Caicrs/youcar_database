const mongooose = require('mongoose');

const PaletaSchema = new mongooose.Schema({

    modelo: { type: String, required: true },
    ano: { type: String, required: true },
    km: { type: Number, required: true },
    combustivel: { type: String, required: true },
    cambio: { type: String, required: true },
    localizacao: { type: String, required: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: String, required: true },
});

const Paleta = mongooose.model('cars', PaletaSchema);

module.exports = Paleta;
