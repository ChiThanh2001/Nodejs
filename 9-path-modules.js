const path = require('path')

//lấy ra dấu phân cách 
console.log(path.sep)

//lấy ra đường dẫn
const filePath = path.join('/content', 'subfolder' , 'test.txt')
console.log(filePath)

//lấy ra thư mục cuối cùng trỏ đến
const base = path.basename(filePath)
console.log(base)

//đường dẫn tuyệt đối
const absolute = path.resolve(__dirname , 'content' , 'subfolder' , 'test.txt')
console.log(absolute)