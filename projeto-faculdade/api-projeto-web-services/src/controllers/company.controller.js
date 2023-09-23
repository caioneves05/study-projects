import dotenv from 'dotenv'
import companyModel from '../models/company.model.js'

dotenv.config()


class CompanyController {

    static async getRegister(req, res) {
        try {
          const { mes } = req.body;
      
          if (!mes) {
            return res.status(400).json({ error: 'O campo "mes" é obrigatório no corpo da requisição' });
          }
      
          const data = await companyModel.findOne({ mes });
      
          if (!data) {
            return res.status(404).json({ error: 'Registro não encontrado' });
          }
      
          res.status(200).json({ data });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Ocorreu um erro interno no servidor' });
        }
      }

    static async createRegister(req, res) {
        const register = req.body

        try{
            await companyModel.create({
                mes: register.mes,
                receita: register.receita,
                custos: register.custos,
                despesas: register.despesas
            })
            res.status(201).send({message: 'created sucessfully'})
        } catch (error) {
            res.status(400).send({Error: `${error}`})
        }
    }

    static async updateRegister(req, res) {
        try {
          const mesParams = req.params.mes
          const register = req.body;
          const user = await companyModel.findOne({ mes: mesParams });
      
          if (!user) {
            return res.status(404).send({ message: 'Registro não encontrado.' });
          }
      
          await user.updateOne({
            mes: register.mes,
            receita: register.receita,
            custos: register.custos,
            despesas: register.despesas
          });
      
          res.status(201).send({ message: 'Usuário atualizado com sucesso.' });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Ocorreu um erro interno no servidor.' });
        }
      }

    static async deleteRegister(req, res) {
        try {
          const { mes } = req.body;
      
          if (!mes) {
            return res.status(400).json({ error: 'O campo "mes" é obrigatório no corpo da requisição' });
          }
      
          const result = await companyModel.deleteMany({ mes });
      
          if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Nenhum registro foi excluído' });
          }
      
          res.status(200).json({ message: 'Registro(s) excluído(s) com sucesso' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Ocorreu um erro interno no servidor' });
        }
      }

}

export default CompanyController