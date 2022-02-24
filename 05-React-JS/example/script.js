const fs = require('fs')

fs.readFile('C:/SWP/swp1-2JG/4cWI/"05 React JS"/example/example.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})