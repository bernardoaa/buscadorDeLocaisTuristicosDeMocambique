
// Função que busca locais turísticos com base na província selecionada
function buscarLocais() {
    const provinciaSelecionada = document.getElementById("provincia").value;
    const listaLocais = document.getElementById("locais-lista");

    // Limpa a lista de locais antes de adicionar novos itens
    listaLocais.innerHTML = "";

    if (provinciaSelecionada) {
        const locais = locaisTuristicos[provinciaSelecionada];

        if (locais) {
            // Adiciona os locais na lista com descrições e links
            locais.forEach((local) => {
                const li = document.createElement("li");

                // Criar estrutura para o nome do local
                const nomeLocal = document.createElement("strong");
                nomeLocal.textContent = local.nome;

                // Criar estrutura para a descrição do local
                const descricaoLocal = document.createElement("p");
                descricaoLocal.textContent = local.descricao;

                // Criar o link para mais informações
                const linkLocal = document.createElement("a");
                linkLocal.textContent = "Mais informações";
                linkLocal.href = local.link;
                linkLocal.target = "_blank"; // Abre o link em uma nova aba

                // Adiciona os elementos no item da lista
                li.appendChild(nomeLocal);
                li.appendChild(descricaoLocal);
                li.appendChild(linkLocal);

                listaLocais.appendChild(li);
            });
        } else {
            listaLocais.innerHTML = "<li>Não há informações disponíveis para esta província.</li>";
        }
    }
}

