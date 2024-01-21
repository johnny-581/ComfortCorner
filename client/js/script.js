var myArray = ["Remember there are many as good as you but nobody better!",  
"people's faces don't tell their cases",
"Don’t forget who you are and where you came from. Don’t get too emotional over little things. Don’t. Quit until you win the grand prize",
"You can either be crushed by a horrific event and lose your sanity, your family and your life. Or, you can take this pain that was thrust upon you, to propel into greatness. You can make it through this. I know it’s hard.",
"To anyone out there who’s hurting — it’s not a sign of weakness to ask for help. It’s a sign of strength",
"Suicide is the last attempt of re-emergence of the will of life.",
"The option to stop but the decision to keep going.",
"Do not let bitterness take root, lest she strangle you.",
"Though no one can go back and make a brand new start, anyone can start now and make a brand new ending.",
"Suicide is beneath you – avoid past memories and meditate in the present moment."
]

function change_quote() {
    document.querySelector("button").innerHTML = 
    myArray[Math.floor(Math.random()*myArray.length)];
}

// window.onload = function() {
//     const leftImages = ["images/frame_03_delay-0.1s.png", "images/frame_04_delay-0.1s.png", "images/frame_05_delay-0.1s.png", "images/frame_06_delay-0.1s.png", "images/frame_07_delay-0.1s.png", "images/frame_08_delay-0.1s.png", "images/frame_09_delay-0.1s.png", "images/frame_10_delay-0.1s.png", "images/frame_11_delay-0.1s.png", "images/frame_12_delay-0.1s.png", "images/frame_13_delay-0.1s.png"]; // Add your image file names here
//     const rightImages = ["images/frame_03_delay-0.1s.png", "images/frame_04_delay-0.1s.png", "images/frame_05_delay-0.1s.png", "images/frame_06_delay-0.1s.png", "images/frame_07_delay-0.1s.png", "images/frame_08_delay-0.1s.png", "images/frame_09_delay-0.1s.png", "images/frame_10_delay-0.1s.png", "images/frame_11_delay-0.1s.png", "images/frame_12_delay-0.1s.png", "images/frame_13_delay-0.1s.png"]; // Add your image file names here
//     const interval = 500; // Interval in milliseconds (1000ms = 1s)

//     const leftDiv = document.getElementById('leftImages');
//     const rightDiv = document.getElementById('rightImages');

//     leftImages.forEach(img => {
//         let imageElement = document.createElement('img');
//         imageElement.src = img;
//         leftDiv.appendChild(imageElement);
//     });

//     rightImages.forEach(img => {
//         let imageElement = document.createElement('img');
//         imageElement.src = img;
//         rightDiv.appendChild(imageElement);
//     });

//     let currentImageIndex = 0;

//     setInterval(() => {
//         const leftChildren = leftDiv.children;
//         const rightChildren = rightDiv.children;

//         if (currentImageIndex > 0) {
//             leftChildren[currentImageIndex - 1].style.display = 'none';
//             rightChildren[currentImageIndex - 1].style.display = 'none';
//         }

//         leftChildren[currentImageIndex].style.display = 'block';
//         rightChildren[currentImageIndex].style.display = 'block';

//         currentImageIndex++;

//         if (currentImageIndex >= leftImages.length) {
//             currentImageIndex = 0;
//         }
//     }, interval);
// };
