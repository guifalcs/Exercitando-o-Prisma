//Imports
import { PrismaClient } from "@prisma/client";

//Variaveis iniciais
const prisma = new PrismaClient();

//Export do service
export default class CategoriaService{
      async getCategorias(){
        const categorias = await prisma.categoria.findMany()
        return categorias
    }

      async addCategorias(userData){
        return await prisma.categoria.create({
          data: {
            nome: userData.nome
          }
        })
    }

    async deleteCategorias(userData){
        return await prisma.categoria.delete({
            where: {
              idCategoria: userData.id
            }
          })
    }
}