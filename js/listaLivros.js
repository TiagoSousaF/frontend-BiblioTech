async function listarLivros() {
    try {
        const respostaServidor = await fetch("http://localhost:3333/lista/livros", {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        const response = await respostaServidor.json();
        criarTabelaLivros(response);

        if(!respostaServidor.ok) {
            throw new  Error("Erro a receber os dados para o servidor. Contate o administrador do sistema");
        }

    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor.${error}`)
    } 
}

async function criarTabelaLivros(livros) {
    const tabela = document.querySelector('tbody');

    // Cria as linhas da tabela com os dados do array
    livros.forEach(livro => {
        const linhas = document.createElement('tr');

        // Cria cada célula com os dados do carro
        const celulaID = document.createElement('td');
        celulaID.textContent = livro.idLivro;
        linhas.appendChild(celulaID);

        const celulaTitulo = document.createElement('td');
        celulaTitulo.textContent = livro.titulo;
        linhas.appendChild(celulaTitulo);

        const celulaAutor = document.createElement('td');
        celulaAutor.textContent = livro.autor;
        linhas.appendChild(celulaAutor);

        const celulaEditora = document.createElement('td');
        celulaEditora.textContent = livro.editora;
        linhas.appendChild(celulaEditora);

        const celulaAno = document.createElement('td');
        celulaAno.textContent = livro.anoPublicacao;
        linhas.appendChild(celulaAno);

        const celulaIsbn = document.createElement('td');
        celulaIsbn.textContent = livro.isbn;
        linhas.appendChild(celulaIsbn);
        
        const celulaQuantTotal = document.createElement('td');
        celulaQuantTotal.textContent = livro.quantTotal;
        linhas.appendChild(celulaQuantTotal);

        const celulaQuantDisp = document.createElement('td');
        celulaQuantDisp.textContent = livro.quantDisponivel;
        linhas.appendChild(celulaQuantDisp);

        const celulaValorAquisicao = document.createElement('td');
        celulaValorAquisicao.textContent = livro.valorAquisicao;
        linhas.appendChild(celulaValorAquisicao);

        const celulaStatusLivroEmprestado = document.createElement('td');
        celulaStatusLivroEmprestado.textContent = livro.statusLivroEmprestado;
        linhas.appendChild(celulaStatusLivroEmprestado);

        // Cria a célula para ações (ícones de editar e excluir)
        const celulaAcoes = document.createElement('td');

        const iconeEditar = document.createElement('img');
        iconeEditar.src = "assets/icons/pencil-square.svg";
        iconeEditar.alt = "editar";
        celulaAcoes.appendChild(iconeEditar);

        const iconeDeletar = document.createElement('img');
        iconeDeletar.src = "assets/icons/trash-fill.svg";
        iconeDeletar.alt = "excluir";
        celulaAcoes.appendChild(iconeDeletar);

        linhas.appendChild(celulaAcoes);

        // Adiciona a linha ao corpo da tabela
        tabela.appendChild(linhas);
    });
}
