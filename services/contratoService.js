// services/contratoService.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class ContratoService {
    async getContratos() {
        const contratos = await prisma.contrato.findMany();
        return contratos;
    }

    async addContrato(userData) {
        return await prisma.contrato.create({
            data: {
                nome: userData.nome,
            },
        });
    }

    async deleteContrato(id) {
        const contratoExistente = await prisma.contrato.findUnique({
            where: { idContrato: id },
        });

        if (!contratoExistente) {
            throw new Error("Contrato não encontrado");
        }

        return await prisma.contrato.delete({
            where: {
                idContrato: id,
            },
        });
    }
}