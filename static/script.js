var colors = {
    '1': '#F08080',
    '2': '#0000CD',
    '3': '#FF0000',
    '4': '#FFFF00',
    '5': '#A0522D',
    '6': '#663399',
    '7': '#FF4500',
    '8': '#191970',
    '9': '#C71585',
    '10': '#1E90FF',
}

e = document.getElementById('countdown');

function ten (cb){
    e.innerHTML = "";
    e.innerHTML = 10;
    e.style.color = colors['10'];

    console.log(10);

    setTimeout(()=>{
        cb();},1000)
}

function nine (cb){
    e.innerHTML = "";
    e.innerHTML = 9;
    e.style.color = colors['9'];
    
    setTimeout(()=>{
        cb();
    },1000);
    
}

function eight (cb){
    e.innerHTML = "";
    e.innerHTML = 8;
    e.style.color = colors['8'];
    
    setTimeout(()=>{
        cb();
    },1000);
    
}

function seven (cb){
    e.innerHTML = "";
    e.innerHTML = 7;
    e.style.color = colors['7'];
    
    setTimeout(()=>{
        cb();
    },1000);
    
}

function six (cb){
    e.innerHTML = "";
    e.innerHTML = 6;
    e.style.color = colors['6'];
    
    setTimeout(()=>{
        cb();
    },1000);
    
}
function five (cb){
    e.innerHTML = "";
    e.innerHTML = 5;
    e.style.color = colors['5'];
    setTimeout(()=>{
        cb();
    },1000);
    
}

function four (cb){
    e.innerHTML = "";
    e.innerHTML = 4;
    e.style.color = colors['4'];
    setTimeout(()=>{
        cb();
    },1000);
    
}

function three (cb){
    e.innerHTML = "";
    e.innerHTML = 3;
    e.style.color = colors['3'];
    
    setTimeout(()=>{
        cb();
    },1000);
    
}

function two (cb){
    e.innerHTML = "";
    e.innerHTML = 2;
    e.style.color = colors['2'];
    
    setTimeout(()=>{
        cb();
    },1000);
    
}

function one (cb){
    e.innerHTML = "";
    e.innerHTML = 1;
    e.style.color = colors['1'];
    
    setTimeout(()=>{
        cb();
    },1000);

}

ten(()=>{
    nine(()=>{
        eight(()=>{
            seven(()=>{
                six(()=> {
                    five(()=> {
                        four (()=>{
                            three(()=> {
                                two (()=> {
                                    one (()=>{
                                        hello();
                                    })
                                })
                            })
                        });
                    });
                });
            });
        });
    });
});

function hello (){
    console.log('hello');
    e.innerHTML = "";
    e.innerHTML = "HAPPY BIRTHDAY";
    // document.getElementById('my-row').classList.remove('invisible');
    // document.getElementById('my-row').classList.add('visible');
}