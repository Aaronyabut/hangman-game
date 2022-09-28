import { connect, Schema, model } from 'mongoose';
require("dotenv").config()

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

export const postNewData = async(keyword:string, category:string, hint:string) => {
  try {
    // console.log('Post new data works')

    let newData = new Datas({
      keyword: keyword,
      category: category,
      hint: hint
    })

    // console.log('TEST POST REQ', newData)
    const postData = await newData.save()
  } catch(err) {
    console.log('Post new data', err)
  }
}


// create a get and post

