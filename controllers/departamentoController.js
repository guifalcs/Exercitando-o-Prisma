// controllers/departamentoController.js

import DepartamentoService from "../services/departamentoService.js";
const service = new DepartamentoService();

export default class DepartamentoController {
    async getDepartamentos(req, res) {
        try {
            const departamentos = await service.getDepartamentos();
            res.json(departamentos);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async addDepartamento(req, res) {
        try {
            const novoDepartamento = await service.addDepartamento(req.body);
            res.status(201).json(novoDepartamento);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }

    async deleteDepartamento(req, res) {
        try {
            const departamentoDeletado = await service.deleteDepartamento(req.body);
            res.json(departamentoDeletado);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e.message });
        }
    }
}