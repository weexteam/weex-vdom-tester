function scrollToElement (instance, document, ref, options) {
  console.log(`[scrollToElement]: ${instance.id}, ${ref}, ${JSON.stringify(options)}`)
}

function createBody (instance, document, element) {
  document.createBody(element)
}

function addElement (instance, document, parentRef, element, index) {
  document.addElement(parentRef, element, index)
}

function removeElement (instance, document, ref) {
  document.removeElement(ref)
}

function moveElement (instance, document, ref, parentRef, index) {
  document.moveElement(ref, parentRef, index)
}

function addEvent (instance, document, ref, type) {
  document.addEvent(ref, type)
}

function removeEvent (instance, document, ref, type) {
  document.removeEvent(ref, type)
}

function updateAttrs (instance, document, ref, attr) {
  document.updateAttrs(ref, attr)
}

function updateStyle (instance, document, ref, style) {
  document.updateStyle(ref, style)
}

function createFinish (instance, document) {
  console.log(`[createFinish]: ${instance.id}`)
}

function refreshFinish (instance, document) {
  console.log(`[refreshFinish]: ${instance.id}`)
}

function updateFinish (instance, document) {
  console.log(`[updateFinish]: ${instance.id}`)
}

exports.scrollToElement = scrollToElement
exports.createBody = createBody
exports.addElement = addElement
exports.removeElement = removeElement
exports.moveElement = moveElement
exports.addEvent = addEvent
exports.removeEvent = removeEvent
exports.updateAttrs = updateAttrs
exports.updateStyle = updateStyle
exports.createFinish = createFinish
exports.refreshFinish = refreshFinish
exports.updateFinish = updateFinish
