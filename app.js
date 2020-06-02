const lipsum = document.querySelector(".lipsum");
let n=0;
const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"," ",", ",". "]
const para= document.querySelector("#para");
para.addEventListener("change", (event)=>{
    n=para.value;
    // console.log(n);
    for(let i=0;i<10*40*n;i++){
        let j= 4+Math.floor(Math.random()*2);
        let k= Math.floor(Math.random()*28);
        if(alpha[i]==". ")
        lipsum.innerHTML+= alpha[j].toUpperCase();
        if(i%(40*n)!=0)
        lipsum.innerHTML+= alpha[k];
        else if(i%(40*n)==0 && i!=0)

        {   lipsum.innerHTML+=".";
            lipsum.innerHTML+="<br><br>";
            lipsum.innerHTML+= alpha[k].toUpperCase();
        }

    };
});

