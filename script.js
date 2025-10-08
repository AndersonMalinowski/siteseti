// Função para adicionar itens a listas
function addToList(listId, title, description) {
    const list = document.getElementById(listId);
    const li = document.createElement('li');
    li.innerHTML = `<strong>${title}</strong><p>${description}</p>`;
    list.appendChild(li);
}

// Manipular formulário de vagas
const jobForm = document.getElementById('jobForm');
jobForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('jobTitle').value;
    const description = document.getElementById('jobDescription').value;
    addToList('jobList', title, description);
    jobForm.reset();
    alert('Vaga anunciada com sucesso!');
});

// Manipular formulário de cursos
const courseForm = document.getElementById('courseForm');
courseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('courseTitle').value;
    const description = document.getElementById('courseDescription').value;
    addToList('courseList', title, description);
    courseForm.reset();
    alert('Sugestão de curso enviada!');
});

// Manipular formulário de contato (simulação de envio)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    contactForm.reset();
});

// Exemplos iniciais
addToList('jobList', 'Desenvolvedor Full-Stack', 'Vaga para desenvolvedor com experiência em HTML, CSS e JS. Remoto.');
addToList('jobList', 'Analista de Dados', 'Procura-se analista com conhecimento em Python e SQL.');

addToList('courseList', 'Curso de Programação Básica', 'Aprenda HTML, CSS e JS do zero. Gratuito.');
addToList('courseList', 'Introdução ao Machine Learning', 'Curso avançado com Python e bibliotecas ML.');
