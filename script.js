
const quiz=[
{q:'Какого цвета бургер?',a:['Светлый','Тёмный']},
{q:'Из какого мяса котлета?',a:['Курица','Говядина','Свинина']},
{q:'Дополнительные ингредиенты?',a:['Помидор','Огурец','Салат','Лук']},
{q:'Добавить соус?',a:['Чесночный','Томатный','Горчичный']}
];

let step=0;
let result=[];

function startQuiz(){
document.getElementById('start').style.display='none';
document.getElementById('quiz').style.display='block';
render();
}

function render(){
document.getElementById('question').innerText=quiz[step].q;
const a=document.getElementById('answers');
a.innerHTML='';
quiz[step].a.forEach(t=>{
const d=document.createElement('div');
d.className='answer';
d.innerText=t;
d.onclick=()=>d.classList.toggle('selected');
a.appendChild(d);
});
}

function next(){
document.querySelectorAll('.answer.selected').forEach(el=>result.push(el.innerText));
step++;
if(step<quiz.length){render();}
else{showResult();}
}

function showResult(){
document.getElementById('quiz').style.display='none';
document.getElementById('result').style.display='block';
const ul=document.getElementById('resultList');
ul.innerHTML='';
result.forEach(r=>{
const li=document.createElement('li');
li.innerText='• '+r;
ul.appendChild(li);
});
}
