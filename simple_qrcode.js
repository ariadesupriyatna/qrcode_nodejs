var QRCode = require('qrcode')

QRCode.toString('Kamu Cantik!',{type:'terminal'}, function (err, url) {
  console.log(url)
})
