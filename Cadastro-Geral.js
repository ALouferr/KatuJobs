  const form = document.getElementById('formCadastro_emp');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const razaoSocial = document.getElementById('razaoSocial').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    const cnpj = document.getElementById('cnpj').value.trim();
    const senha = document.getElementById('senha_emp').value.trim();

    if (!razaoSocial || !descricao || !cnpj || !senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const empresa = {
      razaoSocial,
      descricao,
      cnpj,
      senha
    };

    localStorage.setItem('empresa', JSON.stringify(empresa));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'Painel-empresa.html';
  });

  
    const form = document.getElementById('formCadastro');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value.trim();

      if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
      }

      const usuario = {
        nome,
        email,
        senha,
      };

      localStorage.setItem('usuario', JSON.stringify(usuario));

      window.location.href = 'index.html';
    });