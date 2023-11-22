const spnQtd = document.querySelector(".quiz__qtd");
const timer = document.querySelector(".quiz__timer");

const img = document.querySelector("#img");
const question = document.querySelector(".quiz__question");
const answers = document.querySelector(".quiz__answers");
const footer = document.querySelector(".quiz__footer");
const nextQuestion = document.querySelector(".quiz__nextQuestion");

const questions = [
    {
        id: 1,
        question: "Qual nome desse material ?",
        img: "https://cdn.awsli.com.br/600x450/1677/1677841/produto/67189404/1eea3da7e5.jpg",
        answers: [
            { option: "Sonda Exploradora", correct: false },
            { option: "Espátula de Cementação", correct: false },
            { option: "Cureta de Gracey", correct: false },
            { option: "Descolador de Molt n°9", correct: true }
        ]
    },
    {
        id: 2,
        question: "Qual nome desse material ?",
        img: "https://cdn.awsli.com.br/600x450/1677/1677841/produto/66514728/5b7f7faa54.jpg",
        answers: [
            { option: "Pinça de Algim", correct: false },
            { option: "Pinça Hemostática", correct: false },
            { option: "Bisturi de Kirkland", correct: false },
            { option: "Pinça de Adson", correct: true }
        ]
    },
    {
        id: 3,
        question: "Qual nome desse material ?",
        img: "https://cdn.awsli.com.br/600x450/1677/1677841/produto/66527622/4516d7def1.jpg",
        answers: [
            { option: "Cabo de Seringa Carpule", correct: false },
            { option: "Pinça Backhaus", correct: false },
            { option: "Afastador de Minessota", correct: true },
            { option: "Cureta Lucas", correct: false }
        ]
    },
    {
        id: 4,
        question: "Qual nome desse material ?",
        img: "https://cdn.awsli.com.br/600x450/1677/1677841/produto/67142603/366b47d2bb.jpg",
        answers: [
            { option: "Tesoura de Mayo", correct: false },
            { option: "Pinça de Adson", correct: false },
            { option: "Pinça de Allis", correct: true },
            { option: "Porta-agulhas de Mathieu", correct: false }
        ]
    },
    {
        id: 5,
        question: "Qual nome desse material ?",
        img: "https://cirurgicasaudeonline.vtexassets.com/arquivos/ids/214842-800-auto?v=637031332101900000&width=600&height=450&aspect=true",
        answers: [
            { option: "Tesoura de Metzembaum", correct: false },
            { option: "Tesoura de Mayo", correct: false },
            { option: "Tesoura Iris", correct: true },
            { option: "Tesoura Backaus", correct: false }
        ]
    },
    {
        id: 6,
        question: "Qual nome desse material ?",
        img: "https://cirurgicasaudeonline.vtexassets.com/arquivos/ids/214829-800-auto?v=637031331176700000&width=600&height=450&aspect=true",
        answers: [
            { option: "Tesoura de Iris", correct: false },
            { option: "Tesoura de Mayo", correct: false },
            { option: "Tesoura Metzembaum", correct: true },
            { option: "Tesoura Backaus", correct: false }
        ]
    },
    {
        id: 7,
        question: "Qual nome desse material ?",
        img: "https://images.tcdn.com.br/img/img_prod/1061661/garrote_tubo_de_latex_tamanho_203_lemgruber_40_comprimento_unidade_347_1_2bb07cc41fc12627b013e5d4d75e0992.jpg",
        answers: [
            { option: "Cabo de Bisturi n°7", correct: false },
            { option: "Cureta de Black", correct: false },
            { option: "Garrote Estéril", correct: true },
            { option: "Pinça de Magill", correct: false }
        ]
    },
    {
        id: 8,
        question: "Qual nome desse material ?",
        img: "https://images.tcdn.com.br/img/img_prod/1048834/pinca_hemostatica_kelly_golgran_3821_1_07d25f876266647f4577984d4a647f1f.jpg",
        answers: [
            { option: "Pinça de Gelpi", correct: false },
            { option: "Pinça Backaus", correct: false },
            { option: "Pinça hemostática", correct: true },
            { option: "Pinça Castroviejo", correct: false }
        ]
    },
    {
        id: 9,
        question: "Qual nome desse material ?",
        img: "https://cdn.dentalcremer.com.br/produtos/550/pinca-backhaus-quinelato-dc11576.jpg",
        answers: [
            { option: "Pinça de Gelpi", correct: false },
            { option: "Pinça hemostática", correct: false },
            { option: "Pinça Backaus", correct: true },
            { option: "Pinça Castroviejo", correct: false }
        ]
    },
    {
        id: 10,
        question: "Qual nome desse material ?",
        img: "https://cdn.dentalcremer.com.br/produtos/550/476774.jpg",
        answers: [
            { option: "Alavanca bandeirinha direita", correct: false },
            { option: "Alavanca Kirkland", correct: false },
            { option: "Alavanca reta", correct: true },
            { option: "Alavanca de Castroviejo", correct: false }
        ]
    },
    {
        id: 11,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/175949-1000-1000/Seldin1RPrime.png?v=638309055423970000",
        answers: [
            { option: "Alavanca de Castroviejo", correct: false },
            { option: "Alavanca Kirkland", correct: false },
            { option: "Alavanca bandeirinha direita", correct: true },
            { option: "Alavanca bandeirinha esquerda", correct: false }
        ]
    },
    {
        id: 12,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/175950-1000-1000/Seldin1LPrime.png?v=638309055700630000",
        answers: [
            { option: "Alavanca bandeirinha direita", correct: false },
            { option: "Alavanca de Castroviejo", correct: false },
            { option: "Alavanca bandeirinha esquerda", correct: true },
            { option: "Alavanca Apical 304", correct: false }
        ]
    },
    {
        id: 13,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/168578-1000-1000/apical304prata.png?v=637479702002270000",
        answers: [
            { option: "Afastador de Farabeuf", correct: false },
            { option: "Alavanca Kirkland", correct: false },
            { option: "Alavanca Apical 304", correct: true },
            { option: "Alavanca bandeirinha esquerda", correct: false }
        ]
    },
    {
        id: 14,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/175570-1000-1000/53LQuinelato.png?v=638240948560600000",
        answers: [
            { option: "Fórceps 39", correct: false },
            { option: "Fórceps 32", correct: false },
            { option: "Fórceps 53", correct: true },
            { option: "Fórceps 17", correct: false }
        ]
    },
    {
        id: 15,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/170408-650-650/324082.jpg?v=637600579950270000",
        answers: [
            { option: "Fórceps 17", correct: false },
            { option: "Fórceps 53", correct: false },
            { option: "Fórceps 150", correct: true },
            { option: "Fórceps 151", correct: false }
        ]
    },
    {
        id: 16,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/170407-650-650/324136.jpg?v=637600579247430000",
        answers: [
            { option: "Fórceps 11", correct: false },
            { option: "Fórceps 18L", correct: false },
            { option: "Fórceps 18R", correct: true },
            { option: "Fórceps 101", correct: false }
        ]
    },
    {
        id: 17,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/170406-650-650/324129.jpg?v=637600578236230000",
        answers: [
            { option: "Fórceps 151", correct: false },
            { option: "Fórceps 18R", correct: false },
            { option: "Fórceps 18L", correct: true },
            { option: "Fórceps 167", correct: false }
        ]
    },
    {
        id: 18,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/170409-650-650/324099.jpg?v=637600580776000000",
        answers: [
            { option: "Fórceps 167", correct: false },
            { option: "Fórceps 6", correct: false },
            { option: "Fórceps 151", correct: true },
            { option: "Afastador de Gelpi", correct: false }
        ]
    },
    {
        id: 19,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/170405-650-650/324112.jpg?v=637600576656800000",
        answers: [
            { option: "Fórceps 167", correct: false },
            { option: "Fórceps 16", correct: false },
            { option: "Fórceps 17", correct: true },
            { option: "Bisturi de Kirkland", correct: false }
        ]
    },
    {
        id: 20,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/170404-650-650/324105.jpg?v=637600575770900000",
        answers: [
            { option: "Afastador de Farabeuf", correct: false },
            { option: "Fórceps 17", correct: false },
            { option: "Fórceps 16", correct: true },
            { option: "Fórceps 99", correct: false }
        ]
    },
    {
        id: 21,
        question: "Qual nome desse material ?",
        img: "https://dentalecia.vteximg.com.br/arquivos/ids/175574-650-650/69Quinelato.png?v=638240949429500000",
        answers: [
            { option: "Fórceps 151", correct: false },
            { option: "Fórceps 99", correct: false },
            { option: "Fórceps 69", correct: true },
            { option: "Fórceps 167", correct: false }
        ]
    },
];

let currentQuestion = 0;
let shuffledQuestions = [];


let pressed = false
let startX = 0
let intervalId;

footer.addEventListener('mousedown', function (e) {
    pressed = true
    startX = e.clientX
})

footer.addEventListener('mouseleave', function (e) {
    pressed = false
})

window.addEventListener('mouseup', function (e) {
    pressed = false
})

footer.addEventListener('mousemove', function (e) {
    if (!pressed) {
        return
    }

    this.scrollLeft += startX - e.clientX;
})

nextQuestion.addEventListener("click", (e) => {

    if (!localStorage.getItem(`question-${currentQuestion + 1}`)) return;
    

    if (currentQuestion < shuffledQuestions.length - 1) {
        currentQuestion++;
        loadQuestion(true);
    } else {
        finish() 
    }
})


function finish(){
    localStorage.clear();
        currentQuestion = 0;
        shuffledQuestions = [];
        window.location.reload()
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
}

function startTimer(duration) {
    var t = duration, seconds;

    intervalId = setInterval(function () {
        seconds = parseInt(t % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (--t < 0) {
            timer.innerHTML = "00s";
            clearInterval(intervalId);
            localStorage.setItem(`question-${currentQuestion + 1}`, JSON.stringify({
                c: "",
                e: ""
            }));

            document.querySelectorAll(".quiz__answer").forEach((r) => {
                if (r.getAttribute("data-correct") === "true") {
                    r.classList.add("win");
                }else{
                    r.classList.add("lose")
                }
            });
            
            return;
        }
        timer.innerHTML = seconds + "s";

    }, 1000);
}

function routeQuestion(event) {
    if (event.target.id - 1 === currentQuestion) return;
    currentQuestion = event.target.id - 1;
    localStorage.setItem("currentQuestion", event.target.id - 1);
    loadQuestion(false);
}


function verifyQuestion(e) {
    if (localStorage.getItem(`question-${currentQuestion + 1}`)) return;

    let trueText, loseText;

    const v = document.getElementById(`${currentQuestion + 1}`)

    clearInterval(intervalId)

    if (e.target.getAttribute("data-correct") === "true") {
        e.target.classList.add("win");
        v.classList.add("win")

        const buttonText = e.target.textContent;
        localStorage.setItem(`question-${currentQuestion + 1}`, JSON.stringify({
            c: buttonText,
            e: ""
        }));
    } else {
        document.querySelectorAll(".quiz__answer").forEach((r) => {
            if (r.getAttribute("data-correct") === "true") {
                r.classList.add("win");
                trueText = r.textContent;
            }
        });
        e.target.classList.add("lose");
        v.classList.add("lose")
        loseText = e.target.textContent;
        localStorage.setItem(`question-${currentQuestion + 1}`, JSON.stringify({
            c: trueText,
            e: loseText
        }));
    }
}





async function loadQuestion(x) {
    spnQtd.innerHTML = `${currentQuestion + 1} de ${questions.length}`;
  

    const savedQuestions = await JSON.parse(localStorage.getItem('shuffledQuestions'));

    if (!savedQuestions) {
        shuffledQuestions = [...questions];
        shuffleArray(shuffledQuestions);
        localStorage.setItem('shuffledQuestions', JSON.stringify(shuffledQuestions));
    }


    shuffledQuestions = await JSON.parse(localStorage.getItem('shuffledQuestions'));

    const q = await JSON.parse(localStorage.getItem(`question-${currentQuestion + 1}`));



    if (!q && x) {
        startTimer(15);
    }


    const item = shuffledQuestions[currentQuestion];


    if (x === true) {
        footer.innerHTML += `<div class="quiz__circle" id="${currentQuestion + 1}">${currentQuestion + 1}</div>`;
    }




    document.querySelectorAll(".quiz__circle").forEach((item) => {

        item.addEventListener("click", routeQuestion);
    });


    answers.innerHTML = "";
    question.innerHTML = item.question;
    img.src = item.img;

    shuffleAnswers(item.answers);

    item.answers.forEach((answer) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button class="quiz__answer" data-correct="${answer.correct}">${answer.option}</button>
        `;
        answers.appendChild(div);
    });

    document.querySelectorAll(".quiz__answer").forEach((x) => {
        x.addEventListener("click", verifyQuestion);
    });


    if (q) {

        const v = document.getElementById(`${currentQuestion + 1}`)
        document.querySelectorAll(".quiz__answer").forEach((r) => {
            if (r.textContent === q['c']) {
                r.classList.add("win");
                if (q['e'] === "") {
                    v.classList.add("win")
                }
            }
            if (r.textContent === q['e']) {
                r.classList.add("lose");
                v.classList.add("lose");
            }

            if(q['e'] === "" && q['c'] === ""){
                if (r.getAttribute("data-correct") === "true") {
                    r.classList.add("win");
                }else{
                    r.classList.add("lose")
                }
            }
        });
    };


}


loadQuestion(true);



