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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUgzRkxKdlViZVUybk95Skszd1l6dy85STZQRThKYlJFSEtzaytqUHNVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHFMMUxrbS9vQ0FreXJXMHExRU9iUVdOM1VTeno4Zm9ReGZ1YmIvVDlrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRlp3SDR2Sm83cGV0UHBlR0pEdDVZMGZLWk1zL3Qvc1pabW1qa2RudFc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0cHZpbXlOWVpkVjUvdnorMjhudVBiZWFkQlo2bjh2dkx1ajdSWFhuQXlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFLNkFubllVL3Q3SGtiWVVXSnFNd2gvbUFXVSttNVFKUlBqcXZ4QUV2VTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRnaUtwUlZtNHFTRHlSMm4rcEZvSXhUNTk1VlVjRlREd000YmJoMnpSazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0x2TVQ5ejcwN2ZvaXVKa2FUaHZDVS9QR0crQkoyMDFDejBpVEdBTm1HYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW9jaWNNS0s4bmRSdWpNOEtKSzlpcE00cjN5SnpJTTBzQm92aGFsbVlrVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCamxOcVM1ZkpxRDEwMGJzOVF2azFnSDh6T3MzV2JKNG5mYlAzNmtGTkExSVJqNTl2VUtlUENIYTRRd1BnMmtkZUxLNXhKbHZJNTMrV0NBWWJCMGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJ0am5kdDZlQkFMOUE0SkZyK1llaVZNNGdDSk85Zjd6cmNPbXJRNTUzY04wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJabmt5SjRVa1RmS21DMlVDZldtQ1pRIiwicGhvbmVJZCI6ImZmOTIyMWI4LTNjZDItNGZmNS05NGIwLTJhYjY3YWFhZTM1ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBc05GWG5qdkxNOTVMbTNTM2xWZC8zZGNZWW89In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdOak10R2lKdmRnejBYZDBXK3Z6ZWZCTnF5ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00zbDRWUVFoYUNhd2dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlrN3A4Q0VaaEI2M2VOb1JjNkVFRW5rY1g5WmpqMHB5TkZMRnhoMFBSamc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZvcGdkWWtwbkRjeVZNYm85VnJJRDcza1dPL21ybXkybWh6bjlFbU1zanN0ckpjMlBaZlJCcDd3MitIbUFwQ2JNOXh2NFVoQnJWRnNNdXlHSWFMa0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZNVpTRmpneUh6NS9pM1hLbDM5dmJEaENXdGlNNGY3Z2RWVTNXN0pFZGpHaGpkTHF2ajlvdXROZ3pzVEcvTTdJRzI2SWNrZklPSW9ublZxOFlUV3ZnUT09In0sIm1lIjp7ImlkIjoiOTQ3MTYyMjg2ODU6NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg5MTY0MjA4OTU5NTA5OjVAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE2MjI4Njg1OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3BPNmZBaEdZUWV0M2phRVhPaEJCSjVIRi9XWTQ5S2NqUlN4Y1lkRDBZNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NDU0ODU3LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJsUSJ9",
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
