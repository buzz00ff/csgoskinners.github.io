!function(j) {
    j(document).ready(function() {
        function c(e) {
            return document.getElementById(e)
        }
        function m(e) {
            return document.createElement(e)
        }
        function u(e) {
            return document.createAttribute(e)
        }
        var p, h, g, t, n, i, s, o, r, d, l, v, f, y = c("pb"), k = 0, x = 0, b = 0, w = "", e = document.cookie, a = "en";
        0 <= e.indexOf("lang") && (a = e.match(/lang=\w\w/gi)[0].match(/=\w\w/gi)[0].match(/\w\w/gi)[0]),
        "en" == a ? (console.log("Lang select: English"),
        p = " deposited ",
        h = "Tickets: from ",
        g = " to ",
        t = "Trade link save!",
        n = "Error",
        i = "Trade link incorrect!",
        s = "Game",
        o = "Hash game",
        r = "round number",
        d = "Win",
        l = "Chance",
        v = "win ticket",
        f = "count tickets") : "tr" == a ? (console.log("Lang select: Turkey"),
        p = " Yatırılan ",
        h = "Biletler: yer ",
        g = " ve ",
        t = "İşlem bağlantısı kaydedildi!",
        n = "Hata",
        i = "Ticaret bağlantısı yanlış!",
        s = "Oyun",
        o = "Tur kazancı",
        r = "tur numarası",
        d = "Kazanmak",
        l = "Şans",
        v = "kazanan bilet",
        f = "sayısı bilet") : "pl" == a ? (console.log("Lang select: Poland"),
        p = " włożył ",
        h = "Bilety: od ",
        g = " do ",
        t = "Link zapisany!",
        n = "Błąd",
        i = "Nieprawidłowy link!",
        s = "Gra",
        o = "Hash rundy",
        r = "liczba rundy",
        d = "Wygrana",
        l = "Szansa",
        v = "zwycięski bilet",
        f = "liczba biletów") : "de" == a ? (console.log("Lang select: Germany"),
        p = " gesetzt ",
        h = "Tickets: von ",
        g = " bis ",
        t = "Link erfolgreich gespeichert!",
        n = "Fehler",
        i = "Trade-Link ist nicht korrekt!",
        s = "Spiel",
        o = "Runden-Hash",
        r = "rundennummer",
        d = "Gewinn",
        l = "Chance",
        v = "gewinner-ticket",
        f = "anzahl der tickets") : "ro" == a ? (console.log("Lang select: Romania"),
        p = " depus ",
        h = "Tichete: de la ",
        g = " până la ",
        t = "Salvare link comercial",
        n = "Eroare",
        i = "Link-ul de comerț incorect!",
        s = "Joc",
        o = "Cod hash rundă",
        r = "număr rundă",
        d = "Premiu",
        l = "Şansă",
        v = "bilet câştigător",
        f = "numărul de bilete") : "pt" == a ? (console.log("Lang select: Portugal"),
        p = " Depositado ",
        h = "Ingressos: de ",
        g = " para ",
        t = "Trade link save!",
        n = "Bug",
        i = "Trade link incorrect!",
        s = "Jogos",
        o = "Hash redondo",
        r = "número da rodada",
        d = "Ganhar",
        l = "Chance",
        v = "bilhete premiado",
        f = "número de bilhetes") : "br" == a ? (console.log("Lang select: Brazil"),
        p = " Depositado ",
        h = "Ingressos: de ",
        g = " para ",
        t = "Trade link save!",
        n = "Bug",
        i = "Trade link incorrect!",
        s = "Jogos",
        o = "Hash redondo",
        r = "número da rodada",
        d = "Ganhar",
        l = "Chance",
        v = "bilhete premiado",
        f = "número de bilhetes") : "es" == a ? (console.log("Lang select: Spanish"),
        p = " depositado ",
        h = "Billetes: de ",
        g = " a ",
        t = "Link de negociação salvo",
        n = "Erro",
        i = "Referência comercial não funcionando",
        s = "Juego",
        o = "Hash de la ronda",
        r = "número de ronda",
        d = "Ganar",
        l = "Probabilidad",
        v = "billete ganador",
        f = "cantidad de entradas") : "se" == a ? (console.log("Lang select: Sweden"),
        p = " sattes in ",
        h = "Biljetter: från ",
        g = " till ",
        t = "Handelslänken är sparad",
        n = "Fel",
        i = "Handelslänk är inkorrekt!",
        s = "Spel",
        o = "Hash spel",
        r = "rundans nummer",
        d = "Pris",
        l = "Chans",
        v = "vinnande biljett",
        f = "antal biljetter") : "fr" == a ? (console.log("Lang select: France"),
        p = " dépôt ",
        h = "Billets: de ",
        g = " jusqu'à ",
        t = "Lien enregistré!",
        n = "Erreur",
        i = "Entrer un lien commercial valide et réessayer!",
        s = "Jeu",
        o = "Round de hachage",
        r = "round terminè",
        d = "Gains",
        l = "Chance",
        v = "billet gagnant",
        f = "nombre de billets") : "hu" == a ? (console.log("Lang select: Hungary"),
        p = " letét ",
        h = "Jegyek: tól ",
        g = " - ",
        t = "Kereskedelmi hivatkozás mentve!",
        n = "Hiba",
        i = "Adjon meg egy érvényes linket, és próbálja újra",
        s = "Játék",
        o = "Hash játékok",
        r = "játékok száma",
        d = "Összeg",
        l = "Esély",
        v = "győztes jegyet",
        f = "jegyek száma") : "sk" == a ? (console.log("Lang select: Slovakia"),
        p = " záloha ",
        h = "Vstupenky: od ",
        g = " až do ",
        t = "Obchodná referencia bola uložená!",
        n = "Chyba",
        i = "Zadajte platný odkaz a skúste to znova",
        s = "Hra",
        o = "Hash hry",
        r = "číslo zaokrúhlenia",
        d = "Súčet",
        l = "Chance",
        v = "víťazný lístok",
        f = "počet vstupeniek") : "cs" == a ? (console.log("Lang select: Czech"),
        p = " vklad ",
        h = "Vstupenky: od ",
        g = " až do ",
        t = "Obchodní reference uloženo!",
        n = "Chyba",
        i = "Zadejte platný odkaz a zkuste to znovu",
        s = "Hra",
        o = "Hashová hra",
        r = "kolo z číslo",
        d = "Částku",
        l = "Chance",
        v = "výherní lístek",
        f = "počet vstupenek") : "ru" == a && (console.log("Lang select: Russian"),
        p = " вложил ",
        h = "Билеты: от ",
        g = " до ",
        t = "Трейд ссылка сохранена!",
        n = "Ошибка",
        i = "Введите нормальную ссылку и попробуйте ещё раз",
        s = "Игра",
        o = "Хэш игры",
        r = "число игры",
        d = "Выигрыш",
        l = "Шанс",
        v = "победный билет",
        f = "кол-во билетов");
        var C = null
          , z = io("csgovito.com:2096");
        function T() {
            return 0 < j("#steamid").length ? j("#steamid").html() : 0
        }
        z.once("connect", function() {
            z.emit("0"),
            z.emit("steamstatserver"),
            0 < j("#top-page").length && z.emit("top"),
            0 < j("#history-page").length && z.emit("2"),
            0 < j("#main-page").length && z.emit("trade-link", {
                steamId: T()
            }),
            0 < j("#settings-page").length && z.emit("trade-link", {
                steamId: T()
            }),
            z.on("online", function(e) {
                e.inf_online && c("inf_online") && (c("inf_online").innerHTML = e.inf_online + 40)
            }),
            z.on("informers", function(e) {
                var t;
                e.inf1 && c("inf1") && (c("inf1").innerHTML = e.inf1 + 10),
                e.inf2 && c("inf2") && (c("inf2").innerHTML = e.inf2.toFixed() + " " + w),
                e.inf3 && c("inf3") && (c("inf3").innerHTML = e.inf3),
                e.inf4 && c("inf4") && (c("inf4").innerHTML = e.inf4.toFixed() + " " + w),
                e.inf4 && j(".jackpotNum").length && (t = (t = parseFloat(e.inf4) + 250).toFixed(2),
                j(".jackpotNum").text(t + "")),
                void 0 !== e.inf5 && 0 < j(".inf5").length && (t = e.inf5,
                "0" == e.inf5 ? t = "отсутствует" : t += w,
                j(".inf5").text(t)),
                e.inf6 && j(".inf6") && j(".inf6").text(e.inf6),
                e.inf7 && j("#inf7").length && j("#inf7").text(e.inf7),
                e.inf8 && j("#inf8").length && j("#inf8").text(e.inf8),
                e.inf9 && j("#inf9").length && j("#inf9").text(e.inf9),
                e.inf10 && (e.inf10 = e.inf10),
                e.inf11 && j("#inf11").length && j("#inf11").text(e.inf11.toFixed(2) + " " + w)
            }),
            z.on("top", function(e) {
                L(e.list)
            }),
            z.on("last-winner", function(e) {
                void 0 !== e.name && c("winner-name") && c("winner-avatar") && c("winner-money") && (c("winner-name").innerHTML = e.name,
                c("winner-avatar").innerHTML = '<img src="' + e.ava + '" alt="" width="75px">',
                function(e) {
                    e = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                    e && decodeURIComponent(e[1])
                }("lang"),
                e.money = e.money,
                c("winner-money").innerHTML = e.money.toFixed(2) + w,
                c("winner-chance").innerHTML = e.chance + "%")
            }),
            z.on("history", function(e) {
                N(e.history, e.historyOrder, e.commission)
            }),
            z.on("timer", function(e) {
                "0:0" == e.timer && j(".gametime.gamepause").removeClass("hidden");
                var t = e.timer.substring(0, e.timer.indexOf(":"))
                  , e = e.timer.substring(e.timer.indexOf(":") + 1);
                1 == t.length && (t = "0" + t),
                1 == e.length && (e = "0" + e),
                c("timer") && j("#timer").text(t + ":" + e)
            }),
            z.on("success_trade", function(e) {
                e.steamid == T() && pay_skins_google(e.steamid, e.summ, "Skins Pay", e.transaction)
            }),
            z.on("accoffer", function(e) {
                e.steamid == T() && (j(".acceptoffer").removeClass("hidden"),
                setTimeout(function() {
                    j(".acceptoffer").addClass("hidden")
                }, 5e3))
            }),
            z.on("errlink", function(e) {
                e.steamid == T() && (j(".errnolink").removeClass("hidden"),
                setTimeout(function() {
                    j(".errnolink").addClass("hidden")
                }, 18e3))
            }),
            z.on("errmaxitems", function(e) {
                e.steamid == T() && (j(".errmaxitems").removeClass("hidden"),
                setTimeout(function() {
                    j(".errmaxitems").addClass("hidden")
                }, 16e3))
            }),
            z.on("holdedTrade", function(e) {
                e.steamid == T() && (j(".holdtrade").removeClass("hidden"),
                setTimeout(function() {
                    j(".holdtrade").addClass("hidden")
                }, 18e3))
            }),
            z.on("errNocsgo", function(e) {
                e.steamid == T() && (j(".errnocsgo").removeClass("hidden"),
                setTimeout(function() {
                    j(".errnocsgo").addClass("hidden")
                }, 16e3))
            }),
            z.on("errBlackList", function(e) {
                e.steamid == T() && (j(".errblacklist").removeClass("hidden"),
                setTimeout(function() {
                    j(".errblacklist").addClass("hidden")
                }, 16e3))
            }),
            z.on("errMinDeposit", function(e) {
                e.steamid == T() && (j(".errmindeposit").removeClass("hidden"),
                setTimeout(function() {
                    j(".errmindeposit").addClass("hidden")
                }, 16e3))
            }),
            z.on("inv_private", function(e) {
                e.steamid == T() && (j(".invprivate").removeClass("hidden"),
                setTimeout(function() {
                    j(".invprivate").addClass("hidden")
                }, 2e4))
            }),
            z.on("link_novalid", function(e) {
                e.steamid == T() && (j(".linknovalid").removeClass("hidden"),
                setTimeout(function() {
                    j(".linknovalid").addClass("hidden")
                }, 25e3))
            });
            z.on("0", function(e) {
                var t, n, i, a, s, o, r, d, l = c("game");
                null != l && (j(".players-percent").removeClass("hidden"),
                j("#start-game-advert").hide(),
                j("#in-game-advert").show(),
                a = parseInt(j("#items-count-temp").text()),
                a++,
                j("#items-count-temp").text(a),
                e.steamid == T() && (j("#chance-temp").text(e.chance.toFixed(0)),
                j("#player-items-count").text(e.itemcounter),
                j("#balance_user").text(Math.round(100 * e.money))),
                t = m("tr"),
                (d = document.createAttribute("class")).value = "item-bg",
                (s = u("style")).value = "color:" + e.color + "; background-color:" + e.background_color + ";",
                t.setAttributeNode(d),
                t.setAttributeNode(s),
                o = m("td"),
                (d = document.createAttribute("class")).value = "col-ava",
                o.setAttributeNode(d),
                n = m("img"),
                (i = u("src")).value = e.ava,
                n.setAttributeNode(i),
                o.appendChild(n),
                t.appendChild(o),
                r = m("td"),
                (d = document.createAttribute("class")).value = "col-text",
                r.setAttributeNode(d),
                a = m("p"),
                s = b + 1,
                o = b + Math.ceil(1e3 * e.cost),
                b = o,
                e.money = e.money.toFixed(2),
                e.cost = e.cost.toFixed(2),
                a.innerHTML = "<font style='color:#000'>" + e.user + "</font>" + p + "<br> <b>" + e.itemname + "</b> (~" + e.cost + w + ") <br />" + h + "<b>#" + s + "</b>" + g + "<b>#" + o + "</b>",
                r.appendChild(a),
                t.appendChild(r),
                r = m("td"),
                (d = document.createAttribute("class")).value = "col-img",
                r.setAttributeNode(d),
                n = m("img"),
                (i = u("src")).value = "https://steamcommunity-a.akamaihd.net/economy/image/" + e.image + "/96fx96f",
                n.setAttributeNode(i),
                r.appendChild(n),
                t.appendChild(r),
                r = m("td"),
                (d = document.createAttribute("class")).value = "col-add",
                r.setAttributeNode(d),
                t.appendChild(r),
                l.insertBefore(t, l.firstChild),
                100 < ++k && (k = 100),
                y.style.width = k + "%",
                console.log(y, k),
                l = T(),
                x += e.jackpot.toFixed(2),
                e.steamid == l && e.money,
                "on" == _ && j("#new-item-sound")[0].play())
            }),
            z.on("2", function(e) {
                j("#jackpot-temp").text(e.jackpot.toFixed(2) + " " + w),
                j(".game-num").text(15e4 + e.gamenumber);
                T();
                x += e.jackpot,
                winmm = e.gamenumber * (x / 100) / x,
                j(".num-game").text("???"),
                j("#roundHash").text(e.hash)
            }),
            z.on("ticketNumber", function(e) {
                console.log(e.ticketNumber),
                C = e.ticketNumber
            });
            z.on("end_game_client", function(e) {
                if (0 != e[3].timer_client) {
                    var t, n, i = e[3].timer_client - 1 + "";
                    1 == i.length && (i = "0" + i),
                    j(".timer-v2").text(i),
                    i = e[3].timer_client,
                    t = i - 2,
                    n = setInterval(function() {
                        var e = t + "";
                        t <= 0 && clearInterval(n),
                        1 == e.length && (e = "0" + e),
                        j(".timer-v2").text(e),
                        t--
                    }, 1e3),
                    6 < e[3].timer_client && (j("#winner-end").text(" ??? "),
                    j("#roundNum").text(" ??? ")),
                    j("#winner-item").text(" ??? "),
                    j(".num-gameb").text("???"),
                    "on" == _ && j("#start-roule-sound")[0].play(),
                    j("#items-count-temp").text("0"),
                    j(".gameactive").addClass("hidden"),
                    j(".winitem").removeClass("hidden"),
                    j(".gameend").removeClass("hidden"),
                    j(".gameendd").removeClass("hidden"),
                    j(".details-wrap").addClass("hidden"),
                    j(".errorsteam").addClass("hidden"),
                    j("#chance-temp").text("0"),
                    j("#player-items-count").text("0"),
                    j(".winner-cost-value").text(e[0].endgame[0].money),
                    j(".winner-cost-valuta").text(" "),
                    $users = j(".players-tape").find(".players-percent-block");
                    var s = [];
                    if (j.each($users, function(e, t) {
                        for (var n = j(t).find("img").attr("src"), t = j(t).find(".players-percent-text").text(), i = parseFloat(t.substr(0, t.indexOf("%"))), a = 0; a <= i; a++)
                            s.push(n)
                    }),
                    (s = function(e) {
                        for (var t, n, i = e.length; i; t = Math.floor(Math.random() * i),
                        n = e[--i],
                        e[i] = e[t],
                        e[t] = n)
                            ;
                        return e
                    }(s)).splice(100, s.length - 100),
                    s.length < 100)
                        for (var a = 100 - s.length, o = 0; o < a; o++)
                            s.push(s[0]);
                    s[95] = e[0].endgame[0].ava,
                    j.each(s, function(e, t) {
                        j(".all-players-list").append('<img src="' + t + '" />')
                    }),
                    j(".gametime.gamepause").addClass("hidden"),
                    j(".all-players-list").css("-moz-transform", "translate3d(-7605px, 0, 0)"),
                    j(".all-players-list").css("-ms-transform", "translate3d(-7605px, 0, 0)"),
                    j(".all-players-list").css("-o-transform", "translate3d(-7605px, 0, 0)"),
                    j(".all-players-list").css("-webkit-transform", "translate3d(-7605px, 0, 0)"),
                    j(".all-players-list").css("transform", "translate3d(-7605px, 0, 0)"),
                    0 < e[3].timer_client && (j("#roundNum").text(e[0].endgame[0].roundnum),
                    j("#winner-end").text(e[0].endgame[0].name),
                    null == e[2].ticketNumber ? j("#winner-ticket").text("???") : j("#winner-ticket").text(e[2].ticketNumber),
                    b = 0,
                    j("#start-game-advert").show(),
                    j("#in-game-advert").hide())
                }
            }),
            z.on("end-game", function(e) {
                var t, n;
                t = 0,
                t = 18,
                n = setInterval(function() {
                    var e = t + "";
                    t <= 0 && clearInterval(n),
                    1 == e.length && (e = "0" + e),
                    j(".timer-v2").text(e),
                    t--
                }, 1e3),
                j("#winner-end").text(" ??? "),
                j("#roundNum").text(" ??? "),
                j("#winner-item").text(" ??? "),
                j(".num-gameb").text("???"),
                "on" == _ && j("#start-roule-sound")[0].play(),
                j("#items-count-temp").text("0"),
                j(".gameactive").addClass("hidden"),
                j(".winitem").removeClass("hidden"),
                j(".gameend").removeClass("hidden"),
                j(".gameendd").removeClass("hidden"),
                j(".details-wrap").addClass("hidden"),
                j(".errorsteam").addClass("hidden"),
                j("#chance-temp").text("0"),
                j("#player-items-count").text("0"),
                j(".winner-cost-value").text(e.money),
                j(".winner-cost-valuta").text(" "),
                $users = j(".players-tape").find(".players-percent-block");
                var s = [];
                if (j.each($users, function(e, t) {
                    for (var n = j(t).find("img").attr("src"), t = j(t).find(".players-percent-text").text(), i = parseFloat(t.substr(0, t.indexOf("%"))), a = 0; a <= i; a++)
                        s.push(n)
                }),
                (s = function(e) {
                    for (var t, n, i = e.length; i; t = Math.floor(Math.random() * i),
                    n = e[--i],
                    e[i] = e[t],
                    e[t] = n)
                        ;
                    return e
                }(s)).splice(100, s.length - 100),
                s.length < 100)
                    for (var i = 100 - s.length, a = 0; a < i; a++)
                        s.push(s[0]);
                s[95] = e.ava,
                j.each(s, function(e, t) {
                    j(".all-players-list").append('<img src="' + t + '" />')
                }),
                setTimeout(function() {
                    j(".gametime.gamepause").addClass("hidden"),
                    j(".all-players-list").css("-moz-transform", "translate3d(-7605px, 0, 0)"),
                    j(".all-players-list").css("-ms-transform", "translate3d(-7605px, 0, 0)"),
                    j(".all-players-list").css("-o-transform", "translate3d(-7605px, 0, 0)"),
                    j(".all-players-list").css("-webkit-transform", "translate3d(-7605px, 0, 0)"),
                    j(".all-players-list").css("transform", "translate3d(-7605px, 0, 0)"),
                    setTimeout(function() {
                        j("#roundNum").text(e.roundnum),
                        j("#winner-end").text(e.name),
                        null == C && (C = "???"),
                        j("#winner-ticket").text(C),
                        j("#winner-item").text(e.item),
                        b = 0,
                        j("#start-game-advert").show(),
                        j("#in-game-advert").hide()
                    }, 13e3)
                }, 1e3)
            }),
            z.on("end-game-empty", function(e) {
                j("#items-count-temp").text("0"),
                j("#chance-temp").text("0"),
                j("#balance_user").text(0),
                j("#player-items-count").text("0")
            }),
            z.on("startsite", function(e) {
                j(".errorsteam").addClass("hidden")
            }),
            z.on("stopsite", function(e) {
                j(".errorsteam").removeClass("hidden")
            }),
            z.on("start-game", function(e) {
                j(".gametime.gamepause").addClass("hidden"),
                "on" == _ && j("#start-game-sound")[0].play(),
                money = k = 0,
                b = x = 0,
                y.setAttribute("style", "width: 0%;"),
                j("#winner-end").text(" ??? "),
                j("#winner-ticket").text("???"),
                j("#items-count-temp").text("0"),
                j(".gameactive").removeClass("hidden"),
                j(".winner-cost-value").text(""),
                j(".winner-cost-valuta").text(" "),
                j(".gameend").addClass("hidden"),
                j(".gameendd").addClass("hidden"),
                j(".details-wrap").removeClass("hidden"),
                j(".winitem").addClass("hidden"),
                j(".all-players-list").empty(),
                j(".all-players-list").css("-moz-transform", "translate3d(458px, 0, 0)"),
                j(".all-players-list").css("-ms-transform", "translate3d(458px, 0, 0)"),
                j(".all-players-list").css("-o-transform", "translate3d(458px, 0, 0)"),
                j(".all-players-list").css("-webkit-transform", "translate3d(458px, 0, 0)"),
                j(".all-players-list").css("transform", "translate3d(458px, 0, 0)"),
                j("#game").empty(),
                j(".players-tape").empty(),
                j(".players-percent").addClass("hidden"),
                j("#progbarin").css("width", 0),
                j("#player-items-count").text(0),
                j("#balance_user").text(0),
                j("#chance-temp").text(0),
                j("#gamestart-end").removeClass("hidden"),
                j("#gamestart-start").addClass("hidden"),
                j("#timer").text("03:00")
            }),
            z.on("trade-link", function(e) {
                0 == e.list.length ? j(".token-block.promo").removeClass("hidden") : (j(".token-block.promo").addClass("hidden"),
                0 < j("#main-page").length && j(".tradeoffer-link").val(e.list[0].tradelink),
                0 < j("#settings-page").length && j('input[rel="get-trade-link"]').val(e.list[0].tradelink))
            }),
            z.on("playersUnique", function(i) {
                var a = j(".players-tape");
                a.empty(),
                j.each(i.order, function(e, t) {
                    var n = '<div class="players-percent-block">\t\t\t\t\t\t\t\t<img src="' + i.list[t.steamid].ava + '" alt="avatar">\t\t\t\t\t\t\t\t<div class="players-percent-text">' + i.list[t.steamid].chance.toFixed(2) + "%</div>";
                    T() === t.steamid && (j("#chance-temp").text(i.list[t.steamid].chance.toFixed(0)),
                    j("#player-items-count").text(i.list[t.steamid].itemcounter),
                    j("#balance_user").text(Math.round(100 * i.list[t.steamid].money))),
                    a.append(n)
                }),
                0 < i.order.length && a.parent().removeClass("hidden")
            }),
            z.on("goodoffer", function(e) {
                e.stid == T() && noty({
                    text: "<div><div><strong>" + t + "</strong></div></div>",
                    layout: "topRight",
                    type: "success",
                    theme: "relax",
                    timeout: 8e3,
                    closeWith: ["click"],
                    animation: {
                        open: "animated bounceInRight",
                        close: "animated bounceOutRight"
                    }
                })
            }),
            z.on("badoffer", function(e) {
                e.stid == T() && noty({
                    text: "<div><div><strong>" + n + "</strong><br>" + i + "</div></div>",
                    layout: "topRight",
                    type: "error",
                    theme: "relax",
                    timeout: 8e3,
                    closeWith: ["click"],
                    animation: {
                        open: "animated bounceInRight",
                        close: "animated bounceOutRight"
                    }
                })
            })
        });
        var L = function(e) {
            var t = e.length;
            j("#count-top").text(t);
            var n = j("#top-tbody")
              , i = 0
              , a = 1;
            j("#raiting-players").text(e.length),
            j.each(e, function(e, t) {
                3 < ++i && (a++,
                i = 0);
                t = '<tr>                    <td class="col-place">' + (e + 1) + '</td>                    <td class="col-image"><img src="' + t.winnerimg + '" alt="image"></td>                    <td class="col-rank"><img src="pict/rank/' + a + '.png" alt="image"></td>                    <td class="col-nick">' + t.winnername + '</td>                    <td class="col-wincount">' + t.count + '</td>                    <td class="col-prize">' + t.total.toFixed(2) + w + "</td>            </tr>";
                n.append(t)
            })
        };
        function H(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }
        var N = function(i, e, t) {
            var a = j(".history-wrap");
            j.each(e, function(e, t) {
                var t = i[t]
                  , n = "";
                j.each(t.items, function(e, t) {
                    n += '<li>\t\t\t\t\t\t\t\t<a class="history-item-prize" data-image="https://steamcommunity-a.akamaihd.net/economy/image/' + t.image + '/85fx70f" data-user="' + t.ava + '" data-title="' + t.itemname + '" data-price="~ ' + t.cost + '" data-color="#' + t.background_color + '">\t\t\t\t\t\t\t\t\t<img src="https://steamcommunity-a.akamaihd.net/economy/image/' + t.image + '/85fx70f" alt="image">\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t</li>'
                }),
                t = null == t.countBillet || null == t.realWinner || null == t.countBillet && null == t.realWinner ? '<div class="history-item"><div class="history-item-top"><div class="history-item-top-right"><div>' + s + " #" + (t.game + 15e4) + '</div><div style="font-size: 13px;">' + o + ': <span style="color: #d86e1e;">' + t.hash + '</span></div><div style="font-size: 13px;"><span style="color: #d86e1e;">' + t.roundnum + "</span> (" + r + ')</div><div class="date"></div></div><div class="history-item-top-left"><div class="history-item-image"><img src="' + t.winnerimg + '" alt="image"></div><div class="history-item-desc"><div class="history-item-title">' + H(t.winnername) + '</div><ul class="history-item-desc-list"><li><div class="title">' + d + ':</div><div class="value">~' + t.winnermoney + '.</div></li><li><div class="title">' + l + ':</div><div class="value">' + t.winnerchance + '%</div></li></ul></div></div></div><div class="history-item-bottom"><div class="history-item-prizes"><ul class="history-item-prizes-list">' + n + "</ul></div></div></div>" : '<div class="history-item"><div class="history-item-top"><div class="history-item-top-right"><div>' + s + " #" + (t.game + 15e4) + '</div><div style="font-size: 14px;">' + o + ': <span style="color: #d86e1e;">' + t.hash + '</span></div><div style="font-size: 14px;"><span style="color: #d86e1e;">' + t.roundnum + "</span> (" + r + ') × <span style="color: #d86e1e;">' + Math.round(100 * t.countBillet) / 100 + "</span> (" + f + ')</div><div style="font-size: 14px;"> = <span style="color: #d86e1e;">' + t.realWinner + "</span> (" + v + ')</div><div class="date"></div></div><div class="history-item-top-left"><div class="history-item-image"><img src="' + t.winnerimg + '" alt="image"></div><div class="history-item-desc"><div class="history-item-title" >' + H(t.winnername) + '</div><ul class="history-item-desc-list"><li><div class="title">' + d + ':</div><div class="value">~' + t.winnermoney + '.</div></li><li><div class="title">' + l + ':</div><div class="value">' + t.winnerchance + '%</div></li></ul></div></div></div><div class="history-item-bottom"><div class="history-item-prizes"><ul class="history-item-prizes-list">' + n + "</ul></div></div></div>",
                a.append(t)
            }),
            j(".history-item-prize").hover(function() {
                var e = j(this)
                  , t = e.attr("data-image")
                  , n = e.attr("data-title")
                  , i = e.attr("data-price")
                  , a = e.attr("data-color")
                  , s = e.attr("data-user");
                j("body").append('<div class="history-item-prize-drop">            <div class="history-item-prize-drop-top">\t\t\t<div style="float: right;padding: 7px;">\t\t\t<img src="' + s + '" alt="image" style="width: 90px;height: 90px;">\t\t\t</div>            <div class="history-item-prize-drop-left" style="background: ' + a + '">            <div class="history-item-prize-drop-image">            <img src="' + t + '" alt="image" />            </div>            </div>            <div class="history-item-prize-drop-top-inner">            <div class="history-item-prize-drop-title">' + n + '</div>            <div class="history-item-prize-drop-price">' + i + " " + w + "</div>            </div>            </div>            </div>"),
                j(".history-item-prize-drop").fadeIn(200),
                j(".history-item-prize-drop").position({
                    of: e,
                    my: "center bottom-10",
                    at: "center top",
                    collision: "none none"
                })
            }, function() {
                j(".history-item-prize-drop").remove()
            })
        }
          , _ = j.cookie("sound");
        "on" == _ ? (j(".sound-link-off").addClass("hidden"),
        j(".sound-link-on").removeClass("hidden")) : (j(".sound-link-on").addClass("hidden"),
        j(".sound-link-off").removeClass("hidden")),
        j(document).on("click", ".sound-link-on", function(e) {
            e.preventDefault(),
            j(this).addClass("hidden"),
            j(".sound-link-off").removeClass("hidden"),
            _ = "off",
            j.cookie("sound", "off", {
                expires: 365
            })
        }),
        j(document).on("click", ".sound-link-off", function(e) {
            e.preventDefault(),
            j(this).addClass("hidden"),
            j(".sound-link-on").removeClass("hidden"),
            _ = "on",
            j.cookie("sound", "on", {
                expires: 365
            })
        }),
        j(document).on("click", ".save-link", function() {
            var e = j('input[rel="get-trade-link"]').val();
            e.indexOf("https://steamcommunity.com/tradeoffer/new/?partner=") < 0 ? noty({
                text: "<div><div><strong>" + n + "</strong><br>" + i + "</div></div>",
                layout: "topRight",
                type: "error",
                theme: "relax",
                timeout: 8e3,
                closeWith: ["click"],
                animation: {
                    open: "animated bounceInRight",
                    close: "animated bounceOutRight"
                }
            }) : (z.emit("1", {
                type: 1,
                steamId: T(),
                token: 0 < j("#steamtoken").length ? j("#steamtoken").html() : 0,
                link: e
            }),
            j(".token-block.promo").addClass("hidden"))
        })
    })
}(jQuery),
function(a) {
    "use strict";
    function i(e) {
        a(e).on("click.bs.dropdown", this.toggle)
    }
    var s = '[data-toggle="dropdown"]';
    function o(e) {
        var t = e.attr("data-target");
        return (t = (t = t || (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, "")) && a(t)) && t.length ? t : e.parent()
    }
    function r(i) {
        i && 3 === i.which || (a(".dropdown-backdrop").remove(),
        a(s).each(function() {
            var e = a(this)
              , t = o(e)
              , n = {
                relatedTarget: this
            };
            t.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && a.contains(t[0], i.target) || (t.trigger(i = a.Event("hide.bs.dropdown", n)),
            i.isDefaultPrevented() || (e.attr("aria-expanded", "false"),
            t.removeClass("open").trigger("hidden.bs.dropdown", n))))
        }))
    }
    i.VERSION = "3.3.5",
    i.prototype.toggle = function(e) {
        var t = a(this);
        if (!t.is(".disabled, :disabled")) {
            var n = o(t)
              , i = n.hasClass("open");
            if (r(),
            !i) {
                if ("ontouchstart"in document.documentElement && !n.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", r),
                i = {
                    relatedTarget: this
                },
                n.trigger(e = a.Event("show.bs.dropdown", i)),
                e.isDefaultPrevented())
                    return;
                t.trigger("focus").attr("aria-expanded", "true"),
                n.toggleClass("open").trigger("shown.bs.dropdown", i)
            }
            return !1
        }
    }
    ,
    i.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var t = a(this);
            if (e.preventDefault(),
            e.stopPropagation(),
            !t.is(".disabled, :disabled")) {
                var n = o(t)
                  , i = n.hasClass("open");
                if (!i && 27 != e.which || i && 27 == e.which)
                    return 27 == e.which && n.find(s).trigger("focus"),
                    t.trigger("click");
                (t = n.find(".dropdown-menu li:not(.disabled):visible a")).length && (n = t.index(e.target),
                38 == e.which && 0 < n && n--,
                40 == e.which && n < t.length - 1 && n++,
                ~n || (n = 0),
                t.eq(n).trigger("focus"))
            }
        }
    }
    ;
    var e = a.fn.dropdown;
    a.fn.dropdown = function(n) {
        return this.each(function() {
            var e = a(this)
              , t = e.data("bs.dropdown");
            t || e.data("bs.dropdown", t = new i(this)),
            "string" == typeof n && t[n].call(e)
        })
    }
    ,
    a.fn.dropdown.Constructor = i,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = e,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, i.prototype.toggle).on("keydown.bs.dropdown.data-api", s, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery);
