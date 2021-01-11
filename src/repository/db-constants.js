module.exports = {
  FIELD_PROJECTION: '$project',
  FIELD_MATCH: '$match',
  FIELD_LOOKUP: '$lookup',
  FIELD_UNWIND: '$unwind',
  FIELD_PUSH: '$push',
  FIELD_ROOT: '$$ROOT',
  FIELD_SUM: '$sum',
  FIELD_FROM: 'from',
  FIELD_GROUP: '$group',
  FIELD_ORDERED: 'ordered',
  FIELD_NEW: 'new',
  FIELD_N: 'n',
  FIELD_MULTI: 'multi',
  FIELD_NMODIFIED: 'nModified',
  FIELD_FOREIGN_FIELD: 'foreignField',
  FIELD_LOCAL_FIELD: 'localField',
  FIELD_AS: 'as',
  FIELD_PATH: 'path',
  FIELD_PRESERVE_NULL_AND_EMPTY_ARRAYS: 'preserveNullAndEmptyArrays',
  FIELD_CASE_INSENSITIVE: 'i',
  FIELD_OPTIONS: '$options',

  OP_EQUAL: '$eq',
  OP_NOT_EQUAL: '$ne',
  OP_GTE: '$gte',
  OP_LTE: '$lte',
  OP_GT: '$gt',
  OP_AND: '$and',
  OP_IN: '$in',
  OP_SET: '$set',
  OP_OR: '$or',
  OP_ELEM_MATCH: '$elemMatch',
  OP_REGEX: '$regex',
  OP_NIN: '$nin',
  OP_SORT: '$sort',
  OP_SKIP: '$skip',
  OP_LIMIT: '$limit',
  FIELD_INLINE: 'inline',
  OP_MR_SORT: 'sort',
  OP_MR_LIMIT: 'limit',
  FIELD_QUERY: 'query',
  FIELD_REDUCE: 'reduce',
  FIELD_MAP: 'map',
  FIELD_OUT: 'out',
  FIELD_SCOPE: 'scope',
  OP_EXISTS: '$exists',
  OP_ADDTOSET: '$addToSet',
  OP_PULL: '$pull',

  COMMON_CREATED_BY: 'created_by',
  COMMON_UPDATED_BY: 'updated_by',
  COMMON_CREATED_ON: 'created_on',
  COMMON_UPDATED_ON: 'updated_on',
  PARAM_ATTACHMENTS: 'attachments',
  COMMON_IS_DELETED: 'is_deleted',
  VALUE_DEFAULT_IS_DELETED: 'false',
  ENUM_DEFAULT_IS_DELETED: false,
  FIELD__ID: '_id',
  FIELD_OBJECTTYPE: 'objectType',
  VALUE_PROJECTION: 'projection',
  PARAM_REQUEST_PATH: 'request_path',
  PARAM_FIELDS: 'fields'
}
