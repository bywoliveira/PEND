// //"https://date.nager.at/api/v3/PublicHolidays/2026/BR" __API


const botao = document.querySelector("#buscarFeriados");
const resultado = document.querySelector("#resultado");
const idFeriado = document.querySelector("#idFeriado");

botao.addEventListener("click", async () => {

    const ano = idFeriado.value;

    if (ano === "") {
        resultado.innerHTML = "Digite um ano";
        return;
    }

    try {
        const resposta = await fetch(
            `https://date.nager.at/api/v3/PublicHolidays/${ano}/BR`
        );

        if (!resposta.ok) {
            throw new Error("Ano inválido ou sem dados");
        }

        const dados = await resposta.json();

        let html = '';

        dados.forEach(feriado => {
            html += `
                <p>
                  <strong>${feriado.name}</strong><br>
                  Data: ${feriado.date}<br>
                  Feriado local: ${feriado.localName}<br>
                  Tipo: ${feriado.types ? feriado.types.join(', ') : ''}
                </p>
                <hr>
            `;
        });

        resultado.innerHTML = html;

    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar feriados.";
        console.log(erro);
    }
});