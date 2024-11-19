import MovimentoFinanceiroService from "../services/movimentoFinanceiroService.js";

const movimentoFinanceiroService = new MovimentoFinanceiroService()

export default class MovimentoFinanceiroController {
    async getMovimentosFinanceiros(req, res) {
        try {
            const movimentosFinanceiros = await movimentoFinanceiroService.getMovimentosFinanceiros()
            res.json(movimentosFinanceiros);
        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async addMovimentoFinanceiro(req, res){
        try {
            const movimentoFinanceiro = await movimentoFinanceiroService.addMovimentoFinanceiro(req.body)
            res.json(movimentoFinanceiro);
        } catch(e){
            console.log(e)
            res.status(500).json(e)
        }
    }
}
