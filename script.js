function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#image')
    var phara = window.document.querySelector('p#phara')

    var date = new Date()
    var WeekDay = date.getDay()

    switch(WeekDay)
    {
        case 0:
            msg.innerHTML = 'Domingo'
            img.src = 'images/sunday.png'
            phara.innerHTML = 'Domingo, para mim, é um dia de descanso, e até me sinto mais cansado, então nesse dia eu faço meus hobbies e consumo mídias de entretenimento.'
            break
        case 1:
            msg.innerHTML = 'Segunda-Feira'
            img.src = 'images/monday.png'
            phara.innerHTML = 'Segunda-feira é quando voltamos a trabalhar ou estudar, a semana de fato começa, é o dia que tenho mais vontade devido ao descanso do dia anterior, e o clima de segunda-feira.'
            break
        case 2:
            msg.innerHTML = 'Terça-Feira'
            img.src = 'images/tuesday.png'
            phara.innerHTML = 'Estava sem ideia, porém veio em minha mente que, quando mais novo, nas terças-feiras eu brincava bastante na escola.'
            break
        case 3:
            msg.innerHTML = 'Quarta-Feira'
            img.src = 'images/wednesday.png'
            phara.innerHTML = 'Eu escolhi esta imagem porque em alguns cinemas é comum em dias de quarta-feira o ingresso ser mais barato, então que tal ver um filme nesse dia?.'
            break
        case 4:
            msg.innerHTML = 'Quinta-Feira'
            img.src = 'images/thursday.png'
            phara.innerHTML = 'Para quinta-feira fiquei sem ideia, então usei essa imagem simples que achei no pexels de nick cottonbro.'
            break
        case 5:
            msg.innerHTML = 'Sexta-feira'
            img.src = 'images/friday.png'
            phara.innerHTML = 'Gostamos muito da sexta-feira, então utilizo esse dia para jogar até um pouco mais tarde e relaxar que a semana acabou.'
            break
        case 6:
            msg.innerHTML = 'Sábado'
            img.src = 'images/saturday.png'
            phara.innerHTML = 'E sempre tido uma ideia de que sábado é dia para viajar ou ir em algum com os amigos ou familiares, afinal é o fim da semana, tem que aproveitar.'
            break
        default:
            msg.innerHTML = '[ERRO] Verifique os dados de entrada'
            break
    }
}