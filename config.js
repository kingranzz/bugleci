const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "puki :"
global.ownerName = "siwa :"
global.ownerBot = "6282393734303", "6289513665728"
global.ownerNumber = ["6282393734303", "6289513665728", "6282320704514", "6287811026129", "6285347323656", "62895806422691", "6289681926236", "6281356172466"] 

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
