// controllers/clienteController.js

import ClienteService from "../services/clienteService.js";
const service = new ClienteService();

export default class ClienteController {
    async getClientes(req, res) {
        try {
            const clientes = await service.getClientes();
            res.json(clientes);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async addCliente(req, res) {
        try {
            const novoCliente = await service.addCliente(req.body);
            res.status(201).json(novoCliente);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }

    async deleteCliente(req, res) {
        try {
            const { id } = req.body; // Certifique-se de que o ID está sendo passado corretamente
            if (!id) {
                return res.status(400).json({ error: "ID do cliente não fornecido." });
            }
            const clienteDeletado = await service.deleteCliente(id);
            res.json(clienteDeletado);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }

    async updateCliente(req, res) {
        try {
            const { id } = req.params; // Assume que o ID é passado como um parâmetro de rota
            const clienteAtualizado = await service.updateCliente(id, req.body);
            res.json(clienteAtualizado);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }
}