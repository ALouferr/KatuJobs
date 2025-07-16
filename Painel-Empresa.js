  function carregarVagas() {
    const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
    const lista = document.getElementById('listaVagas');
    lista.innerHTML = '';

    if (vagas.length === 0) {
      lista.innerHTML = '<p style="text-align:center;">Nenhuma vaga cadastrada ainda.</p>';
    } else {
      vagas.forEach(vaga => {
        const div = document.createElement('div');
        div.className = 'vaga';
        div.innerHTML = `
          <h3>${vaga.titulo}</h3>
          <p>${vaga.descricao}</p>
          <p><strong>Salário:</strong> ${vaga.salario}</p>
        `;
        lista.appendChild(div);
      });
    }
  }

  const form = document.getElementById('formVaga');
  form.addEventListener('submit', function(e){
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const salario = document.getElementById('salario').value;

    const novaVaga = { titulo, descricao, salario };

    const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
    vagas.push(novaVaga);
    localStorage.setItem('vagas', JSON.stringify(vagas));

    alert('Vaga cadastrada com sucesso!');
    form.reset();
    carregarVagas();
  });

  carregarVagas();