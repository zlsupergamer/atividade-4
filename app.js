const filmes = [
    {
      "id": 1,
      "titulo": "Sinister",
      "descricao": "Um escritor investiga uma série de assassinatos em sua nova casa.",
      "conteudo": "Sinister é um filme de terror psicológico que segue um escritor que encontra gravações de crimes horríveis em sua nova casa, e logo percebe que uma entidade demoníaca está por trás dos eventos.",
      "categoria": "Terror",
      "diretor": "Scott Derrickson",
      "data": "2012-10-12",
      "imagem": "img/filme11.jpg"
    },
    {
      "id": 2,
      "titulo": "The Conjuring",
      "descricao": "Investigadores paranormais ajudam uma família aterrorizada por um espírito maligno.",
      "conteudo": "Baseado em eventos reais, 'The Conjuring' segue os investigadores Ed e Lorraine Warren enquanto tentam salvar uma família de um demônio que assombra sua casa.",
      "categoria": "Terror",
      "diretor": "James Wan",
      "data": "2013-07-19",
      "imagem": "img/filme2.jpg"
    },
    {
      "id": 3,
      "titulo": "The Conjuring 2",
      "descricao": "Os Warren enfrentam um poltergeist na Inglaterra, com uma força demoníaca chamada Valak.",
      "conteudo": "Neste sequel, os investigadores paranormais Ed e Lorraine Warren viajam para Enfield, Inglaterra, onde ajudam uma família que é aterrorizada por um poltergeist, revelando uma ameaça demoníaca muito mais perigosa.",
      "categoria": "Terror",
      "diretor": "James Wan",
      "data": "2016-06-10",
      "imagem": "img/filme3.jpg"
    }
  ];
  
  // Função para exibir os filmes na home-page (index.html)
  function exibirFilmes() {
    const mainContent = document.getElementById("main-content");
  
    filmes.forEach(filme => {
      const card = document.createElement("div");
      card.classList.add("card");
      
      card.innerHTML = `
        <a href="detalhes.html?id=${filme.id}">
          <img src="${filme.imagem}" alt="${filme.titulo}">
        </a>
        <h2>${filme.titulo}</h2>
        <p>${filme.descricao}</p>
      `;
      
      mainContent.appendChild(card);
    });
  }
  
  exibirFilmes();
  
  // Função para exibir os detalhes do filme na página de detalhes (detalhes.html)
  function exibirDetalhes() {
    const urlParams = new URLSearchParams(window.location.search);
    const idFilme = parseInt(urlParams.get("id"));
    
    const filme = filmes.find(f => f.id === idFilme);
    
    if (filme) {
      const movieDetails = document.getElementById("movie-details");
      movieDetails.innerHTML = `
        <h2>${filme.titulo}</h2>
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <p><strong>Categoría:</strong> ${filme.categoria}</p>
        <p><strong>Data de Lançamento:</strong> ${filme.data}</p>
        <p><strong>Diretor:</strong> ${filme.diretor}</p>
        <p><strong>Conteúdo:</strong> ${filme.conteudo}</p>
      `;
    }
  }
  
  if (document.getElementById("movie-details")) {
    exibirDetalhes();
  }