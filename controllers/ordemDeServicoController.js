// controllers/ordemDeServicoController.js

import OrdemDeServicoService from "../services/ordemDeServicoService.js";
const service = new OrdemDeServicoService();

export default class OrdemDeServicoController {
    async getOrdensDeServico(req, res) {
        try {
            const ordens = await service.getOrdensDeServico();
            res.json(ordens);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async addOrdemDeServico(req, res) {
        try {
            const novaOrdem = await service.addOrdemDeServico(req.body);
            res.status(201).json(novaOrdem);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }

    async deleteOrdemDeServico(req, res) {
        try {
            const { id } = req.body; 
            if (!id) {
                return res.status(400).json({ error: "ID da Ordem de Serviço não fornecido." });
            }
            const ordemDeletada = await service.deleteOrdemDeServico(id);
            res.json(ordemDeletada);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }
}