// services/departamentoService.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class DepartamentoService {
    async getDepartamentos() {
        const departamentos = await prisma.departamento.findMany();
        return departamentos;
    }

    async addDepartamento(userData) {
        return await prisma.departamento.create({
            data: {
                nome: userData.nome,
            },
        });
    }

    async deleteDepartamento(userData) {
        return await prisma.departamento.delete({
            where: {
                idDepartamento: userData.id,
            },
        });
    }
}