const fs = require('fs')
const sizeOf = require('image-size')

fs.readFile('C:/SWP/swp1-2JG/4cWI/05-React-JS/example/example.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

const dimensions = sizeOf('C:/SWP/swp1-2JG/4cWI/05-React-JS/example/funny-cats.jpg')
console.log(dimensions.width, dimensions.height)