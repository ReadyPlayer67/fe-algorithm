const fs = require('fs')
const path = require('path')

let count = 0
let totalCount = 0
const dirs = fs.readdirSync(__dirname)
dirs.forEach(dir => {
  const stat = fs.lstatSync(path.resolve(__dirname,dir))
  if(stat.isDirectory() && !dir.startsWith('.')){
    const files = fs.readdirSync(path.resolve(__dirname,dir))
    const length = files.filter(file => file.startsWith('_')).length
    totalCount += files.length
    count += length
  }
})
console.log(`总共 ${totalCount} 题，已重复刷 ${count} 题`)
