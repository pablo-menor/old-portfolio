window.onload = function(){

    //Animation for the project cards github icon.
    function githubEffect(id){
        const g = document.querySelector(`.im${id}`);
        const p = document.querySelector(`.p${id}`);  
    
    
            g.addEventListener('mouseover', (e) =>{
                g.style.transition = "0.5s ease";
                p.style.transition = "0.8s ease";
                g.style.transform = "translateX(-74px)";
                p.style.transform = "scale(1)";
    
                p.addEventListener('mouseout', () =>{
                    g.style.transition = "1s ease";
                    p.style.transition = "0.8s ease";
                    g.style.transform = "translateX( 0px)";
                    p.style.transform = "scale(0)";
    
                })        
            }) 
    }

    githubEffect('1');
    githubEffect('2');
    githubEffect('3');

    //Animation for the rocket
    const rocket = document.querySelector("#rocket");
    const space = document.querySelector("#space");

    space.addEventListener("mouseover", () =>{
        rocket.style.animation = "leave 4s";
        setTimeout(function(){
            rocket.style.display = "none";
        },2000);
    
        
    })
}