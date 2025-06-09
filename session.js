//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0c2ZW94RDBQT25oL3hPU1FrdTVobGVJZGE5NHcvMWNDYXNGQnBld2wyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3JuUEo5VUNZWXVxU1lBN0kvdUozeUFCbWR1aUFIMlBXb1E5aE80aDZHOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSkl5dUx0YVNNQkl1T0dKKy9POUUvUjZQM25IdGhCZmtmWnh3SG0zTUVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrOGM0aUc1dW9GQzlIRHNUT1FsdTcyazlBbGtHWTlSSE1xWStPZ1NzR1hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNPVllFMHI1UklWNU5Nb2IvTmh0MWk5K2RPT0lPTW1OQWwyRkRQdmhlbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFJSUFnckhjcUo5LzBWRTJqNXFraG41RWxpS3g0cHBLTE54Q2RyL0FsVWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JLYzdpZHphbkMrZFpSTU5ISWxJVW0xeHJHcUU3elB4Vi9WVU91VEFGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibllHcnVKUzgrOHUvRTJPak5oYjJNbmJldW5NYXh5Y3ZjdnduQUUzemRRaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMK2hQbXVYQzJhQUxCN1hnSFFGeFNOZWRZbnF0dE54WHZmSmxGTkhBQ2wzZFkyTm5KaXVWL25tdXFNSWVrc0JGZ3hGS2NPK05waDQ3WE5pNXRuQkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJ4YlhYNkJ2b09SRjE0MjNmcHZmc3ozVXdJK1RLNGNyS21PcUs1ci80c1FBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzNTE0OTAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZFNEEwMTgxREVENENFNTA5NDBFNjA4NjExRjBENUUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDk0OTEyMjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkF3S1l2ai1oUXRDSVhUQWViUkFoYXciLCJwaG9uZUlkIjoiMmRjNmFhZGYtY2NiMi00OGUyLWI2ZWMtNzFkNTVlMGU0ZDc0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE3MkpuamZ3S0dkOW5OMTZIdUJ6a0VVcjlRVT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1nTnRtamxWY21wTXhUeWwzTUpheDZnNklNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTi9DektZRkVKRzhuTUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUU1aYWE3eFp2Tzc4S3JnLzlVWnM5VjVZbjkzejNXMHRleTJEbEs2dnNERT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSnlEWFoxbUZTU2RHMlQrNjZheEhvVUVyVnJxV1hnaFJCZDA2bjNKdUtMY1NRNUdaL1lEOE40T2xhOGFoK1g3RDN0TFNyUURhMWNESjNrNmE1K3ovQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImFjSU1zUVVEUFowMnI3NXNBQ2llY3BkMEl4WEdrdlY0WGlrQi93RWprYmR6cjRlRUlTa1p4RmxGR0gvY3pyNndqeEttcFZDd3Z2ZU5YY0hBdzcyOERBPT0ifSwibWUiOnsiaWQiOiI5NDcyMzUxNDkwMDoyNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE3NzgxMjM1MDc0MjYzMToyNEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjM1MTQ5MDA6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVURHV211OFdienUvQ3E0UC9WR2JQVmVXSi9kODkxdExYc3RnNVN1cjdBeCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NDkxMjE5LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0716228685",
  PASSWORD: 
    process.env.PASSWORD || "Chathura12345",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94721732206", "94742514900"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
