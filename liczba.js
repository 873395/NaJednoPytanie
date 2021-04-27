let pytanka=new Array(pytania.length);
function losowanko() {
    let k=iloscDivow;
    let n=pytania.length; 
    // wypełnianie tablicy liczbami 1,2...n
    var numbers = new Array(n);
    for (var i=0; i<n; i++) {
    numbers[i] = i + 1;
    }  
    // losowanie k liczb
    for (var i=0; i<k; i++) {  
    // tworzenie losowego indeksu pomiędzy 0 i n - 1
    var r = Math.floor(Math.random()*n);
    // wybieramy element z losowego miejsca
    pytanka.push('a');
    // przeniesienia ostatniego elementu do miejsca z którego wzięliśmy
    numbers[r] = numbers[n - 1];
    //zmniejszamy n
    n--;
    }
    }