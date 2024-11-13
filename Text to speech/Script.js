let Voice = new SpeechSynthesisUtterance();
const popUp = document.getElementById('textHere');

    

        function play(){
            let speech = document.getElementById('message').value;
            document.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                });

            
            Voice.lang = 'en';
            Voice.text = speech;

            window.speechSynthesis.speak(Voice);
            
            
        }

        function theme(){
            const body = document.body;
           body.classList.toggle('light-theme');
           body.classList.toggle('dark-theme');
          
           document.getElementById('message').style.backgroundColor='grey';
        }

        function stop(){
            if (Voice){
                window.speechSynthesis.cancel();
            }
        }

        function clearMsg(){
           let clearMsg = document.getElementById('message');

           clearMsg.value = "";
        }

        function floater(){
    
            popUp.style.display = "block";

            setTimeout(()=>{
                popUp.style.display = "none"
            }, 4000);

            
        }

        window.onload = function (){
                setTimeout(floater,1000)
            };

const music = [
    {
    Id: 1,
    Author: "Jade Formentera",
    Image: "",
    Audio: ""
    },

    {
        Id: 2,
        Author: "Jade Formentera",
        Image: "",
        Audio: ""
        },
]