let rozsunienta=true;

function listaDoPytan()
{
    let numerPytania=1;

    if(rozsunienta==true)
    {
        for(let i=0;i<pytania.length;i++)
        {
            let numerek=i+1;
           let someDiv=document.createElement('div');
           someDiv.id=`Pytanie ${numerek}`;
           someDiv.className='listaPytan';
           ListaNaPytania.appendChild(someDiv);


           someDiv.innerHTML=`Pytanie ${numerek} 
           <br> Zapytanie: ${pytania[i][0]}
           <br><br> Odpowiedź A:  ${pytania[i][1]}
           <br> Odpowiedź B:  ${pytania[i][2]}
           <br> Odpowiedź C:  ${pytania[i][3]}
           <br><br  > Prawidłowa odpowiedź: ${pytania[i][4]}
           `;
           numerPytania++;
           rozsunienta=false;
        }
        
        rozsunListe.innerText="ZWIŃ LISTĘ";
    }
    
}
function listaDoPytan2()
{
    ListaNaPytania.innerText="";
    rozsunienta=true;
}