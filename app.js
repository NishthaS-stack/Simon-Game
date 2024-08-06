let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["b1", "b2", "b3", "b4"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 1000);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
   
    let randidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`#${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkans(idx) {
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over!Your score was<b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        resetGame();
    }
}

function btnpress() {
    let btn = this;
    btnflash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(usercolor);
    checkans(userseq.length - 1);
}

function resetGame() {
    gameseq = [];
    userseq = [];
    started = false;
    level = 0;
}

let allbtns = document.querySelectorAll(".btn");
allbtns.forEach(btn => {
    btn.addEventListener("click", btnpress);
});


    
