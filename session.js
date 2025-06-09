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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlEUmVKVnVacEQrT09Zd0tlUmllbGp1NkdzRFVTeU1xcWN6eVBGNmJVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGFQQWNQUmJVeE9jNUdxNlVYWWlZeVFQNWhva0FJSnhQb0tWbERIUWtWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Ty81UUJZTGpHalJLVzdFWlRUNXNRd0UvYnYwQjhtc2ZrNHFaSGdiQVZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCd0ZRdUQ5U2JuRmcwRll0aUkxNmZJYWZtMGdiU09GWklTNFQ3UU1BR0ZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRCL2FDaTFWTHgzUjVFZ3VmeVlhWTVaMC9hUEJlcno4eEFFQ2I0MHRubE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMZFRrTWJxZXAyVjNOSHV2M0g2c2NWZ2ZzUEtpODlaRkRaUjN0MzRhbWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0R5QUVhYVZDanlySEZqb3ppb1QyU2hZUEp1VU9VTEdGYWtNeDIwWU5GRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXRiZW9iVlVOUk1BYlJpNlBpY2l5TG1Oa3p6Uk5aTnZsYjUvbEFxNjJFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBSSk1DOEtQUjd2Y01XemNOVDlWNWZsQ0dia2VaQ21HMmV1WGl6R3NrNFgzalVCNkJSNmYyQnFhbmRqMWx3RGRBZk1DRHhhL2k2b2FCSjhLa1ZhYUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6IitqVTlNblFHMDhVcVVja3VOK3JLbjdKSFRSVW03RkpGdFZMTkw4MTBpaDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imp2bTIxZ0hUVFRDSGJSVGlhb0xIcUEiLCJwaG9uZUlkIjoiOTk0OGRkYWMtZDNkOS00OTA0LTg5MDItNmQ1YTAwNmI0NGZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9JUXlFY0ZrUmF2UHc1S1l3eFVEMUV0Rmt5UT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BrMHQycFZHdnFEbEt2VXgwamYvcGZPTEZJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXpsNFZRUW45K1p3Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieWs3cDhDRVpoQjYzZU5vUmM2RUVFbmtjWDlaamowcHlORkxGeGgwUFJqZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWW9ZNXl3MXpac3R6Q05OMkEvajQwM1BmZkRNbE01R21GbFhCUmFMNDBBSlY0WllPYlp4RTJLcGZjejVZN3pWeVh3Qi9kNm1iZ2ZvbEFTOXI1eXpLRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkN1K1U0QUpIeTRadlBRaWNrR2Qyc0dmTVZpS0doUXU4Y1hWS1JsWlF3cXk0ZUx6cDJLUDRodzhrQ1lSYkRmSzBWU2RGeEp4TDBpclVoMkRPK2ZGZ0FBPT0ifSwibWUiOnsiaWQiOiI5NDcxNjIyODY4NTo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiODkxNjQyMDg5NTk1MDk6NEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTYyMjg2ODU6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjcE82ZkFoR1lRZXQzamFFWE9oQkJKNUhGL1dZNDlLY2pSU3hjWWREMFk0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk0NDY1NjEsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmxOIn0=d",
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
