gsap.to(".img1 img",{


    marginTop: "0vw",
    height: "100vw",
    width:"100vw",

    marginLeft: "0vw",

scrollTrigger:{
trigger:".page2 .img1 img",
scroller:"body",
// markers:"true",
start:"30%",
end:"30%",
scrub:2
}



})



gsap.to(".img2 img",{


    marginTop: "-25vw",
    height: "100vw",
    width:"100vw",
    
    marginLeft: "0vw",

    scrollTrigger:{
        trigger:".page2 .img1 img",
        scroller:"body",
        // markers:"true",
        start:"30%",
        end:"30%",
        scrub:2
        }
        



})



gsap.to(".img3 img",{


    marginTop: "-51vw",
    height: "100vw",
    width:"100vw",
    
    marginLeft: "0vw",

    scrollTrigger:{
        trigger:".page2 .img1 img",
        scroller:"body",
        // markers:"true",
        start:"30%",
        end:"30%",
        scrub:2
        }
        

        



})







var a=document.querySelector("#f")
var b=document.querySelector("#s")
var c=document.querySelector("#t")
var d=document.querySelector(".con3")
var page6=document.querySelector(".page6")

a.addEventListener("mouseover",function(){
    gsap.to(".scon2",
    {

        x:1869,

backgroundColor:"white",


    })
    gsap.to("#o,.abcd",{
        color:"black",
      
    })


})







a.addEventListener("mouseleave",function(){
    gsap.to(".scon2",
    {

        x:-1869,

backgroundColor:"white",


    })
    gsap.to("#o,.abcd",{
        color:"white",
        
    })


})







b.addEventListener("mouseover",function(){
    gsap.to(".scon3",
    {

        x:1869,

backgroundColor:"white",


    })
    gsap.to("#p,.abcde",{
        color:"black",
      
    })
})



b.addEventListener("mouseleave",function(){
    gsap.to(".scon3",
    {

x:-1869,

backgroundColor:"white",


    })
    gsap.to("#p,.abcde",{
        color:"white",
      
    })


})







c.addEventListener("mouseover",function(){
    gsap.to(".scon4",
    {

x:1869,

backgroundColor:"white",


    })
    gsap.to("#b,.abcdef",{
        color:"black",
      
    })


})





c.addEventListener("mouseleave",function(){
    gsap.to(".scon4",
    {

x:-1869,

backgroundColor:"white",


    })
    gsap.to("#b,.abcdef",{
        color:"white",
      
    })


})



gsap.to(".border",{
height:"225vw",
width:"225vw",
marginLeft:"-50vw",

scrollTrigger:{
    trigger:".page6",
    scroller:"body",
    // markers:"true",
    start:"top 10%",
    end:"top 10%",
    scrub:2


}

})


gsap.to(".border h1, .border h3",{
   opacity:1,
    
    
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        // markers:"true",
        start:"top 10%",
        end:"top 10%",
        scrub:2
    
    
    }
    
    })
            
    gsap.to(".border",{
        
        marginLeft:"-50vw",
        marginTop:"-130vw",
        
        scrollTrigger:{
            trigger:".page7",
            scroller:"body",
            // markers:"true",
            start:"top 90%",
            end:"top 90%",
            scrub:2
        
        
        }
        
        })


        gsap.to(".page6 img",{
        
            marginLeft:"-1vw",
            marginTop:"10vw",
            
            scrollTrigger:{
                trigger:".page7",
                scroller:"body",
                // markers:"true",
                start:"top 90%",
                end:"top 90%",
                scrub:2
            
            
            }
            
            })


            gsap.to(".border h1, .border h3",{
        
                opacity:0,
                
                scrollTrigger:{
                    trigger:".page7",
                    scroller:"body",
                    // markers:"true",
                    start:"top 95%",
                    end:"top 95%",
                    scrub:2
                
                
                }
                
                })
                gsap.to(".okay",{
        
                    opacity:1,
                    marginTop:"42vw",
                    
                    scrollTrigger:{
                        trigger:".page7",
                        scroller:"body",
                        // markers:"true",
                        start:"top 95%",
                        end:"top 95%",
                        scrub:2
                    
                    
                    }
                    
                    })



                  


                            gsap.to(".okay",{
        
                               opacity:0,
                                
                                scrollTrigger:{
                                    trigger:".page8",
                                    scroller:"body",
                                    // markers:"true",
                                    start:"top 16%",
                                    end:"top 16%",
                                    scrub:2
                                
                                
                                }
                                
                                }) 




                         



                                    gsap.to(".border",{
        
                                        opacity:0,
                                         
                                         scrollTrigger:{
                                             trigger:".page9",
                                             scroller:"body",
                                            //  markers:"true",
                                             start:"top 26%",
                                             end:"top 26%",
                                             scrub:2
                                         
                                         
                                         }
                                         
                                         }) 


                                     


                                             gsap.to(".page6 img",{
        
                                                opacity:1,
                                                marginTop:"60vw",
                                                 
                                                 scrollTrigger:{
                                                     trigger:".page9",
                                                     scroller:"body",
                                                    //  markers:"true",
                                                     start:"top 26%",
                                                     end:"top 26%",
                                                     scrub:2
                                                 
                                                 
                                                 }
                                                 
                                                 }) 

                                                 page6.addEventListener("touchstart",function(){
                                                    gsap.to(".border",{
                                                        height:"925vw",
                                                        width: "925vw",
                                                        marginLeft:"-425vw",
                                                        marginTop:"-220vw"
                                                    })

                                                 })


                                                 page6.addEventListener("touchend",function(){
                                                    gsap.to(".border",{
                                                        height:"25vw",
                                                        width: "25vw",
                                                        marginLeft:"-425vw",
                                                        marginTop:"-220vw"
                                                    })

                                                 })















                                                     gsap.to(".img11 img",{


                                                        marginTop: "0vw",
                                                        height: "100vw",
                                                        width:"100vw",
                                                   opacity:0,
                                                        marginLeft: "-30vw",
                                                    
                                                    scrollTrigger:{
                                                    trigger:".page22 .img11 img",
                                                    scroller:"body",
                                                    // markers:"true",
                                                    start:"top 10%",
                                                    end:"top 10%",
                                                    scrub:2
                                                    }
                                                    
                                                    
                                                    
                                                    })
                                                    
                                                    
                                                    
                                                    gsap.to(".img22 img",{
                                                    
                                                    
                                                        marginTop: "-25vw",
                                                        height: "100vw",
                                                        width:"100vw",
                                                        
                                                        marginLeft: "0vw",
                                                    
                                                        scrollTrigger:{
                                                            trigger:".page22 .img11 img",
                                                            scroller:"body",
                                                            // markers:"true",
                                                            start:"top 10%",
                                                            end:"top 10%",
                                                            scrub:2
                                                            }
                                                            
                                                    
                                                    
                                                    
                                                    })
                                                    
                                                    
                                                    
                                                    gsap.to(".img33 img",{
                                                    
                                                    
                                                        marginTop: "-131vw",
                                                        height: "100vw",
                                                        width:"100vw",
                                                        opacity:0,
                                                        marginLeft: "0vw",
                                                    
                                                        scrollTrigger:{
                                                            trigger:".page22 .img11 img",
                                                            scroller:"body",
                                                            // markers:"true",
                                                            start:"top 10%",
                                                            end:"top 10%",
                                                            scrub:2
                                                            }
                                                            
                                                    
                                                            
                                                    
                                                    
                                                    
                                                    })
                                                    
                                                    a.addEventListener("mouseover",function(){
                                                        gsap.to(".scon21",
                                                        {
                                                    
                                                            x:"100vw",
                                                    
                                                    backgroundColor:"white",
                                                    
                                                    
                                                        })
                                                        gsap.to("#o,.abcd",{
                                                            color:"black",
                                                          
                                                        })
                                                    
                                                    
                                                    })
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    a.addEventListener("mouseleave",function(){
                                                        gsap.to(".scon21",
                                                        {
                                                    
                                                            x:"-100vw",
                                                    
                                                    backgroundColor:"white",
                                                    
                                                    
                                                        })
                                                        gsap.to("#o,.abcd",{
                                                            color:"white",
                                                            
                                                        })
                                                    
                                                    
                                                    })
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    b.addEventListener("mouseover",function(){
                                                        gsap.to(".scon31",
                                                        {
                                                    
                                                            x:"100vw",
                                                    
                                                    backgroundColor:"white",
                                                    
                                                    
                                                        })
                                                        gsap.to("#p,.abcde",{
                                                            color:"black",
                                                          
                                                        })
                                                    })
                                                    
                                                    
                                                    
                                                    b.addEventListener("mouseleave",function(){
                                                        gsap.to(".scon31",
                                                        {
                                                    
                                                    x:"-100vw",
                                                    
                                                    backgroundColor:"white",
                                                    
                                                    
                                                        })
                                                        gsap.to("#p,.abcde",{
                                                            color:"white",
                                                          
                                                        })
                                                    
                                                    
                                                    })
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    c.addEventListener("mouseover",function(){
                                                        gsap.to(".scon41",
                                                        {
                                                    
                                                    x:"100vw",
                                                    
                                                    backgroundColor:"white",
                                                    
                                                    
                                                        })
                                                        gsap.to("#b,.abcdef",{
                                                            color:"black",
                                                          
                                                        })
                                                    
                                                    
                                                    })
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    c.addEventListener("mouseleave",function(){
                                                        gsap.to(".scon41",
                                                        {
                                                    
                                                    x:"-100vw",
                                                    
                                                    backgroundColor:"white",
                                                    
                                                    
                                                        })
                                                        gsap.to("#b,.abcdef",{
                                                            color:"white",
                                                          
                                                        })
                                                    
                                                    
                                                    })
                                                    
                                                    var crsr=document.querySelector(".crsr")
                                                    var main=document.querySelector(".main")
                                                    main.addEventListener("mousemove",function(dets){
                                                      crsr.style.left=dets.x+"px"
                                                      crsr.style.top=dets.y+"px"
                                                      
                                                      
                                                      })



                                                      page6.addEventListener("mouseenter",function(){
                                                     crsr.style.height="40px"
                                                     crsr.style.width="40px"
                                                     crsr.style.display="flex"
                                                     crsr.style.alignItems="center"
                                                     crsr.style.justifyContent="center"
                                                        crsr.innerHTML=`<i class="ri-add-line"></i>`
                                                      })


                                                      page6.addEventListener("mouseleave",function(){
                                                      
                                                        crsr.style.height="20px"
                                                        crsr.style.width="20px"
                                                        crsr.style.display="flex"
                                                        crsr.style.alignItems="center"
                                                        crsr.style.justifyContent="center"
                                                        crsr.innerHTML=` `
                                                         })

                                                         