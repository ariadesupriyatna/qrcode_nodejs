var QRCode = require('qrcode')


QRCode.toString('https://whyvpn.my.id', function (err, string) {
  if (err) throw err
  console.log(string)
})
