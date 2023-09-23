import mongoose from 'mongoose'

const CompanySchema = new mongoose.Schema(
    {
        mes: {type: String, required: true},
        receita: {type: String, required: true},
        custos: {type: String, required: true},
        despesas: {type: String, required: true},
    },
    {
        versionKey: false
    }
)

const companyModel = mongoose.model('Finanças', CompanySchema)

export default companyModel