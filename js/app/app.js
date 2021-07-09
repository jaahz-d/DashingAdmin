$(document).ready(function(){
    $('.table tr > td:nth-child(5)').each(function() {  

      $(this).children("span").css({
        "font-weight" : "600",
        "font-size" : "0.9rem",
        "border-radius": "15px",
        "padding": "0.2em 0.5em 0.2em 0.5em"
      });

      if($(this).children("span").html() === "COMPLETED"){       
         $(this).children("span").css({
              "background-color":"rgb(198, 246, 213)",
              "color" : "rgb(39, 103, 73)"            
         }); 
     } 
     else if($(this).children("span").html() === "PENDING"){       
         $(this).children("span").css({
              "background-color":"rgb(254, 235, 200)",
              "color" : "rgb(186, 71, 33)"            
         }); 
     } 
     else if($(this).children("span").html() === "PROCESSING"){       
         $(this).children("span").css({
              "background-color":"rgb(190, 227, 248)",
              "color" : "rgb(44, 82, 130)"            
         }); 
     }      
    });
  
  });