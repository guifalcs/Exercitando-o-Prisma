// controllers/nfseController.js

import NFSeService from "../services/nfseService.js";
const service = new NFSeService();

export default class NFSeController {
    async getNfse(req, res) {
        try {
            const nfse = await service.getNfse();
            res.json(nfse);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async addNfse(req, res) {
        try {
            const novaNfse = await service.addNfse(req.body);
            res.status(201).json(novaNfse);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }

    async deleteNfse(req, res) {
        try {
            const { id } = req.body; // Certifique-se de que o ID está sendo passado corretamente
            if (!id) {
                return res.status(400).json({ error: "ID da NFSe não fornecido." });
            }
            const nfseDeletada = await service.deleteNfse(id);
            res.json(nfseDeletada);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }
}