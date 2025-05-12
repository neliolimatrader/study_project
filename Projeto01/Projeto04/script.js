document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formCadastro');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telefoneInput = document.getElementById('telefone');
  const listaClientes = document.getElementById('listaClientes');

  let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

  function renderizarClientes() {
    listaClientes.innerHTML = '';
    clientes.forEach((cliente, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${cliente.nome} - ${cliente.email} - ${cliente.telefone}
        <button onclick="deletarCliente(${index})">Excluir</button>
      `;
      listaClientes.appendChild(li);
    });
  }

  function salvarCliente(cliente) {
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    renderizarClientes();
  }

  function deletarCliente(index) {
    clientes.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    renderizarClientes();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();

    if (nome && email && telefone) {
      const novoCliente = { nome, email, telefone };
      salvarCliente(novoCliente);
      nomeInput.value = '';
      emailInput.value = '';
      telefoneInput.value = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });

  renderizarClientes();
});
