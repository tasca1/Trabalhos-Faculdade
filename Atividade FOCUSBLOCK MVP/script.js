let tasks=[];
let intervalid=null;
const taskinput=document.getElementById('taskInput');
const addtaskbtn=document.getElementById('addTaskBtn');
const tasklist=document.getElementById('taskList');
const emptystate=document.getElementById('emptyState');

addtaskbtn.addEventListener('click',()=>{
  const desc=taskinput.value.trim();
  if(desc){
    tasks.unshift({id:Date.now(),desc:desc,sec:0,run:false,done:false});
    taskinput.value='';
    rendertasks();
  }
});

function formattime(sec){
  const h=Math.floor(sec/3600);
  const m=Math.floor((sec%3600)/60);
  const s=sec%60;
  return [h,m,s].map(v=>v<10?"0"+v:v).join(":");
}

function toggletimer(id){
  tasks=tasks.map(t=>{
    if(t.id===id&&!t.done){
      if(!t.run){
        tasks.forEach(x=>x.run=false);
        t.run=true;
        startinterval();
      }else t.run=false;
    }
    return t;
  });
  rendertasks();
}

function completetask(id){
  tasks=tasks.map(t=>{if(t.id===id){t.run=false;t.done=true;}return t;});
  rendertasks();
}

function startinterval(){
  if(intervalid)return;
  intervalid=setInterval(()=>{
    let any=false;
    tasks.forEach(t=>{if(t.run){t.sec++;any=true;}});
    if(!any){clearInterval(intervalid);intervalid=null;}
    rendertasks();
  },1000);
}

function rendertasks(){
  if(tasks.length===0){
    emptystate.style.display='block';
    tasklist.innerHTML='';
    tasklist.appendChild(emptystate);
    return;
  }
  emptystate.style.display='none';
  tasklist.innerHTML='';
  tasks.forEach(t=>{
    const card=document.createElement('div');
    card.className=`card card-task mb-3 border-0 shadow-sm ${t.run?'status-running':''} ${!t.run&&t.sec>0&&!t.done?'status-paused':''} ${t.done?'status-completed':''}`;
    card.innerHTML=`
      <div class="card-body d-flex justify-content-between align-items-center p-3">
        <div class="flex-grow-1">
          <h5 class="mb-1 h6 fw-semibold">${t.desc}</h5>
          <div class="timer-display text-primary">${formattime(t.sec)}</div>
        </div>
        <div class="d-flex gap-2">
          ${!t.done?`
            <button onclick="toggletimer(${t.id})" class="btn ${t.run?'btn-warning':'btn-outline-success'} btn-sm">${t.run?'pausar':'iniciar'}</button>
            <button onclick="completetask(${t.id})" class="btn btn-outline-secondary btn-sm">concluir</button>
          `:'<span class="badge bg-secondary">finalizado</span>'}
        </div>
      </div>`;
    tasklist.appendChild(card);
  });
}