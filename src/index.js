module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
  let strLength = str.length
  let resFlag = true

  while (resFlag && str.length > 0) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i][0] + bracketsConfig[i][1],'')
    }
    if (strLength === str.length) {
      resFlag = false
    } else {
      strLength = str.length
    }
  }
  return str.length === 0
}


