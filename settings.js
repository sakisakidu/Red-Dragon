//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is SAKI BOT🔥
My Creator is SAKI BOY😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+94705000112'] //Owner number in aive msg
global.premium = ['+94705000112'] //Owner Number info
global.ownernomer = '+94705000112' //Owner Number <<<

global.ownername = '😎SAKIBOY' //Owner Name
global.botname = ' ☬SAKI༒BOT࿐' //Bot Name

global.button = '☰ TIKTOK ☰' //Costomize A Button Name In Alive Message
global.btnurl = 'https://vm.tiktok.com/ZSddMePQN/' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬SAKI༒BOT࿐' //Bot Pacage Name
global.author = '😎SAKI BOY' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_Saki.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://vm.tiktok.com/ZSddMePQN/' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'එය භාවිතා කළ හැක්කේ පරිපාලකයින්ට පමණි!😉',
    botAdmin: 'මාව Admin කරන්න😥',
    owner: 'මෙය භාවිතා කළ හැක්කේ හිමිකරුට පමණි!😉',
    group: 'එය භාවිතා කල හැක්කේ ගෲප් වල පමනයි!',
    private: 'එය භාවිතා කල හැක්කේ ඉන්බොස් වල පමනයි!',
    bot: 'මෙම විශේෂාංගය Bot සඳහා පමණි😝',
    wait: '👉රැදී සිටින්න👈',
    error: 'ජෝශයක්🤔!',
    endLimit: 'ඔබගේ දෛනික සීමාව කල් ඉකුත් වී ඇත, සීමාව සෑම පැය 12 කට වරක් නැවත සකසනු ලැබේ',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
