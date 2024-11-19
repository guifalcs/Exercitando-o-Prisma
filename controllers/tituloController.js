// controllers/tituloController.js

import TituloService from "../services/tituloService.js";
const service = new TituloService();

export default class TituloController {
    async getTitulos(req, res) {
        try {
            const titulos = await service.getTitulos();
            res.json(titulos);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async addTitulo(req, res) {
        try {
            const novoTitulo = await service.addTitulo(req.body);
            res.status(201).json(novoTitulo);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }

    async deleteTitulo(req, res) {
        try {
            const { id } = req.body; 
            if (!id) {
                return res.status(400).json({ error: "ID do título não fornecido." });
            }
            const tituloDeletado = await service.deleteTitulo(id);
            res.json(tituloDeletado);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }

    async updateTitulo(req, res) {
        try {
            const { id } = req.params; 
            const tituloAtualizado = await service.updateTitulo(id, req.body);
            res.json(tituloAtualizado);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }
}