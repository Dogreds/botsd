//const  token = "5061927601:AAGfFJ-zcqr4ZLHSwl3nymLVTkLRH6-qm4A"
const  token = "5061927601:AAGfFJ-zcqr4ZLHSwl3nymLVTkLRH6-qm4A"
const  _importbots = require("node-telegram-bot-api")
const _botstart = new _importbots(token, {polling:true})


// var _maps = new Set()
//
// _maps.add("смотровая")
// _maps.add("павленко")
// _maps.add("инициативная")
// _maps.add("шатурская")
// _maps.add("амбулаторная")
// _maps.add("городская")
// _maps.add("пушкинская")
// _maps.add("сиверса")
// _maps.add("российская")
// _maps.add("орская")
// _maps.add("менжинского")
// _maps.add("каяни")
// _maps.add("петрашевского")
// _maps.add("прогулочная")
// _maps.add("нижегородская")
// _maps.add("театральный")
// _maps.add("путевая")
// _maps.add("нансена")
// _maps.add("маркова")
// _maps.add("городская")
// _maps.add("семашко")
// _maps.add("кржижановского")

var _mapsd = new Map()
_mapsd.set("1", "./Приказ ответственных по ПБ 2021.pdf")
_mapsd.set("2", "./РСТ РЦС-1-785 от 02.11.2021 о передачи информации.docx")
_mapsd.set("3", "./Местная инструкция по ПБ 2021.pdf")
_mapsd.set("4", "./ПОТ при окраске(2) 849н 02.12.2020г..pdf")
_mapsd.set("5", "./Регламент действий руководителей и работников РВБ в условиях действия режима ПГ в связи с неблагоприятной эпидимиологической ситуацией.pdf")
_mapsd.set("6", "./Приказ ответственных по ЭБ 2021.pdf")
let summery = null
let gets = null




_botstart.setMyCommands([{command: "/start", description: "приветствие"}, //{command: "/info", description: "информация о боте"},
    //{command: "/contact", description: "список контактов для связи"},
    {command: "/file", description: "список файлов"},
    {command: "/getfile", description: "получение файла "} ])


_botstart.on("message",    async msg => {
    const text = msg.text
    const chatid = msg.chat.id
    const _input = msg.text
    const _names = msg.from.first_name
    let _info = "Для того чтобы начать поиск введи название улицы только без (!, ? и т.д)"
    let _contact = "Диспетчер РЦС-1: 2382293 \n Кабельный РЦС-1: 2382188 "
    var _massivs = ["1: файл 1", "2: файл 2"]
    let _massiv = {1:   "1: Приказ ответственных по ПБ 2021, \n2: РСТ РЦС-1-785 от 02.11.2021 о передачи информации \n "+
            "3: Местная инструкция по ПБ 2021.pdf, \n" +
            "4: ПОТ при окраске(2) 849н 02.12.2020г..pdf , \n" +
            "5: Регламент действий руководителей и работников РВБ в условиях действия режима ПГ в связи с неблагоприятной \nэпидимиологичской обстановкой.pdf , \n" +
            "6: Приказ ответственных по ЭБ 2021.pdf \n" +
            "Если хочешь выйгрузить файл используй комманду /getfile", 2:"фыв"}



   // if(text === "/start") { return  _botstart.sendMessage(msg.chat_id, "Здравствуйте", + _names +  "это информационный telegram бот для получения актуальной информации по технической документации РЦС-1. " +
   //    "Воспользуйтеьс коммандой /file ")}
    //for(gets in _mapsd) {summery = gets  + "со значением" + _mapsd[gets]}
    if(text === "/file") {return _botstart.sendMessage(chatid, _massiv["1"] )}
    //if (text === "/contact") {return  _botstart.sendMessage(chatid, _contact)}
   // if (text === "/info") {return  _botstart.sendDocument(chatid, "./Приказ ответственных по ПБ 2021.pdf")  }

    if (text === "/start"){

        return   _botstart.sendMessage(chatid, "Здравствуйте, " + _names + "  это информационный telegram бот для получения актуальной информации по технической документации РЦС-1." +
        "Воспользуйтесь коммандой /file")

    }
 else   if (_input === "/getfile") {
      return   _botstart.sendMessage(chatid, "Введи номер документа")

    }

    if(_input === "1" && _mapsd.has(_input)) { return    _botstart.sendDocument(chatid,"./Приказ ответственных по ПБ 2021.pdf" )}

    if(_input === "2" && _mapsd.has(_input)) {return  _botstart.sendDocument(chatid, "./РСТ РЦС-1-785 от 02.11.2021 о передачи информации.docx")}

    if(_input === "3" && _mapsd.has(_input)) {return _botstart.sendDocument(chatid, "./Местная инструкция по ПБ 2021.pdf")}

    if (_input === "4" && _mapsd.has(_input)) {return _botstart.sendDocument(chatid, "./ПОТ при окраске(2) 849н 02.12.2020г..pdf")}

    if (_input === "5" && _mapsd.has(_input)) {return _botstart.sendDocument(chatid, "./Регламент действий руководителей и работников РВБ в условиях действия режима ПГ в связи с неблагоприятной эпид.с.pdf")}
    //else  {return  _botstart.sendMessage(chatid, "Мы не смогли найти такой документ")}

    if (_input === "6" && _mapsd.has(_input)) {return _botstart.sendDocument(chatid, "./Приказ ответственных по ЭБ 2021.pdf")}

    else  {return  _botstart.sendMessage(chatid, "Мы не смогли найти документ по данному номеру")}

   // if (_input === "/twink") {
        //return  _botstart.sendMessage(chatid,"привет")

    //}


    //_botstart.sendMessage(chatid, "Ты написал мне " + text)
    //_botstart.sendMessage(chatid, "Hellow from " + msg.from.first_name)
    //if(text === "/start")   {  _botstart.sendMessage("Вы попали в главное меню")}
    //if(_maps.has(text.toLowerCase())) {await _botstart.sendMessage(chatid, "По данному адрессу у нас проходят кабельные коммуникации. Для согласования землянных работ свяжитесь по номерам: " + _contact)}
    //else if (text.toLowerCase() == "test1") {_botstart.sendMessage(chatid, "пиши сюда " + "twink:32")}
    //else  { await _botstart.sendMessage(chatid, "Похоже что по данному адресу у нас нет коммуникаций, но лучше проверьте правильнность ввода своего сообщения "  +   _input )}
    //if(text.toLowerCase() === "привет мир") {  _botstart.sendMessage(chatid, "пойдет")}
    //if(text === _botstart.setMyCommands(["/start"])) {_botstart.sendMessage(("пойдет"))}
})
// _botstart.on("message", async msg => {
//const _fisrst = msg.id
//const  _twink = msg.text
//if (_maps.has(_twink.toLowerCase())) { await _botstart.sendMessage("ок")}
//else  {await  _botstart.sendMessage("бывает")}


//})