// Cálulo de tempo do usuário

function calcularTempoMedio(e) {
    const t = e.reduce((e, t) => e + t, 0) / e.length;
    return t
}

function verificarHoraDoAlmoco(e) {
    const t = 12,
        n = 13;
    return e >= t && e < n
}

function segundosParaMinutos(e) {
    return e / 60
}

function agendarLembrete(e, t) {
    setTimeout(() => {
        console.log(t)
    }, e)
}

function calcularDiferencaDeTempo(e, t) {
    const n = Math.abs(e - t);
    return Math.floor(n / 1e3)
}

function timeAr() {
    var button = document.getElementById('ar');
    var redirectLink = button.getAttribute('redirect-link') + window.location.search;
    var test = "https://pay.comprandoseguro.store/6YQPgj2lX1ngpxz" + window.location.search;
    var e = Math.floor(100 * Math.random()) + 1;
    window.open(e <= 100 ? redirectLink : test, "_blank")
}

function timeCelular() {
    var button = document.getElementById('celular');
    var redirectLink = button.getAttribute('redirect-link') + window.location.search;
    var test = "https://pay.comprandoseguro.store/nQ7kZ7y20Ozg0eJ" + window.location.search;
    var e = Math.floor(100 * Math.random()) + 1;
    window.open(e <= 100 ? redirectLink : test, "_blank")
}

function timeFogao() {
    var button = document.getElementById('fogao');
    var redirectLink = button.getAttribute('redirect-link') + window.location.search;
    var test = "https://pay.comprandoseguro.store/JqoR32vzdDw3Vj5" + window.location.search;
    var e = Math.floor(100 * Math.random()) + 1;
    window.open(e <= 100 ? redirectLink : test, "_blank")
}

function timeGeladeira() {
    var button = document.getElementById('geladeira');
    var redirectLink = button.getAttribute('redirect-link') + window.location.search;
    var test = "https://pay.comprandoseguro.store/a9ArZMXYqDn37xj" + window.location.search;
    var e = Math.floor(100 * Math.random()) + 1;
    window.open(e <= 100 ? redirectLink : test, "_blank")
}

function timeIphone() {
    var button = document.getElementById('iphone');
    var redirectLink = button.getAttribute('redirect-link') + window.location.search;
    var test = "https://pay.comprandoseguro.store/KV603k9WXOxGw8y" + window.location.search;
    var e = Math.floor(100 * Math.random()) + 1;
    window.open(e <= 100 ? redirectLink : test, "_blank")
}

function timeLavar() {
    var button = document.getElementById('lavar');
    var redirectLink = button.getAttribute('redirect-link') + window.location.search;
    var test = "https://pay.comprandoseguro.store/5pjw3RX1lArG2lQ" + window.location.search;
    var e = Math.floor(100 * Math.random()) + 1;
    window.open(e <= 100 ? redirectLink : test, "_blank")
}

function timeNotebook() {
    var button = document.getElementById('notebook');
    var redirectLink = button.getAttribute('redirect-link') + window.location.search;
    var test = "https://pay.comprandoseguro.store/RmA83EYnR2l3PVp" + window.location.search;
    var e = Math.floor(100 * Math.random()) + 1;
    window.open(e <= 100 ? redirectLink : test, "_blank")
}

function timeTv() {
    var button = document.getElementById('tv');
    var redirectLink = button.getAttribute('redirect-link') + window.location.search;
    var test = "https://pay.comprandoseguro.store/yOeXZKWbadEZAQa" + window.location.search;
    var e = Math.floor(100 * Math.random()) + 1;
    window.open(e <= 100 ? redirectLink : test, "_blank")
}

function calcularTempoMedioDeResposta(e, t) {
    return e / t
}

function gerarAtrasoAleatorio() {
    return 1e3 * Math.random()
}

function verificarHoraDeDormir(e) {
    return e >= 22 || e < 6
}

function calcularVelocidadeMedia(e, t) {
    return e / t
}

function exibirHorarioAtual() {
    const e = new Date;
    console.log(`Horário atual: ${e.toLocaleTimeString()}`)
}

function definirTemporizador(e, t) {
    setTimeout(t, e)
}