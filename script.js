// Dados iniciais (simulação de banco de dados)
const jobs = [
    { title: 'Desenvolvedor Full-Stack', description: 'Vaga para desenvolvedor com experiência em HTML, CSS, JS e Node.js. Remoto.', location: 'Remoto' },
    { title: 'Analista de Dados', description: 'Procura-se analista com conhecimento em Python, SQL e Power BI.', location: 'São Paulo' }
];

const courses = [
    { title: 'Curso de Programação Básica', description: 'Aprenda HTML, CSS e JS do zero. Gratuito.', level: 'Iniciante' },
    { title: 'Introdução ao Machine Learning', description: 'Curso avançado com Python e bibliotecas ML.', level: 'Avançado' }
];

// Função para adicionar itens a uma lista
function addToList(listId, item) {
    const list = document.getElementById(listId);
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${item.title}</strong>
        <p>${item.description}</p>
        <small>${item.location || item.level}</small>
    `;
    list.appendChild(li);
}

// Função para renderizar listas
function renderList(listId, items, filter = '') {
    const list = document.getElementById(listId);
    list.innerHTML = '';
    const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(filter.toLowerCase()) || 
        item.description.toLowerCase().includes(filter.toLowerCase())
    );
    filteredItems.forEach(item => addToList(listId, item));
}

// Função para validar formulários
function validateForm(fields) {
    let isValid = true;
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorElement = document.getElementById(`${field.id}Error`);
        if (!input.value.trim()) {
            errorElement.textContent = `${field.label} é obrigatório.`;
            isValid = false;
        } else if (field.type === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
            errorElement.textContent = 'Email inválido.';
            isValid = false;
        } else {
            errorElement.textContent = '';
        }
    });
    return isValid;
}

// Manipular formulário de vagas
const jobForm = document.getElementById('jobForm');
jobForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fields = [
        { id: 'jobTitle', label: 'Título da Vaga' },
        { id: 'jobDescription', label: 'Descrição da Vaga' }
    ];
    if (validateForm(fields)) {
        const job = {
            title: document.getElementById('jobTitle').value,
            description: document.getElementById('jobDescription').value,
            location: document.getElementById('jobLocation').value || 'Não especificado'
        };
        jobs.push(job);
        renderList('jobList', jobs);
        jobForm.reset();
        alert('Vaga anunciada com sucesso!');
    }
});

// Manipular formulário de cursos
const courseForm = document.getElementById('courseForm');
courseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fields = [
        { id: 'courseTitle', label: 'Título do Curso' },
        { id: 'courseDescription', label: 'Descrição do Curso' },
        { id: 'courseLevel', label: 'Nível do Curso' }
    ];
    if (validateForm(fields)) {
        const course = {
            title: document.getElementById('courseTitle').value,
            description: document.getElementById('courseDescription').value,
            level: document.getElementById('courseLevel').value
        };
        courses.push(course);
        renderList('courseList', courses);
        courseForm.reset();
        alert('Sugestão de curso enviada!');
    }
});

// Manipular formulário de contato
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fields = [
        { id: 'name', label: 'Nome' },
        { id: 'email', label: 'Email', type: 'email' },
        { id: 'message', label: 'Mensagem' }
    ];
    if (validateForm(fields)) {
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    }
});

// Filtros
document.getElementById('jobFilter').addEventListener('input', function(e) {
    renderList('jobList', jobs, e.target.value);
});

document.getElementById('courseFilter').addEventListener('input', function(e) {
    renderList('courseList', courses, e.target.value);
});

// Renderizar listas iniciais
renderList('jobList', jobs);
renderList('courseList', courses);
