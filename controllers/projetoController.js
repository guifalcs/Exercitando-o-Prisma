// controllers/projetoController.js

import ProjetoService from '../services/projetoService.js';

const projetoService = new ProjetoService();

class ProjetoController {
    async getProjetos(req, res) {
        try {
            const projetos = await projetoService.getProjetos();
            res.json(projetos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async addProjeto(req, res) {
        try {
            const projeto = await projetoService.addProjeto(req.body);
            res.status(201).json(projeto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProjeto(req, res) {
        try {
            const { id } = req.body;
            await projetoService.deleteProjeto(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ProjetoController;