// services/projetoService.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class ProjetoService {
    async getProjetos() {
        const projetos = await prisma.projeto.findMany();
        return projetos;
    }

    async addProjeto(userData) {
        return await prisma.projeto.create({
            data: {
                nome: userData.nome,
            },
        });
    }

    async deleteProjeto(id) {
        const projetoExistente = await prisma.projeto.findUnique({
            where: { idProjeto: id },
        });

        if (!projetoExistente) {
            throw new Error("Projeto não encontrado");
        }

        return await prisma.projeto.delete({
            where: {
                idProjeto: id,
            },
        });
    }
}