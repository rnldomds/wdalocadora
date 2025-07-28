
function abrirPesquisa() {
    document.getElementById('popupPesquisa').style.display = 'flex';
    filtrarLivros(); 
}

function fecharPesquisa() {
    document.getElementById('popupPesquisa').style.display = 'none';
}

function filtrarLivros() {
    const termo = document.getElementById('campoPesquisa').value.toLowerCase();
    const lista = document.getElementById('listaResultadosPesquisa');
    lista.innerHTML = ''; 

    
    const livrosDisponiveis = [
        "O Senhor dos Anéis", "Harry Potter e a Pedra Filosofal", "Dom Quixote",
                "1984", "Orgulho e Preconceito", "O Pequeno Príncipe", "Cem Anos de Solidão",
                "A Revolução dos Bichos", "Ensaio sobre a Cegueira", "A Metamorfose", "Dom Casmurro", 
                "O Código Da Vinci", "O Diário de Anne Frank", "Capitães da Areia", "O Alquimista", 
                "Memórias Póstumas de Brás Cubas", "Admirável Mundo Novo", "A Garota no Trem", 
                "O Morro dos Ventos Uivantes", "O Sol é Para Todos", "A Culpa é das Estrelas",
                "A Menina que Roubava Livros", "O Hobbit", "Orgulho e Preconceito", "A Casa dos Espíritos"
                , "As Crônicas de Nárnia"
    ];

    const resultados = livrosDisponiveis.filter(livro => livro.toLowerCase().includes(termo));

    if (resultados.length > 0) {
        resultados.forEach(livro => {
            const li = document.createElement('li');
            li.textContent = livro;
            lista.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "Nenhum livro encontrado.";
        lista.appendChild(li);
    }
}

function abrirMinhaConta() {
    document.getElementById('popupMinhaConta').style.display = 'flex';
    
}

function fecharMinhaConta() {
    document.getElementById('popupMinhaConta').style.display = 'none';
}


function confirmarLogout() {
    const confirmacao = confirm("Tem certeza que deseja sair?");
    if (confirmacao) {
        
        window.location.href = "index.html"; 
    }
};

