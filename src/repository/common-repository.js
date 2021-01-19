'use strict'

const dbOp = require('./db-operation')
const _ = require('lodash')

const getData = async (query, projection, collection, database) => {
  try {
    const DB = await global.db.connect(database)
    const model = await DB.model(collection)
    const response = await model.find(query, projection)
    return response 
  } catch (error) {
    throw error
  }
}

const updateData = async (query, data, collection, database) => {
  try {
    const DB = await global.db.connect(database)
    const model = await DB.model(collection)
    const response = await model.updateMany(query, dbOp.getUpdateJsonFormat(data), dbOp.getUpdatedJsonInResponse(true))
    return response
  } catch (error) {
    throw error
  }
}

const insertData = async (data, collection, database) => {
  try {
    const DB = await global.db.connect(database)
    const model = await DB.model(collection)
    const response = await model.insertMany(data)
    return response
  } catch (error) {
    throw error
  }
}

const deleteData = async (query, collection, database) => {
  try {
    const DB = await global.db.connect(database)
    const model = await DB.model(collection)
    const response = await model.remove(query).exec()
    return response
  } catch (error) {
    throw error
  }
}

const updateOne = async (query, data, collection, database) => {
  try {
    const DB = await global.db.connect(database)
    const model = await DB.model(collection)
    const response = await model.findOneAndUpdate(query, dbOp.getUpdateJsonFormat(data), dbOp.getUpdatedJsonInResponse(true))
    return response
  } catch (error) {
    throw error
  }
}

const getDataWithAggregate = async (query, collection, database) => {
  try {
    const DB = await global.db.connect(database)
    const model = await DB.model(collection)
    const response = await model.aggregate(query)
    return response
  } catch (error) {
    throw error
  }
}

module.exports = {
  getData,
  updateData,
  insertData,
  deleteData,
  updateOne,
  getDataWithAggregate
}