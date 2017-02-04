 window.onload=function() {
     const a = document.getElementById.bind(document) ;
     const  home = a("home");
     const info = a("personinfo") ;
     const skill = a("skills") ;
     const exp = a("experience") ;
     const obj = a("objective") ;
     const ass = a("assessment") ;
     const infocont = a("infocont") ;
     const skillcont = a("skillcont") ;
     const expcont = a("expcont") ;
     const objcont = a("objcont") ;
     const asscont = a("asscont") ;
     const asstext = a("asstext") ;
     const backput1 = a("backput1");
     const backput2 = a("backput2");
     const backput3 = a("backput3");
     const backput4 = a("backput4");
     const backput5 = a("backput5");
     const selects = a("selects");
     const starts = a("starts");
     const runs = a("runs");
     const longshorts = a("longshorts");
     const selecteds = a("selecteds");
     const deepshorts = a("deepshorts");
     const  spanmove1 = a("spanmove1");
     const  spanmove2 = a("spanmove2");
     const  spanmove3 = a("spanmove3");
     const  spanmove4 = a("spanmove4");
     const  spanmove5 = a("spanmove5");
     var flag =true;
     info.addEventListener('touchstart', function () {
         infocont.style.left = "0%";
         infocont.style.top = "0%";
         selects.play()
     });
     skill.addEventListener('touchstart',function(){
         skillcont.style.left="0%";
         skillcont.style.top="0%";
         starts.play();
         downTime()
         flag=false
     });
     exp.addEventListener('touchstart',function(){
         expcont.style.left="0%";
         expcont.style.top="0%";
         runs.play()
     });
     obj.addEventListener('touchstart',function(){
         objcont.style.left="0%";
         objcont.style.top="0%";
         longshorts.play();
         spanmove1.style.animation="spanout 500ms  linear 10ms forwards";
     });

     spanmove1.addEventListener("webkitAnimationEnd",function(){
         spanmove2.style.animation="spanout 1000ms  linear 10ms forwards"
     })
     spanmove2.addEventListener("webkitAnimationEnd",function(){
         spanmove3.style.animation="spanout 100ms  linear 10ms forwards"
     })
     spanmove3.addEventListener("webkitAnimationEnd",function(){
         spanmove4.style.animation="spanout 300ms  linear 300ms forwards"
     })
     spanmove4.addEventListener("webkitAnimationEnd",function(){
         spanmove5.style.animation="spanout 2500ms  linear 10ms forwards"
     })
     ass.addEventListener('touchstart',function(){
         asscont.style.left="0%";
         asscont.style.top="0%";
         selecteds.play();
         asstext.style.opacity=1;
         asscont.style.opacity=1;
         asscont.style.zIndex=7;
     });

    //for ( var i = 1;i++;i<6) {
    //    "backput"+i+".addEventListener('backput"+i+"',function(){home.style.left='0%' home.style.top='0%'})"
    //}
    // console.log(backput1);      怎么在循环里拼接字符串？
     backput1.addEventListener('touchstart',function(){
         infocont.style.left="0%";
         infocont.style.top="100%";
         deepshorts.play();

     });
     backput2.addEventListener('touchstart',function(){
         skillcont.style.left="0%";
         skillcont.style.top="-200%";
         deepshorts.play();
         flag=true;

     });
     backput3.addEventListener('touchstart',function(){
         expcont.style.left="-100%";
         expcont.style.top="0%";
         deepshorts.play();
     });
     backput4.addEventListener('touchstart',function(){
         objcont.style.left="100%";
         objcont.style.top="0%";
         deepshorts.play();
         spanmove1.style.animation="";
         spanmove2.style.animation="";
         spanmove3.style.animation="";
         spanmove4.style.animation="";
         spanmove5.style.animation="";


     });
     backput5.addEventListener('touchstart',function(){
         asscont.style.opacity=0;
         asstext.style.opacity=0;
         asscont.style.zIndex=1;

         deepshorts.play();
     });


     /*倒计时*/
     function downTime(){
         var time =26 * 100+56;
         var skTime = document.querySelector('.bgbox3');
         var spans = skTime.querySelectorAll('span');
         var timer = setInterval(function(){
             time -- ;
             if(flag){
                 clearInterval(timer);
                 return false;
             }
             var m = Math.floor((time%3600)/60);
             var s = time%100;
                     /*渲染*/
             //spans[0].innerHTML = Math.floor(h/10);
             //spans[1].innerHTML = h%10;

             spans[3].innerHTML = Math.floor(m/10);
             spans[4].innerHTML = m%10;

             spans[6].innerHTML = Math.floor(s/10);
             spans[7].innerHTML = s%10;
         },20);

     }

 }

