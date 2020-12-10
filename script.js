function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#image')

    var date = new Date()
    var WeekDay = date.getDay()

    switch(WeekDay)
    {
        case 0:
            msg.innerHTML = 'Domingo'
            break
        case 1:
            msg.innerHTML = 'Segunda-Feira'
            break
        case 2:
            msg.innerHTML = 'Terça-Feira'
            break
        case 3:
            msg.innerHTML = 'Quarta-Feira'
            break
        case 4:
            msg.innerHTML = 'Quinta-Feira'
            break
        case 5:
            msg.innerHTML = 'Sexta-feira'
            break
        case 6:
            msg.innerHTML = 'Sábado'
            break
    }
}