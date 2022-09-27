import { connect, Schema, model } from 'mongoose';
import dotenv from 'dotenv';

connect(`mongodb://localhost/${process.env.DB_NAME}`)

const dataSchema = new Schema({
  keyword: String,
  category: String,
  hint: String
});

const Datas = model('Datas', dataSchema);


module.exports = {

}


