import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class MovimentoFinanceiroService {
    async getMovimentosFinanceiros() {
        return await prisma.movimentoFinanceiro.findMany({
            include: {
                categoriasMovimentoFinanceiro: true,
                departamentosOnMovimentoFinanceiro: true,
                contrato: true,
                projeto: true,
                ordemDeServico: true,
                notaFiscal: true,
                Clientes: true,
                Titulo: true
            }
        });
    }

    async addMovimentoFinanceiro(userData) {
        return await prisma.movimentoFinanceiro.create({
                data: {
                    nome: userData.nome,
                    cNumCtr: userData.cNumCtr,
                    cNumOS: userData.cNumOS,
                    nCodMovCC: userData.nCodMovCC,
                    nCodBaixa: userData.nCodBaixa,

                    categoriasMovimentoFinanceiro: {
                        createMany: {
                            data: userData.categoriasMovimentoFinanceiro.map(cat => ({
                                codigoCat: cat.codigoCat || cat.idCategoria,
                                porcentagemCategoria: cat.porcentagemCategoria
                            }))
                        }
                    },

                    departamentosOnMovimentoFinanceiro: {
                        createMany: {
                            data: userData.departamentosOnMovimentoFinanceiro.map(dep => ({
                                codDepartamento: dep.codDepartamento || dep.idDepartamento,
                                porcentagemDepartamento: dep.porcentagemDepartamento
                            }))
                        }
                    },

                    contrato: userData.contrato?.idContrato ? {
                        connect: { idContrato: userData.contrato.idContrato }
                    } : undefined,
                    
                    projeto: userData.projeto?.idProjeto ? {
                        connect: { idProjeto: userData.projeto.idProjeto }
                    } : undefined,

                    ordemDeServico: {
                        connect: { idOrdemDeServico: userData.ordemDeServico.idOrdemDeServico }
                    },
                    notaFiscal: {
                        connect: { idNF: userData.notaFiscal.idNF }
                    },
                    Clientes: {
                        connect: { idCliente: userData.Clientes.idCliente }
                    },
                    Titulo: {
                        connect: { idTitulo: userData.Titulo.idTitulo }
                    }
                },
                include: {
                    categoriasMovimentoFinanceiro: true,
                    departamentosOnMovimentoFinanceiro: true
                }
            });
    }
}
