const  token = "5061927601:AAGfFJ-zcqr4ZLHSwl3nymLVTkLRH6-qm4A"
const  _importbots = require("node-telegram-bot-api")
const _botstart = new _importbots(token, {polling:true})


var _maps = new Set()

_maps.add("смотровая")
_maps.add("павленко")
_maps.add("инициативная")
_maps.add("шатурская")
_maps.add("амбулаторная")
_maps.add("городская")
_maps.add("пушкинская")
_maps.add("сиверса")
_maps.add("российская")
_maps.add("орская")
_maps.add("менжинского")
_maps.add("каяни")
_maps.add("петрашевского")
_maps.add("прогулочная")
_maps.add("нижегородская")
_maps.add("театральный")
_maps.add("путевая")
_maps.add("нансена")
_maps.add("маркова")
_maps.add("городская")
_maps.add("семашко")
_maps.add("кржижановского")


_botstart.setMyCommands([{command: "/start", description: "приветствие"}, {command: "/info", description: "информация о боте"},
    {command: "/contact", description: "список контактов для связи"} ])


_botstart.on("message",    async msg => {
    const text = msg.text
    const chatid = msg.chat.id
    const _input = msg.text
    const _names = msg.from.first_name
    let _info = "Для того чтобы начать поиск введи название улицы только без (!, ? и т.д)"
    let _contact = "Диспетчер РЦС-1: 2382293 \n Кабельный РЦС-1: 2382188 "

    if (text === "/contact") {return  _botstart.sendMessage(chatid, _contact)}
    if (text === "/info") {return  _botstart.sendMessage (chatid,  _info)  }

    if (_input === "/start"){

        return   _botstart.sendMessage(chatid, "Здравствуйте " + _names  +   " это телеграм бот для согласования земляных работ  РЦС -1," +  " укажите улицу где будут проводится работы")

    }

    if (_input === "/twink") {
        return  _botstart.sendMessage(chatid,"привет")

    }


    //_botstart.sendMessage(chatid, "Ты написал мне " + text)
    //_botstart.sendMessage(chatid, "Hellow from " + msg.from.first_name)
    //if(text === "/start")   {  _botstart.sendMessage("Вы попали в главное меню")}
    if(_maps.has(text.toLowerCase())) {await _botstart.sendMessage(chatid, "По данному адрессу у нас проходят кабельные коммуникации. Для согласования землянных работ свяжитесь по номерам: " + _contact)}
    //else if (text.toLowerCase() == "test1") {_botstart.sendMessage(chatid, "пиши сюда " + "twink:32")}
    else  { await _botstart.sendMessage(chatid, "Похоже что по данному адресу у нас нет коммуникаций, но лучше проверьте правильнность ввода своего сообщения "  +   _input )}
    //if(text.toLowerCase() === "привет мир") {  _botstart.sendMessage(chatid, "пойдет")}
    //if(text === _botstart.setMyCommands(["/start"])) {_botstart.sendMessage(("пойдет"))}
})
// _botstart.on("message", async msg => {
//const _fisrst = msg.id
//const  _twink = msg.text
//if (_maps.has(_twink.toLowerCase())) { await _botstart.sendMessage("ок")}
//else  {await  _botstart.sendMessage("бывает")}


//})