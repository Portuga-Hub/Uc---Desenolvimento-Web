let livros = [];
let filtroAtivo = 'todos';

// ── Adicionar livro ──
function adicionarLivro() {
  const titulo = document.getElementById('input-titulo').value.trim();

  if (!titulo) {
    document.getElementById('input-titulo').focus();
    return;
  }

  const autor  = document.getElementById('input-autor').value.trim();
  const genero = document.getElementById('input-genero').value;

  livros.push({
    id: Date.now(),
    titulo,
    autor,
    genero,
    lido: false
  });

  // Limpar campos
  document.getElementById('input-titulo').value = '';
  document.getElementById('input-autor').value  = '';
  document.getElementById('input-genero').value = '';

  renderizar();
}

// ── Remover livro ──
function removerLivro(id) {
  livros = livros.filter(livro => livro.id !== id);
  renderizar();
}

// ── Marcar como lido / não lido ──
function toggleLido(id) {
  const livro = livros.find(livro => livro.id === id);
  if (livro) {
    livro.lido = !livro.lido;
  }
  renderizar();
}

// ── Filtrar lista ──
function filtrar(btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filtroAtivo = btn.dataset.filtro;
  renderizar();
}

// ── Atualizar a lista na tela ──
function renderizar() {
  const lista = document.getElementById('livros-lista');
  lista.innerHTML = '';

  // Atualizar estatísticas
  const total    = livros.length;
  const lidos    = livros.filter(l => l.lido).length;
  const naoLidos = total - lidos;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-lidos').textContent = lidos;
  document.getElementById('stat-nao').textContent   = naoLidos;

  // Aplicar filtro
  let visiveis = livros;
  if (filtroAtivo === 'lidos')  visiveis = livros.filter(l =>  l.lido);
  if (filtroAtivo === 'a-ler')  visiveis = livros.filter(l => !l.lido);

  // Estado vazio
  if (visiveis.length === 0) {
    lista.innerHTML = `
      <div class="empty-state">
        <div class="book-icon">📚</div>
        <p>Nenhum livro aqui ainda…</p>
      </div>`;
    return;
  }

  // Renderizar cada livro
  visiveis.forEach(livro => {
    const li = document.createElement('li');
    li.className = 'livro-item' + (livro.lido ? ' lido' : '');

    const metaHTML = [
      livro.autor  ? `<span class="livro-autor">— ${livro.autor}</span>` : '',
      livro.genero ? `<span class="livro-genero">${livro.genero}</span>` : '',
      `<span class="livro-status">${livro.lido ? '✓ Lido' : '○ A ler'}</span>`
    ].join('');

    li.innerHTML = `
      <div class="livro-spine"></div>
      <div class="livro-info">
        <div class="livro-titulo">${livro.titulo}</div>
        <div class="livro-meta">${metaHTML}</div>
      </div>
      <div class="livro-acoes">
        <button class="btn-icon btn-check"
          title="${livro.lido ? 'Marcar como não lido' : 'Marcar como lido'}"
          onclick="toggleLido(${livro.id})">
          ${livro.lido ? '↩' : '✓'}
        </button>
        <button class="btn-icon btn-del" title="Remover" onclick="removerLivro(${livro.id})">
          ✕
        </button>
      </div>`;

    lista.appendChild(li);
  });
}

// ── Evento: Enter no campo de título ──
document.getElementById('input-titulo').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    adicionarLivro();
  }
});

// Renderização inicial
renderizar();
