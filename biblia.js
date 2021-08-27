const buscar = () => {
    const url = `https://www.abibliadigital.com.br/api/books`;
    fetch(url).then(res => res.json())
        .then(data => {
            for (datas of data) {

                document.getElementById("ler").innerHTML += `Livro: ${datas.name}<br> 
            Autor: ${datas.author}<br> Quant-Capítulo: ${datas.chapters}<br>
            Testamento: ${datas.testament}<br><br>`;
            }
        })
}
// função para ler novo testamento
const novoTestamento = () => {
    var capitulo = document.getElementById("capitulo").value;
    var livro = document.getElementById("livro").value;
    var versao = document.getElementById("versao").value;

    const url = `https://www.abibliadigital.com.br/api/verses/${versao}/${livro}/${capitulo}`;
    fetch(url).then(res => res.json())
        .then(data => {
            document.getElementById("lerNovo").innerHTML = `Livro: ${data.book.name}<br>
       Autor: ${data.book.author}<br> Versão: ${data.book.version}<br> Grupo: ${data.book.group}<br> Capítulo: ${data.chapter.number} <br>
       Quant-versículos: ${data.chapter.verses}<br><hr>`;

            document.getElementById("capituloTop").innerHTML = `${data.book.name} - Capítulo ${data.chapter.number} - ${data.book.version}`;

            for (let i = 0; i < data.verses.length; i++) {
                document.getElementById("ler1").innerHTML += `<br>${data.verses[i]['number']}  ${data.verses[i]['text']}<br>`;
            }
        }).catch(() => {
            $(function () {
                $("#lerNovo").empty();
                $("#capituloTop").empty();
            });
            document.getElementById("ler1").innerHTML = `404 Not Found.<br>`;
        });

    $(function () {
        $(".btn").click(function () {
            $("#ler1").empty();
        });
    });
}
// função para ler antigo testamento
const antigoTestamento = () => {
    var capituloAntigo = document.getElementById("capituloAntigo").value;
    var livroAntigo = document.getElementById("livroAntigo").value;
    var versaoAntigo = document.getElementById("versaoAntigo").value;

    const url = `https://www.abibliadigital.com.br/api/verses/${versaoAntigo}/${livroAntigo}/${capituloAntigo}`;
    fetch(url).then(res => res.json())
        .then(data => {

            document.getElementById("lerDescricao").innerHTML = `Livro: ${data.book.name}<br>
       Autor: ${data.book.author}<br> Grupo: ${data.book.group}<br> Capítulo: ${data.chapter.number} <br>
       Quant-versículos: ${data.chapter.verses}<br><hr>`;

            document.getElementById("antigoTop").innerHTML = `${data.book.name} - Capítulo ${data.chapter.number} - ${data.book.version}`;

            for (let i = 0; i < data.verses.length; i++) {
                document.getElementById("lerTxt").innerHTML += `<br>${data.verses[i]['number']}   ${data.verses[i]['text']}<br>`;

            }

        }).catch(() => {
            $(function () {
                $("#lerDescricao").empty();
                $("#antigoTop").empty();
            });
            document.getElementById("lerTxt").innerHTML = `404 Not Found.<br>`;
        });

    $(function () {
        $(".btn").click(function () {
            $("#lerTxt").empty();
        });
    });
}
// função para versículo único
const versiculoUnico = () => {
    let version = document.getElementById("version").value;
    let abbrev = document.getElementById("abbrev").value;
    let chapter = document.getElementById("chapter").value;
    let number = document.getElementById("number").value;

    const url = `https://www.abibliadigital.com.br/api/verses/${version}/${abbrev}/${chapter}/${number}`;
    fetch(url).then(res => res.json())
        .then(data => {

            document.getElementById("lerDescricaoVersiculo").innerHTML = `Livro: ${data.book.name}<br>
           Grupo: ${data.book.group}<br> Autor: ${data.book.author}<br> Versão: ${data.book.version}<br> Capítulo: ${data.chapter}<br>
           Versículo: ${data.number}`;

            document.getElementById("lerUmVersiculo").innerHTML = `${data.number}  ${data.text}`;

        }).catch(() => {
            $(function () {
                $("#lerDescricaoVersiculo").empty();
            });
            document.getElementById("lerUmVersiculo").innerHTML = `404 Not Found.`;
        });
}