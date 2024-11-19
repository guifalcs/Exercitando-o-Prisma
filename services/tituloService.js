// services/tituloService.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class TituloService {
    async getTitulos() {
        const titulos = await prisma.titulo.findMany();
        return titulos;
    }

    async addTitulo(userData) {
        return await prisma.titulo.create({
            data: {
                nome: userData.nome,
            },
        });
    }

    async deleteTitulo(id) {
        const tituloExistente = await prisma.titulo.findUnique({
            where: { idTitulo: id },
        });

        if (!tituloExistente) {
            throw new Error("Título não encontrado");
        }

        return await prisma.titulo.delete({
            where: {
                idTitulo: id,
            },
        });
    }
}