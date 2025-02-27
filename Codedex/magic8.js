// Magic 8 Ball

const numeroQualquer = Math.floor(Math.random() * 9) + 1;

if (numeroQualquer == 0) {
    console.log('Sim, com certeza!');
} else if (numeroQualquer == 1) {
    console.log('Decididamente, sim!');
} else if (numeroQualquer == 2) {
    console.log('Sem dúvida!');
} else if (numeroQualquer == 3) {
    console.log('Pergunte mais tarde.');
} else if (numeroQualquer == 4) {
    console.log('Melhor não responder agora.');
} else if (numeroQualquer == 5) {
    console.log('Fontes dizem que não.');
} else if (numeroQualquer == 6) {
    console.log('Muito duvidoso.')
} else {
    console.log('Indisponível, tente novamente.');
}
