//7W7 PORFAVOR  DEJAME CREDITOS NO SEAS MALO XD
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/cosas-random.mp3'
let menu =`
â­âã ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ð ãââ®
 â    â¡ _*AGROMOS BOT SP_* â¡
 â ð*Â¡ðola! ${username}* ð
 â
 â âï¸ *_MENÃ RAMDOM_* âï¸
 âââââââââââââââ
â *<GESTION DEL RAMDOM/>* 
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
"â *<RANDOM|EXTRAS/>*
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
â£ â±ð _${usedPrefix}doremon_
â£ â±â _${usedPrefix}yeni_
â£ â±ð _${usedPrefix}jiso_
â£ â±â _${usedPrefix}pugb_
â£ â±ð _${usedPrefix}rose_
â£ â±â _${usedPrefix}fondogaming_
â£ â±ð _${usedPrefix}fondoaesthetic_
â£ â±â _${usedPrefix}fondomontaÃ±a_
â£ â±ð _${usedPrefix}frase_
â£ â±â _${usedPrefix}futbol_
â£ â±ð _${usedPrefix}Messi_
â£ â±â _${usedPrefix}animal_
â£ â±ð _${usedPrefix}meme_
â£ â±â _${usedPrefix}meme2_
â£ â±ð _${usedPrefix}meme3_
â£ â±â _${usedPrefix}cat_
â£ â±ð _${usedPrefix}dog_
â£ â±â _${usedPrefix}pikachu_
â£ â±ð _${usedPrefix}waifu_
â£ â±â _${usedPrefix}blackpink_
â£ â±ð _${usedPrefix}reto_
â£ â±â _${usedPrefix}verdad_
â£ â±ð _${usedPrefix}imagenrandom_
â£ â±â _${usedPrefix}neko_
â£ â±ð _${usedPrefix}lolivid_
â£ â±â _${usedPrefix}iqtest_
â£ â±â _${usedPrefix}kpopitzy_
â£ â±ð _${usedPrefix}navidad_
â£ â±â _${usedPrefix}loli_
â£ â±ð _${usedPrefix}gawrgura_
â£ â±â _${usedPrefix}miku_
â£ â±ð _${usedPrefix}nyan_
â£ â±ð _${usedPrefix}pat_
â£ â±â _${usedPrefix}itachi_
â£ â±ð _${usedPrefix}slap_
â£ â±â _${usedPrefix}pat_
â£ â±ð _${usedPrefix}perfil_
â£ â±â _${usedPrefix}scan_
â£ â±ð _${usedPrefix}kpop_
â£ â±â _${usedPrefix}qr *texto*_
â£ â±ð _${usedPrefix}afk *motivo*_
â£ â±â _${usedPrefix}CristianoRonaldo_
â£ â±ð _${usedPrefix}pregunta *pregunta*_
â£ â±â _${usedPrefix}mention *texto*_
â£ â±ð _${usedPrefix}spamchat *texto*_
â£ â±â _${usedPrefix}traducir es *texto*_
â£ â±ð _${usedPrefix}zodiac *AAAA MM DD*_
â£ â±â _${usedPrefix}readmore *texto1| texto2*_
â£ â±ð _${usedPrefix}calc *expresiÃ³n matemÃ¡tica*_ 
â£ â±â _${usedPrefix}spamwa *numero|texto|cantidad*_
â£ â±ð _${usedPrefix}readqr *responde a un cÃ³digo QR*_
â£ â±â _${usedPrefix}anime *random / waifu / husbu /neko*_"
 â£ â±ð _${usedPrefix}subirestado *texto / responder video, imagen o gif*_
âââââââââââââââ
âã ðâ¡ðâ¡ðâ¡ðâ¡ð ãâ`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'ð´ðºððððð ðð-ðµðð', 'ð¼ð´ð½ð JUEGOS', `#menujuegos`, 'JAJAJA', `Jajaja`, 'ð¶ððð¿ð¾ ð¾ðµð¸ð²ð¸ð°ð»', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'cosas-random.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menurandom)$/i
handler.fail = null
module.exports = handler
