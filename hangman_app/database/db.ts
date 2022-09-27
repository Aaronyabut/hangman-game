import { connect, Schema, model } from 'mongoose';
import dotenv from 'dotenv';

connect(`mongodb://localhost/${process.env.DB_NAME}`)

const dataSchema = new Schema({
  keyword: String,
  category: String,
  hint: String
});

const Datas = model('Datas', dataSchema);


export const getAllData = async() => {
  // console.log('INSIDE DB')
  try {
    const gameData = await Datas.find().exec()
    // console.log('Get all data works', gameData)
    return gameData;
  } catch (err) {
    console.log('Get all data', err)
  }
}

export const postNewData = async(data:any) => {
  try {
    console.log('Post new data works')
  } catch(err) {
    console.log('Post new data', err)
  }
}


// create a get and post

