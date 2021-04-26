function oknoListyPytan()
{
    let tloBlut=document.createElement('div');
    tloBlut.id='blurownik';
    tloBlut.className='blur';
    document.body.appendChild(tloBlut);

    let glowneOkno=document.createElement('div');
    glowneOkno.id='glowneOkno';
    glowneOkno.className='oknoListyPytan';
    blurownik.appendChild(glowneOkno);

    let pojemnikNaGuziki=document.createElement('div');
    pojemnikNaGuziki.id='pojemnikNaGuziki';
    pojemnikNaGuziki.className='listowanieElementow';
    glowneOkno.appendChild(pojemnikNaGuziki);
    
    let g1=document.createElement('div');
    g1.id='g1';
    g1.className='pulaGuziki';
    g1.innerHTML='plus';
    g1.addEventListener('click',()=>{liczbaPytan('1');},false);
    pojemnikNaGuziki.appendChild(g1);

    let g2=document.createElement('div');
    g2.id='g2';
    g2.className='pulaGuziki';
    g2.innerHTML='minus';
    g2.addEventListener('click',()=>{liczbaPytan('2');},false);
    pojemnikNaGuziki.appendChild(g2);

    let g3=document.createElement('div');
    g3.id='g3';
    g3.className='pulaGuziki';
    g3.innerHTML='plus 10';
    g3.addEventListener('click',()=>{liczbaPytan('3');},false);
    pojemnikNaGuziki.appendChild(g3);

    let g4=document.createElement('div');
    g4.id='g4';
    g4.className='pulaGuziki';
    g4.innerHTML='minus 10';
    g4.addEventListener('click',()=>{liczbaPytan('4');},false);
    pojemnikNaGuziki.appendChild(g4);

    let g5=document.createElement('div');
    g5.id='g5';
    g5.className='pulaGuziki';
    g5.innerHTML='RESET';
    g5.addEventListener('click',()=>{liczbaPytan('5');},false);
    pojemnikNaGuziki.appendChild(g5);

    let g6=document.createElement('div');
    g6.id='g5';
    g6.className='pulaGuziki';
    g6.innerHTML='losuj';
    g6.addEventListener('click',()=>{kreatorElementow();},false);
    pojemnikNaGuziki.appendChild(g6);

    let prawyPojemnik=document.createElement('div')
    prawyPojemnik.id='prawyPojemnik';
    prawyPojemnik.className='listowanieElementow';
    glowneOkno.appendChild(prawyPojemnik);

    let output=document.createElement('div');
    output.id='output';
    output.innerHTML='Pytanie: 1';
    output.className='wyjscia';
    prawyPojemnik.appendChild(output);

    let usun=document.createElement('button');
    usun.id='usun';
    usun.addEventListener('click',dilejt);
    usun.innerHTML='X';
    prawyPojemnik.appendChild(usun);
}
function dilejt()
{
    blurownik.remove();
}

function usunOknoListyPytan()
{
    glowneOkno.remove();
}


function rozwin()
{      
              let glowny=document.createElement('div');
       glowny.id='tloRozsuwane';
       glowny.className='rozsuwaneMenu';
       rozwinMenu.appendChild(glowny);

       let dodatkowaOpcja=document.createElement('div');
       dodatkowaOpcja.id='dodatkowe';
       dodatkowaOpcja.className='dodatkoweOpcje';
       dodatkowaOpcja.innerHTML='Opcja 1';
       tloRozsuwane.appendChild(dodatkowaOpcja);

       let dodatkowaOpcja2=document.createElement('div');
       dodatkowaOpcja2.id='dodatkowe2';
       dodatkowaOpcja2.className='dodatkoweOpcje';
       dodatkowaOpcja2.innerHTML='Opcja s';
       tloRozsuwane.appendChild(dodatkowaOpcja2);
       
}
function zwin()
{
       dodatkowe.remove();
       dodatkowe2.remove();
       tloRozsuwane.remove();  
}