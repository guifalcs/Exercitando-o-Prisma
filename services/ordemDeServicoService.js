// services/ordemDeServicoService.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class OrdemDeServicoService {
    async getOrdensDeServico() {
        const ordens = await prisma.ordemDeServico.findMany();
        return ordens;
    }

    async addOrdemDeServico(userData) {
        return await prisma.ordemDeServico.create({
            data: {
                descricao: userData.descricao,
                dataAbertura: userData.dataAbertura,
                clienteId: userData.clienteId, 
                status: userData.status,
            },
        });
    }

    async deleteOrdemDeServico(id) {
        const ordemExistente = await prisma.ordemDeServico.findUnique({
            where: { idOrdem: id },
        });

        if (!ordemExistente) {
            throw new Error("Ordem de Serviço não encontrada");
        }

        return await prisma.ordemDeServico.delete({
            where: {
                idOrdem: id,
            },
        });
    }
}