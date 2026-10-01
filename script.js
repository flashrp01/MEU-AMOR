const $=s=>document.querySelector(s), screens=[...document.querySelectorAll('.screen')],music=$('#music');
function show(id){screens.forEach(x=>x.classList.toggle('active',x.id===id));scrollTo({top:0,behavior:'smooth'})}
$('#start').onclick=()=>{music.volume=.65;music.play().catch(()=>{});show('letter')};
$('#liked').onclick=()=>show('next');
$('#nextBtn').onclick=()=>show('video');
$('#official').onended=()=>show('final');
setInterval(()=>{const h=document.createElement('span');h.className='floating';h.textContent=Math.random()>.5?'♥':'❤';h.style.left=Math.random()*100+'%';h.style.fontSize=10+Math.random()*18+'px';h.style.animationDuration=6+Math.random()*7+'s';$('.hearts').append(h);setTimeout(()=>h.remove(),14000)},650);
