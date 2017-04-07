(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();
        
        bot.commands.cookieCommand.cookies =['quer se casar com você , aceita ? :ring: <3',
                    'deu-lhe um biscoito podre e sujo. Era o último do pacote. Que nojo!',
                    'deu-lhe um bolinho de açúcar... O quê? Sem estrelinhas e povilho? Eu não tocaria.',
                    'jogou um cookie na sua cara , eu batia!!!',
                    'deu-lhe um enorme biscoito. Quando o toca, ele se duplica num outro biscoito... estranho',
                    'deu-lhe um biscoito da sorte, tem escrito: "ta afim de relaxar?"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Cumprimente agora a pessoa que você ama"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Arrisque-se!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Saia desse computador!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Você está gordo(a), pare de comer cookies "',
                    'deu-lhe um biscoito da sorte, tem escrito: "aceita se casar comigo ?',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo"',
                    'deu-lhe um biscoito de ouro, mas não dá pra comer... Droga!',
                    'deu-lhe um biscoito de arco-íris feito com amor :heart:',
                    'deu-lhe um biscoito que foi esquecido na chuva... eu não comeria..',
                    'quer te mostrar o biscoitao ( ͡° ͜ʖ ͡°)',
                ];

        bot.loadChat();
    }

    
    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Electro Brasil Bot",
        language: "english",
        chatLink: "https://dl.dropboxusercontent.com/s/cs9981ixozmcslg/chattraduzido.json?dl=0",
        maximumAfk: 60,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 6,
        autodisable: false,
        commandCooldown: 3,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
                ["tema", "A música não se encaixa nos padrões da sala. "],
                ["op", "Essa música está na lista OP. "],
                ["historico", "A música ainda está no histórico. "],
                ["mix", "Você tocou um mix (muito longo) - não permitido. "],
                ["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
                ["nsfw", "A música que você tocou é NSFW (impróprio). "],
                ["indisponivel", "A música que você tocou está indisponível. "]
            ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 14,
        motd: "Curta nossa Página no Facebook  http://zip.net/bvtvMC, aproveite e faça sua inscrição em nosso canal YouTube: http://zip.net/bdtvhf",
        filterChat: false,
        etaRestriction: true,
        welcome: true,
        opLink: null,
        rulesLink: "http://zip.net/bnty51",
        themeLink: null,
        fbLink: "https://www.facebook.com/groups/1497216277163895/",
        youtubeLink: "http://zip.net/bdtvhf",
        website: "http://zip.net/bttzMG",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!"
    }));

    $.getScript('https://dl.dropboxusercontent.com/s/zjgpdesckyrzlps/bot2.json?dl=0', extend);
	$.getScript('https://dl.dropboxusercontent.com/s/lvw6wiby0rx4x87/msgexclusiva.json?dl=0');
	$.getScript('https://dl.dropboxusercontent.com/s/5gwuav1ys1ra2qt/ssed.json?dl=0');

}).call(this);
