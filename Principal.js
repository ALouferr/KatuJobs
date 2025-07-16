
  function carregarVagas() {
    const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
    const container = document.getElementById('vagasContainer');
    container.innerHTML = '';

    if (vagas.length === 0) {
      container.innerHTML = '<p>Sem vagas cadastradas no momento.</p>';
    } else {
      vagas.forEach(vaga => {
        const div = document.createElement('div');
        div.className = 'vaga';
        div.innerHTML = `
          <h3>${vaga.titulo}</h3>
          <p>${vaga.descricao}</p>
          <p><strong>Salário:</strong> ${vaga.salario}</p>
        `;
        container.appendChild(div);
      });
    }
  }

  carregarVagas();
