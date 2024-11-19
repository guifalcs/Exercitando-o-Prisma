//Imports
import CategoriaService from "../services/categoriaService.js";
const service = new CategoriaService();

//Export do controlador
export default class CategoriaController{
     async getCategorias(req, res){
        try {
            const categorias = await service.getCategorias();
            res.json(categorias)
        } catch(e) {
            res.json(e)
        }
    }

    async addCategoria(req, res){
        try {
            const novaCategoria = await service.addCategorias(req.body)
            res.json(novaCategoria)
        } catch(e){
            console.error(e)
            res.json(e)
        }
    }

    async deleteCategorias(req, res){
        try {
            const categoriaDeletada = await service.deleteCategorias(req.body)
            res.json(categoriaDeletada)
        } catch(e){
            console.error(e)
            res.json(e)
        }
    }
}
