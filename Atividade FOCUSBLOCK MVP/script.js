// Array principal que vai armazenar todas as tarefas em memória
let tasks = [];
let intervalId = null; // Variável para controlar o cronômetro (Passo 6)

// Mapeamento dos elementos do DOM (HTML)
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');

// Evento de clique no botão "Criar Bloco"
addTaskBtn.addEventListener('click', () => {
    const description = taskInput.value.trim();
    
    // Só adiciona se o usuário digitou algo
    if (description) {
        const newTask = {
            id: Date.now(), // Gera um ID único baseado na data atual
            description: description,
            seconds: 0,
            isRunning: false,
            isCompleted: false
        };
        
        tasks.unshift(newTask); // Coloca a nova tarefa no topo da lista
        taskInput.value = '';   // Limpa o campo de texto
        
        renderTasks(); // Chama a função que vai desenhar na tela (vamos criar no Passo 7)
    }
});

// Função utilitária para converter segundos para o formato HH:MM:SS
function formatTime(totalSeconds) {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    // O .map garante que números menores que 10 ganhem um "0" na frente (ex: 09:05:02)
    return [hrs, mins, secs].map(v => v < 10 ? "0" + v : v).join(":");
}

// Função temporária de renderização (vamos preencher ela de verdade no Passo 7)
function renderTasks() {
    console.log("Tarefas atuais na memória:", tasks);
}