//Imports
import express from 'express'
import CategoriaController from './controllers/categoriaController.js'
import DepartamentoController from './controllers/departamentoController.js'
import TituloController from './controllers/tituloController.js'
import ClienteController from './controllers/clienteController.js'
import NFSeController from './controllers/nfesController.js'
import OrdemDeServicoController from './controllers/ordemDeServicoController.js'
import ProjetoController from './controllers/projetoController.js'
import ContratoController from './controllers/contratoController.js'
import MovimentoFinanceiroController from './controllers/movimentoFinanceiroController.js'

//Variáveis iniciais
const categoriaController = new CategoriaController()
const departamentoController = new DepartamentoController()
const tituloController = new TituloController()
const clienteController = new ClienteController()
const nfseController = new NFSeController()
const ordemDeServicoController = new OrdemDeServicoController()
const projetoController = new ProjetoController()
const contratoController = new ContratoController()
const movimentoFinanceiroController = new MovimentoFinanceiroController()
const router = express.Router()

//rotas

// 1- Categorias
router.get('/categorias', async(req, res) => {
    await categoriaController.getCategorias(req, res)
})

router.post('/categorias', async(req, res) => {
    await categoriaController.addCategoria(req, res)
})

router.delete('/categorias/', async(req, res) => {
    await categoriaController.deleteCategorias(req, res)
})

//2-Departamentos
router.get('/departamentos', async(req, res) => {
    await departamentoController.getDepartamentos(req, res)
})

router.post('/departamentos', async(req, res) => {
    await departamentoController.addDepartamento(req, res)
})

router.delete('/departamentos', async(req, res) => {
    await departamentoController.deleteDepartamento(req, res)
})

//3-Titulos
router.get('/titulos', async(req, res) => {
    await tituloController.getTitulos(req, res)
})

router.post('/titulos', async(req, res) => {
    await tituloController.addTitulo(req, res)
})

router.delete('/titulos', async(req, res) => {
    await tituloController.deleteTitulo(req, res)
})

// 4- Clientes
router.get('/clientes', async (req, res) => {
    await clienteController.getClientes(req, res);
});

router.post('/clientes', async (req, res) => {
    await clienteController.addCliente(req, res);
});

router.delete('/clientes', async (req, res) => {
    await clienteController.deleteCliente(req, res);
});

// 5- NFSe
router.get('/nfse', async (req, res) => {
    await nfseController.getNfse(req, res);
});

router.post('/nfse', async (req, res) => {
    await nfseController.addNfse(req, res);
});

router.delete('/nfse', async (req, res) => {
    await nfseController.deleteNfse(req, res);
});

// 6- Ordens de Serviço
router.get('/ordens-de-servico', async (req, res) => {
    await ordemDeServicoController.getOrdensDeServico(req, res);
});

router.post('/ordens-de-servico', async (req, res) => {
    await ordemDeServicoController.addOrdemDeServico(req, res);
});

router.delete('/ordens-de-servico', async (req, res) => {
    await ordemDeServicoController.deleteOrdemDeServico(req, res);
});

// 7 - Projetos
router.get('/projetos', async (req, res) => {
    await projetoController.getProjetos(req, res);
});

router.post('/projetos', async (req, res) => {
    await projetoController.addProjeto(req, res);
});

router.delete('/projetos', async (req, res) => {
    await projetoController.deleteProjeto(req, res);
});

// 8 - Contratos
router.get('/contratos', async (req, res) => {
    await contratoController.getContratos(req, res);
});

router.post('/contratos', async (req, res) => {
    await contratoController.addContrato(req, res);
});

router.delete('/contratos', async (req, res) => {
    await contratoController.deleteContrato(req, res);
});

// 9 - Movimentos Financeiros
router.get('/movimentos-financeiros', async (req, res) => {
    await movimentoFinanceiroController.getMovimentosFinanceiros(req, res);
});

router.post('/movimentos-financeiros', async (req, res) => {
    await movimentoFinanceiroController.addMovimentoFinanceiro(req, res);
});




//export
export default router 

