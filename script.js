document.getElementById('quizForm').addEventListener('submit', function(e){
  e.preventDefault();
  const perguntas = ['q1','q2','q3','q4','q5','q6','q7'];
  const respostas = {};
  for (let p of perguntas){
    const sel = document.querySelector(`input[name="${p}"]:checked`);
    if (!sel){ alert('Responda todas as perguntas!'); return; }
    respostas[p] = sel.value;
  }

  const profs = {
    "Médico":0,"Enfermeiro":0,"Psicólogo":0,"Advogado":0,"Desenvolvedor":0,
    "Professor":0,"Administrador":0,"Designer":0,"Marketing":0,"Engenheiro":0
  };

  for (let r in respostas){
    const v = respostas[r];
    if (['cuidado','saude','hospital','calmo'].includes(v)){ profs['Médico']++; profs['Enfermeiro']++; }
    if (['humanas','falante','ouve','equipe'].includes(v)){ profs['Psicólogo']++; profs['Professor']++; profs['Marketing']++; }
    if (['justica','escritorio'].includes(v)){ profs['Advogado']++; profs['Administrador']++; }
    if (['logica','analitico','tecnologia','remoto','analisa','problemas'].includes(v)){ profs['Desenvolvedor']++; profs['Engenheiro']++; }
    if (['criativo'].includes(v)){ profs['Designer']++; profs['Marketing']++; }
    if (v === 'sozinho'){ profs['Desenvolvedor']++; profs['Engenheiro']++; }
  }

  const ordenado = Object.entries(profs).sort((a,b)=>b[1]-a[1]);
  const top3 = ordenado.slice(0,3);

  
  const imgMap = {
    'Médico':'char_1.png',
    'Enfermeiro':'char_9.png',
    'Psicólogo':'char_3.png',
    'Advogado':'char_2.png',
    'Desenvolvedor':'char_4.png',
    'Professor':'char_5.png',
    'Administrador':'char_7.png',
    'Designer':'char_7.png',
    'Marketing':'char_7.png',
    'Engenheiro':'char_6.png'
  };

  const div = document.getElementById('resultado');
  div.innerHTML = '<h3 class="text-center mb-3">Seu Top 3 profissões:</h3>';
  top3.forEach(([prof,score])=>{
    const img = imgMap[prof] || '';
    const box = document.createElement('div');
    box.className = 'result-box mb-2';
    box.innerHTML = `<img src="${img}" alt="${prof}"><div><h5 style="margin:0">${prof}</h5><p style="margin:0">Pontuação: ${score}</p></div>`;
    div.appendChild(box);
  });
});