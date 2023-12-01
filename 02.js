const str = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
let value = 0
let res = []

str.split('').forEach(l => {
  if (l === '#') {
    value++
  } else if (l === '@') {
    value--
  } else if (l === '*') {
    value = value * value
  } else if (l === '&') {
    res.push(value)
  }
})

console.log(res.join(''))