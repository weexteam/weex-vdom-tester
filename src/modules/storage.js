function setItem (instance, document, key, value, funcId) {
  instance.extension.storage = instance.extension.storage || {}
  instance.extension.storage[key] = value
  instance.$callback(funcId, { data: undefined, result: 'success' }, false)
}

function getItem (instance, document, key, funcId) {
  instance.extension.storage = instance.extension.storage || {}
  const value = instance.extension.storage[key]
  instance.$callback(funcId, { data: value, result: 'success' }, false)
}

function removeItem (instance, document, key, funcId) {
  instance.extension.storage = instance.extension.storage || {}
  delete instance.extension.storage[key]
  instance.$callback(funcId, { data: undefined, result: 'success' }, false)
}

function length (instance, document, funcId) {
  instance.extension.storage = instance.extension.storage || {}
  const length = Object.keys(instance.extension.storage).length
  instance.$callback(funcId, { data: length, result: 'success' }, false)
}

function getAllKeys (instance, document, funcId) {
  instance.extension.storage = instance.extension.storage || {}
  const keys = Object.keys(instance.extension.storage)
  instance.$callback(funcId, { data: keys, result: 'success' }, false)
}

exports.setItem = setItem
exports.getItem = getItem
exports.removeItem = removeItem
exports.length = length
exports.getAllKeys = getAllKeys
