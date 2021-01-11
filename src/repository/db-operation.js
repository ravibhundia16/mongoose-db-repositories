'use strict'

const constants = require('./db-constants')

const getQuery = (fieldName, operation, value) => {
  let query = {}
  query[fieldName] = {}
  query[fieldName][operation] = value
  return query
}

const getMatchedResult = (query) => {
  let queryToBeExecuted = {}
  queryToBeExecuted[constants.FIELD_MATCH] = query
  return queryToBeExecuted
}

const getProjectedField = (projectedField) => {
  let projection = {}
  projection[constants.FIELD_PROJECTION] = projectedField
  return projection
}

const getQueryArrayForOperation = (operation, query) => {
  let operatedQuery = {}
  operatedQuery[operation] = query
  return operatedQuery
}

const getLookup = (from, localField, foreignField, as) => {
  let json = {}
  json[constants.FIELD_LOOKUP] = {}
  json[constants.FIELD_LOOKUP][constants.FIELD_FROM] = from
  json[constants.FIELD_LOOKUP][constants.FIELD_LOCAL_FIELD] = localField
  json[constants.FIELD_LOOKUP][constants.FIELD_FOREIGN_FIELD] = foreignField
  json[constants.FIELD_LOOKUP][constants.FIELD_AS] = as
  return json
}

const getUnwindedResponse = (unwindObject) => {
  let json = {}
  json[constants.FIELD_UNWIND] = unwindObject
  return json
}

const getGroupObject = (groupObject) => {
  let json = {}
  json[constants.FIELD_GROUP] = groupObject
  return json
}

const getOrderedJson = (value) => {
  let json = {}
  json[constants.FIELD_ORDERED] = value
  return json
}

const getUpdatedJsonInResponse = (value) => {
  let json = {}
  json[constants.FIELD_NEW] = value
  return json
}

const getUpdatedJsonInResponseWithProjection = (status, projectionFieldArray) => {
  let json = {}
  json[constants.FIELD_NEW] = status
  json[constants.VALUE_PROJECTION] = projectionFieldArray
  return json
}

const getUpdateJsonFormat = (updateJson) => {
  let json = {}
  json[constants.OP_SET] = updateJson
  return json
}

const updateAllValues = (value) => {
  let json = {}
  json[constants.FIELD_MULTI] = value
  return json
}

const getQueryJsonForElementMatch = (parameter, elemMatchValue) => {
  let query = {}
  query[parameter] = {}
  query[parameter][constants.OP_ELEM_MATCH] = elemMatchValue
  return query
}

const getQueryJsonForRegexOp = (value, caseSensitive) => {
  let query = {}
  query = {}
  query[constants.OP_REGEX] = value
  if (caseSensitive) {
    query[constants.FIELD_OPTIONS] = constants.FIELD_CASE_INSENSITIVE
  }
  return query
}

const getCommonProjection = () => {
  let projection = {}
  projection[constants.COMMON_CREATED_BY] = false
  projection[constants.COMMON_UPDATED_BY] = false
  projection[constants.COMMON_CREATED_ON] = false
  projection[constants.COMMON_UPDATED_ON] = false
  projection[constants.FIELD__ID] = false
  projection[constants.FIELD_OBJECTTYPE] = false
  return projection
}

const getSortJson = (json) => {
  let sortJson = {}
  sortJson[constants.OP_SORT] = json
  return sortJson
}

const getSkipJson = (skipValue) => {
  let skipJson = {}
  skipJson[constants.OP_SKIP] = skipValue
  return skipJson
}

const getLimitJson = (limit) => {
  let limitJson = {}
  limitJson[constants.OP_LIMIT] = limit
  return limitJson
}

const getMapReduceOutputJson = () => {
  let outputJson = {}
  outputJson[constants.FIELD_INLINE] = 1
  return outputJson
}

const getMapReduceJson = (query, regexMapfunction, reduceFunction, outputJson, extraParams) => {
  let mapReduceJson = {}
  mapReduceJson[constants.FIELD_QUERY] = query
  mapReduceJson[constants.FIELD_OUT] = outputJson
  mapReduceJson[constants.FIELD_MAP] = regexMapfunction
  mapReduceJson[constants.FIELD_REDUCE] = reduceFunction
  if (extraParams !== undefined) {
    mapReduceJson = mergeJsons(mapReduceJson, extraParams)
  }
  return mapReduceJson
}

const mergeJsons = (a, b) => {
  if (a && b) {
    for (var key in b) {
      a[key] = b[key]
    }
  }
  return a
}

const getUpdatePushJson = (updateJson) => {
  let pushJson = {}
  pushJson[constants.FIELD_PUSH] = updateJson
  return pushJson
}

const getFinalQueryJson = (query) => {
  const isDeletedQuery = find(query, constants.COMMON_IS_DELETED)
  if (isDeletedQuery && isDeletedQuery.length === 0) {
    const isDeleteQueryJson = {}
    isDeleteQueryJson[constants.COMMON_IS_DELETED] = constants.VALUE_DEFAULT_IS_DELETED
    const queryJson = {}
    queryJson[constants.OP_AND] = [query]
    queryJson[constants.OP_AND].push(isDeleteQueryJson)
    return queryJson
  } else {
    return query
  }
}

const getUpdateOneQuery = (query, updateJson, upsert) => {
  const updationQueryJson = {}
  updationQueryJson.filter = query
  updationQueryJson.update = getUpdateJsonFormat(updateJson)
  updationQueryJson.upsert = upsert
  return updationQueryJson
}

const getUpdateOneQueryv2 = (query, updateJson, upsert) => {
  const updationQueryJson = {}
  updationQueryJson.filter = query
  updationQueryJson.update = updateJson
  updationQueryJson.upsert = upsert
  return updationQueryJson
}

const getInsertOneQuery = (data) => {
  const insertOneJson = {}
  insertOneJson.document = data
  return insertOneJson
}

const getAddToSetQuery = (field, arr) => {
  const json = {}
  const values = convertIntoArray(arr)
  const fieldJson = {}
  fieldJson[field] = values
  json[constants.OP_ADDTOSET] = fieldJson
  return json
}

const getPullQuery = (updateJson) => {
  const json = {}
  json[constants.OP_PULL] = updateJson
  return json
}

module.exports = {
  getQuery,
  getGroupObject,
  getMatchedResult,
  getProjectedField,
  getQueryArrayForOperation,
  getLookup,
  getUnwindedResponse,
  getOrderedJson,
  getUpdatedJsonInResponse,
  getUpdateJsonFormat,
  updateAllValues,
  getQueryJsonForElementMatch,
  getQueryJsonForRegexOp,
  getCommonProjection,
  getSortJson,
  getSkipJson,
  getLimitJson,
  getMapReduceOutputJson,
  getMapReduceJson,
  getUpdatePushJson,
  getUpdatedJsonInResponseWithProjection,
  getFinalQueryJson,
  getUpdateOneQuery,
  getInsertOneQuery,
  getAddToSetQuery,
  getUpdateOneQueryv2,
  getPullQuery
}
