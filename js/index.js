window.onload = function(){
    
    const gitub_icon = document.querySelectorAll('.github');
    const source = document.querySelectorAll('.see-source');  

    gitub_icon.forEach(icon =>{
        icon.addEventListener('mouseover', () =>{
            icon.style.transform = "translateX(-70px)";
            source.forEach(pp =>{
                pp.style.transform = "scale(1)";

                pp.addEventListener('mouseout', () =>{
                    icon.style.transform = "translateX( 0px)";
                    pp.style.transform = "scale(0)";

                })
            })
           
        })
        
    })

}