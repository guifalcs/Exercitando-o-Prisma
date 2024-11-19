// services/clienteService.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class ClienteService {
    async getClientes() {
        const clientes = await prisma.cliente.findMany();
        return clientes;
    }

    async addCliente(userData) {
        return await prisma.cliente.create({
            data: {
                nome: userData.nome,
            },
        });
    }

    async deleteCliente(id) {
        const clienteExistente = await prisma.cliente.findUnique({
            where: { idCliente: id },
        });

        if (!clienteExistente) {
            throw new Error("Cliente não encontrado");
        }

        return await prisma.cliente.delete({
            where: {
                idCliente: id,
            },
        });
    }

    async updateCliente(id, userData) {
        return await prisma.cliente.update({
            where: {
                idCliente: id,
            },
            data: {
                nome: userData.nome,
            },
        });
    }
}