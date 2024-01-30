var carousel=document.querySelector("img");
var images=["images/2.jpg","images/3.jpg","images/4.jpg","images/1.jpg"]
var num=4;


function next(){
    num++;
   console.log("step1");
   console.log( "num=",num);
    if(num>=images.length){
        num=0;
       console.log("step2");
       console.log("num",num);
       carousel.src=images[num]
        console.log("num",num);  
    }
    else{
       console.log("step3");
       carousel.src=images[num]
        console.log("num",num);

    }
                    
};
function back(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }

};