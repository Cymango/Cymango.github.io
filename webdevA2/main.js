// hamburger
const HamburgerMenu = document.querySelector(".HamburgerMenu");
const HamburgerMenuButton = document.querySelector(".HamburgerMenuButton");
const HamburgerMenuButtonIconOpen = document.querySelector("#HamburgerMenuButtonIconOpen");
const HamburgerMenuButtonIconClose = document.querySelector("#HamburgerMenuButtonIconClose");

function toggleMenu() {
    if (HamburgerMenu.classList.contains("ShowMenu")) {
        HamburgerMenu.classList.remove("ShowMenu");
        HamburgerMenuButtonIconClose.style.display = "none";
        HamburgerMenuButtonIconOpen.style.display = "block";
    } else {
        HamburgerMenu.classList.add("ShowMenu");
        HamburgerMenuButtonIconClose.style.display = "block";
        HamburgerMenuButtonIconOpen.style.display = "none";
    }
}

HamburgerMenuButton.addEventListener("click", toggleMenu);














// human anatomy buttons
const HumanAnatomySection1Button = document.querySelector("#HumanAnatomySection1Button");
const HumanAnatomySection2Button = document.querySelector("#HumanAnatomySection2Button");
const HumanAnatomySection1 = document.querySelector("#HumanAnatomySection1");
const HumanAnatomySection2 = document.querySelector("#HumanAnatomySection2");
const HumanAnatomySection3 = document.querySelector("#HumanAnatomySection3");

let CurrentHumanAnatomySectionNumber = 1;

function ShowHumanAnatomySection() {
    switch (CurrentHumanAnatomySectionNumber) {
        case 1:
            HumanAnatomySection1.style.display = "block";
            HumanAnatomySection1.classList.add('HumanAnatomyStartAnimation');
            HumanAnatomySection2.style.display = "none";
            HumanAnatomySection2.classList.remove('HumanAnatomyStartAnimation');
            HumanAnatomySection3.style.display = "none";
            HumanAnatomySection3.classList.remove('HumanAnatomyStartAnimation');
            break;

        case 2:
            HumanAnatomySection1.style.display = "none";
            HumanAnatomySection1.classList.remove('HumanAnatomyStartAnimation');
            HumanAnatomySection2.style.display = "block";
            HumanAnatomySection2.classList.add('HumanAnatomyStartAnimation');
            HumanAnatomySection3.style.display = "none";
            HumanAnatomySection3.classList.remove('HumanAnatomyStartAnimation');
            break;

        case 3:
            HumanAnatomySection1.style.display = "none";
            HumanAnatomySection1.classList.remove('HumanAnatomyStartAnimation');
            HumanAnatomySection2.style.display = "none";
            HumanAnatomySection2.classList.remove('HumanAnatomyStartAnimation');
            HumanAnatomySection3.style.display = "block";
            HumanAnatomySection3.classList.add('HumanAnatomyStartAnimation');
            break;

        default:
            HumanAnatomySection1.style.display = "none";
            HumanAnatomySection2.style.display = "none";
            HumanAnatomySection3.style.display = "none";
    }
}

ShowHumanAnatomySection();

// go back
HumanAnatomySection1Button.addEventListener("click", function () {
    CurrentHumanAnatomySectionNumber--;
    if (CurrentHumanAnatomySectionNumber < 1) {
        CurrentHumanAnatomySectionNumber = 1;
    }

    ShowHumanAnatomySection();
});

// go next
HumanAnatomySection2Button.addEventListener("click", function () {
    CurrentHumanAnatomySectionNumber++;
    if (CurrentHumanAnatomySectionNumber > 3) {
        CurrentHumanAnatomySectionNumber = 3;
    }

    ShowHumanAnatomySection();
});









// subsection 1 images switching

const HumanAnatomySection1Image1 = document.querySelector("#HumanAnatomyImage1");
const HumanAnatomySection1Image2 = document.querySelector("#HumanAnatomyImage2");
let CurrentHumanAnatomySectionImageNumber = 2;

setInterval(function () {
    switch (CurrentHumanAnatomySectionImageNumber) {
        case 1:
            HumanAnatomySection1Image1.style.display = "inline-block";
            HumanAnatomySection1Image2.style.display = "none";
            break;
        case 2:
            HumanAnatomySection1Image1.style.display = "none";
            HumanAnatomySection1Image2.style.display = "inline-block";
            break;
        default:
            HumanAnatomySection1Image1.style.display = "inline-block";
            HumanAnatomySection1Image2.style.display = "none";
    }
    CurrentHumanAnatomySectionImageNumber++;
    if (CurrentHumanAnatomySectionImageNumber > 2) {
        CurrentHumanAnatomySectionImageNumber = 1;
    }
}, 1000);
















































// dynamic anatomy buttons
const DynamicPoses = document.querySelector("#DynamicPoses");
const DynamicPosesSection1Button = document.querySelector("#DynamicPosesSection1Button");
const DynamicPosesSection2Button = document.querySelector("#DynamicPosesSection2Button");
const DynamicPosesSection1 = document.querySelector("#DynamicPosesSection1");
const DynamicPosesSection2 = document.querySelector("#DynamicPosesSection2");
const DynamicPosesSectionExample = document.querySelectorAll(".DynamicPosesSectionExample");
const DynamicPosesSectionExampleButton = document.querySelector("#DynamicPosesSection1ExampleButton");
let ShowExample = false;

DynamicPosesSection1Button.addEventListener("click", function () {
    DynamicPosesSection1.style.display = "block";
    DynamicPosesSection1.classList.add('DynamicPosesStartAnimation');
    DynamicPosesSection1Button.classList.add('EnabledButton');

    DynamicPosesSection2.style.display = "none";
    DynamicPosesSection2.classList.remove('DynamicPosesStartAnimation');
    DynamicPosesSection2Button.classList.remove('EnabledButton');
});

DynamicPosesSection2Button.addEventListener("click", function () {
    DynamicPosesSection1.style.display = "none";
    DynamicPosesSection1.classList.remove('DynamicPosesStartAnimation');
    DynamicPosesSection1Button.classList.remove('EnabledButton');

    DynamicPosesSection2.style.display = "block";
    DynamicPosesSection2.classList.add('DynamicPosesStartAnimation');
    DynamicPosesSection2Button.classList.add('EnabledButton');

});

DynamicPosesSection1.style.display = "block";
DynamicPosesSection2.style.display = "none";



DynamicPosesSectionExampleButton.addEventListener("click", function () {
    if (ShowExample == false) {
        for (let i = 0; i < DynamicPosesSectionExample.length; i++) {
            DynamicPosesSectionExample[i].style.display = "block";
            DynamicPosesSectionExample[i].classList.add('DynamicPosesExampleStartAnimation');
        }
        DynamicPoses.classList.add('DynamicPosesExtendAnimation');
        ShowExample = true;
    }

    else {
        for (let i = 0; i < DynamicPosesSectionExample.length; i++) {

            DynamicPosesSectionExample[i].classList.add('DynamicPosesExampleResetAnimation');
            DynamicPoses.classList.add('DynamicPosesContractAnimation');

            setTimeout(function () {
                DynamicPosesSectionExample[i].classList.remove('DynamicPosesExampleStartAnimation');
                DynamicPosesSectionExample[i].classList.remove('DynamicPosesExampleResetAnimation');
                DynamicPoses.classList.remove('DynamicPosesExtendAnimation');
                DynamicPoses.classList.remove('DynamicPosesContractAnimation');
                DynamicPosesSectionExample[i].style.display = "none";
            }, 1200);
        }

        ShowExample = false;
    }

});

















































































































document.addEventListener("DOMContentLoaded", function () {

    const Canvas = document.getElementById("Canvas");
    const DrawingTools = document.getElementById("DrawingTools");
    const ctx = Canvas.getContext("2d");
    // canvas rendering context 2d, for you know, 2d canvas rendering

    function ResizeCanvas() {
        Canvas.width = window.innerWidth;
        Canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", ResizeCanvas);
    ResizeCanvas();

    let IsDrawing = false;
    let lineWidth = 5;
    let BrushColor = "#000000";

    const UndoStorage = [];
    const MaxUndo = 20;

    const audio = new Audio("audio/drawing.mp3");
    audio.loop = true;



    // undo
    function Undo() {
        if (UndoStorage.length > 0) {
            const ImageData = UndoStorage.pop(); // removes & returns last (highest index) value in the array, which is the most recent save state of the canvas to return to
            const Img = new Image(); // just creates a new image, duh
            Img.src = ImageData; // sets image source to the returned save state of canvas from previous .pop() function
            Img.onload = function () { // runs the anonymous function when the image loads, like defer
                ctx.clearRect(0, 0, Canvas.width, Canvas.height); // clear canvas
                ctx.drawImage(Img, 0, 0); // sets the cleared canvas to previous save state of canvas

                console.log("undo success");
            };
        }
    }



    // undo with keyboard input "z"

    window.addEventListener("keydown", function (Event) {
        if (Event.key == "z" || Event.key == "Z") {
            Undo();
        }
    });

    // on click on drawing tools
    DrawingTools.addEventListener("click", function (Event) {
        // clear canvas
        if (Event.target.id == "ClearCanvas") {
            ctx.clearRect(0, 0, Canvas.width, Canvas.height);

            console.log("clear canvas success");
        }

        // undo
        if (Event.target.id == "UndoCanvas") {
            Undo();

            console.log("undo canvas success");
        }
        
    });

    // change brush size & color
    DrawingTools.addEventListener("change", function (Event) {
        if (Event.target.id == "lineWidth") {
            lineWidth = Event.target.value;
            
            console.log("brush size change success, lineWidth = ", lineWidth);
        }

        if (Event.target.id == "stroke") {
            BrushColor = Event.target.value;
            console.log("brush color change success, ", BrushColor);
        }
    });



    // inputdown define
    function InputDown() {
        // undo section
        if (UndoStorage.length >= MaxUndo) {
            UndoStorage.shift(); // remove oldest store in storage
        }
        UndoStorage.push(Canvas.toDataURL()); // push index of store in storage

        // drawing section
        IsDrawing = true;

        // audio
        audio.play();

        console.log("canvas mouse is down");
    }
    // inputdown pc + mobile
    Canvas.addEventListener("mousedown", InputDown);
    Canvas.addEventListener("touchstart", InputDown);



    // inputup define
    function InputUp() {
        IsDrawing = false;
        ctx.stroke();
        ctx.beginPath();

        // audio
        audio.pause();
        audio.load();

        console.log("canvas mouse is up");
    }
    // inputup pc + mobile
    Canvas.addEventListener("mouseup", InputUp);
    Canvas.addEventListener("touchend", InputUp);



    // draw
    const Draw = function (Event) {
        if (!IsDrawing) {
            return;
        }

        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.strokeStyle = BrushColor;

        const rect = Canvas.getBoundingClientRect();

        const x = Event.clientX - rect.left;
        const y = Event.clientY - rect.top;
        
        ctx.lineTo(1/0.75 * x, 1/0.75 * y); // 1/0.75 because canvas scale is 75%
        ctx.stroke();

        console.log("drawing");
        console.log(Event.clientX, "-", rect.left, "=", x);
        console.log(Event.clientY, "-", rect.top, "=", y);
    };
    // draw pc + mobile
    Canvas.addEventListener("mousemove", Draw);
    Canvas.addEventListener("touchmove", Draw);
});
