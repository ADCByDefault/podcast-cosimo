const bodyBG = document.querySelector("#bodyBG");
const castsvg = document.querySelector("#cast");
const moresvg = document.querySelector("#more");
const ops = Array.from(document.querySelectorAll(".op"));
const monkeCont = document.querySelector("#monkeCont");
const playerCont = document.querySelector("#playerContainer");
const main = document.querySelector("main");

let startUpAnimation = bodymovin.loadAnimation({
    container: bodyBG,
    path: "https://assets4.lottiefiles.com/packages/lf20_Gpt6Y2.json",
    // path: "https://assets7.lottiefiles.com/private_files/lf30_zxgsax4g.json",
    loop: false,
    autoplay: false,
    renderer: "svg",
});

let showUpAnimation1 = bodymovin.loadAnimation({
    container: ops[0],
    path: "https://assets7.lottiefiles.com/packages/lf20_wis6xp3y.json",
    loop: false,
    autoplay: false,
    renderer: "svg",
});

let showUpAnimation2 = bodymovin.loadAnimation({
    container: ops[1],
    path: "https://assets7.lottiefiles.com/packages/lf20_wis6xp3y.json",
    loop: false,
    autoplay: false,
    renderer: "svg",
});

let mokeAnim = bodymovin.loadAnimation({
    container: monkeCont,
    path: "https://assets2.lottiefiles.com/packages/lf20_q7uarxsb.json",
    loop: true,
    autoplay: true,
    render: "svg",
});

window.addEventListener("load", () => {
    startUpAnimation.goToAndPlay(0, true);
    setTimeout(() => {
        ops.forEach((op) => {
            op.classList.add("anim");
            playerCont.classList.add("anim");
            showUpAnimation1.goToAndPlay(0, true);
            showUpAnimation2.goToAndPlay(0, true);
        });
    }, 2000);
    setTimeout(() => {
        ops.forEach((op) => {
            op.classList.remove("in");
            op.classList.remove("anim");
            playerCont.classList.remove("in");
            playerCont.classList.remove("anim");
            op.addEventListener("click", () => {
                showdets(op);
            });
        });
    }, 3500);
});

async function showdets(elem) {
    if (main.classList.contains("cast") || main.classList.contains("more")) {
        cleaddets(elem.id).then((res) => {
            if (res == true) {
                return;
            }
            if (elem.id == "cast") {
                main.classList.add("cast");
                main.classList.add("animin");
                setTimeout(() => {
                    main.classList.remove("animin");
                }, 1000);
            }
            if (elem.id == "more") {
                main.classList.add("animin");
                main.classList.add("more");
                setTimeout(() => {
                    main.classList.remove("animin");
                }, 1000);
            }
            return;
        });
        return;
    }
    if (elem.id == "cast") {
        console.log("null");
        main.classList.add("animin");
        main.classList.add("cast");
        setTimeout(() => {
            main.classList.remove("animin");
        }, 800);
    }
    if (elem.id == "more") {
        console.log("null");
        main.classList.add("animin");
        main.classList.add("more");
        setTimeout(() => {
            main.classList.remove("animin");
        }, 800);
    }
}

async function cleaddets(clas) {
    return new Promise((res, rej) => {
        bool = false;
        if (main.classList.contains(clas)) {
            bool = true;
        }
        main.classList.add("animout");
        setTimeout(() => {
            main.classList.remove("more");
            main.classList.remove("cast");
            main.classList.remove("animout");
            res(bool);
        }, 800);
    });
}
