let img1=$(".cardPic");
var pics=["img/spencer-davis-WsP0YswAuyI-unsplash.jpg","img/ChichagoStyleC.jpg","img/hemant-latawa-IfQlwNqJqV8-unsplash.jpg"];
completed=false;




function switchPics(){
            count=0;
      
            setInterval(() => {
                if(count===3){
                    count=0;
                }
                if(count===0){
                    img1.attr("src",pics[0]);
                    document.querySelector(".card-text").textContent=` Our appetizers are to die for!`;
                }
                else if(count===1){
                    img1.attr("src",pics[1]);      
                    document.querySelector(".card-text").textContent=`You Gotta Love that chesse stretch!`;
                }
                else if (count===2){
                    img1.attr("src",pics[2]);
                    document.querySelector(".card-text").textContent=`Made with only the best ingredients!`;
                }
               
                 
                count++;
               
            }, 3000);  
        
   
   
};  
 function myFunction(){
     setInterval(switchPics,2000);
 }

switchPics();




