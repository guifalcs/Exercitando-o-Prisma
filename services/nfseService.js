// services/nfseService.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class NFSeService {
    async getNfse() {
        const nfse = await prisma.nFSe.findMany();
        return nfse;
    }

    async addNfse(userData) {
        return await prisma.nFSe.create({
            data: {
                numero: userData.numero,
                dataEmissao: userData.dataEmissao,
                clienteId: userData.clienteId, // Supondo que você tenha um relacionamento com Cliente
                valorTotal: userData.valorTotal,
                // Adicione outros campos necessários aqui
            },
        });
    }

    async deleteNfse(id) {
        const nfseExistente = await prisma.nFSe.findUnique({
            where: { idNfse: id },
        });

        if (!nfseExistente) {
            throw new Error("NFSe não encontrada");
        }

        return await prisma.nFSe.delete({
            where: {
                idNfse: id,
            },
        });
    }
}