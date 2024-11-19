// controllers/contratoController.js

import ContratoService from '../services/contratoService.js';

const contratoService = new ContratoService();

class ContratoController {
    async getContratos(req, res) {
        try {
            const contratos = await contratoService.getContratos();
            res.json(contratos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async addContrato(req, res) {
        try {
            const contrato = await contratoService.addContrato(req.body);
            res.status(201).json(contrato);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteContrato(req, res) {
        try {
            const { id } = req.body;
            await contratoService.deleteContrato(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ContratoController;