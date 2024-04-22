function rockFunction(){
    var randomNum = Math.floor((Math.random()*3)+1);
    
    if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/rock.jpg";
        document.getElementsByClassName("img1")[0].src="images/rock.jpg";
        document.querySelector("h1").innerHTML="you tie🟥";
    }
    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/paper.jfif";
        document.getElementsByClassName("img1")[0].src="images/rock.jpg";
        document.querySelector("h1").innerHTML="you lose🟥";
    }
    else if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.png";
        document.getElementsByClassName("img1")[0].src="images/rock.jpg";
        document.querySelector("h1").innerHTML="🟥you win";
    }
   
    }

function paperFunction(){
        var randomNum = Math.floor((Math.random()*3)+1);
        
        if(randomNum==1){
            document.getElementsByClassName("img2")[0].src="images/rock.jpg";
            document.getElementsByClassName("img1")[0].src="images/paper.jfif";
            document.querySelector("h1").innerHTML="🟥you win";
        }
        else if(randomNum==2){
            document.getElementsByClassName("img2")[0].src="images/paper.jfif";
            document.getElementsByClassName("img1")[0].src="images/paper.jfif";
            document.querySelector("h1").innerHTML="you tie🟥";
        }
        else if(randomNum==3){
            document.getElementsByClassName("img2")[0].src="images/scissors.png";
            document.getElementsByClassName("img1")[0].src="images/paper.jfif";
            document.querySelector("h1").innerHTML="you lose🟥";
        }
       
        }

 function scissorsFunction(){
            var randomNum = Math.floor((Math.random()*3)+1);
            
            if(randomNum==1){
                document.getElementsByClassName("img2")[0].src="images/rock.jpg";
                document.getElementsByClassName("img1")[0].src="images/scissors.png";
                document.querySelector("h1").innerHTML="you lose🟥";
            }
            else if(randomNum==2){
                document.getElementsByClassName("img2")[0].src="images/paper.jfif";
                document.getElementsByClassName("img1")[0].src="images/scissors.png";
                document.querySelector("h1").innerHTML="🟥you win";
            }
            else if(randomNum==3){
                document.getElementsByClassName("img2")[0].src="images/scissors.png";
                document.getElementsByClassName("img1")[0].src="images/scissors.png";
                document.querySelector("h1").innerHTML="you tie🟥";
            }
           
            }
    
















