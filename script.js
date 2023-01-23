const button=document.querySelectorAll('.button');
const display=document.querySelector('.display');
const remove=document.querySelector('.remove');
let count=0;
button.forEach((i)=>{
    i.addEventListener('click',()=>{
        if (count<10){

            display.innerText=display.innerText+i.innerText;
            console.log(i.innerText);
            count++;
        }
        else{
            alert('Already 10 characters!!')
        }
    })
})
remove.addEventListener('click',()=>{
    if (count==0){
    alert('No characters to remove')    
    }
    else{
        let str=display.innerText;
        str = str.slice(0, -1); 
        display.innerText=str;
        count--;
    }
})
