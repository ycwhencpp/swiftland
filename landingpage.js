                /// for displaying a dailouge box
                document.addEventListener("DOMContentLoaded",function(){
                    document.querySelector("#submit").addEventListener("click",function(){
                  let name=document.querySelector("#name");
                  if(name.value!=0)
                  {
                   alert(`Welcome ${name.value.toUpperCase()}!`);
                  }
                  else{
                      alert("welcome the unknown guy!!");
                  }
                   }) ;

               /// for toogling all the content hidden on mouse click
                 let is_visible= true;
                  document.querySelector("html").addEventListener("click",function(){



                   document.getElementById("submit").style.visibility= is_visible ? "visible": "hidden";
                   document.getElementById("name").style.visibility= is_visible ? "visible": "hidden";
                   document.getElementById("heading").style.visibility=is_visible ? "visible": "hidden"; });


                   /// for dropping h1 text in fancy way
               let h1=document.querySelector("#heading");
                let h1_value=h1.textContent;
                let h1_split=h1_value.split("");
                 h1.textContent ="";
                for(let i=0;i<h1_split.length;i++){

                    h1.innerHTML += "<span>" + h1_split[i] + "</span>" ;
                }



                let char=0;
                let time_interval = setInterval(ontick,50);
                function ontick(){
                    let span = h1.querySelectorAll("span")[char];
                    span.classList.add("design");
                    char++;
                    if(char===h1_split.length){
                        complete();
                        return;
                    }
                }

                function complete(){
                    clearInterval(time_interval);
                    time_interval=null;
                }


         });

