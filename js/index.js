window.onload = function(){


    const welcome = document.querySelector("#welcome");

    welcome.style.marginLeft = '6.3%';

    const intro = document.querySelector("#intro");

    intro.style.marginLeft = '0%';

    setTimeout(() => {
        intro.style.color = '#b9b7b7';
    }, 1500);
    //-----------------------Animation for the project cards github icon.-----------------
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

    //----------------Animation for the rocket------------------------------
    const rocket = document.querySelector("#rocket");
    const space = document.querySelector("#space");
    const text_space = document.querySelector("#text-space");
    const astronaut = document.querySelector("#astronaut");

    space.addEventListener("mouseover", () =>{
        rocket.style.animation = "leave 4s";
        setTimeout(function(){
            rocket.style.display = "none";          
        },1000);

        setTimeout(function(){  
            text_space.style.display = "block";
            space.style.flexDirection = "column";
            space.style.JustifyContent = "center";
            space.style.alignItems = "center";
            astronaut.style.visibility= "visible";
        },1500);

        setTimeout(function(){  
            //astronaut.style.animation = "appear 1s";
            astronaut.style.display = "block";
                       
        },1000);
    })

    //----------------Copy email to clipboard------------------------------

    const gmail = document.querySelector('.gmail');
    const buttonEmail = document.querySelector('.email');

    gmail.addEventListener('mouseenter', () =>{
        buttonEmail.style.backgroundColor = "#00B567";
    })
    gmail.addEventListener('mouseleave', () =>{
        if(buttonEmail.innerHTML != 'Copied!')
        buttonEmail.style.backgroundColor = "#424242";
      
    })

    gmail.addEventListener('click', () =>{
        buttonEmail.innerHTML = `Copied!`;
        buttonEmail.style.lineHeight = '1.4rem';
        buttonEmail.style.backgroundColor = "#00B567";
        //buttonEmail.style.height = "10vw";
        navigator.clipboard.writeText('pablomenordeonate@gmail.com');
    })
    //-----------------PHONE MENU------------------------------

    const menuIcon = document.querySelector('.material-icons.menu');
    const menu = document.querySelector('.menu-phone');
    const linksMenu = document.querySelectorAll('.linkMenu');
    let opened = false;


    menuIcon.addEventListener('click', ()=>{
    // menu.style.visibility = 'visible';
        if(opened){
            menu.classList.remove('open-menu');
            opened= false;
        }
        else if(!opened){
            menu.classList.add('open-menu');
            opened = true;
        }
            
    })

    linksMenu.forEach(link =>
        link.addEventListener('click', ()=>{
        menu.classList.remove('open-menu');
    }))

    //-----------------MEDIA QUERIES------------------------------
    const introP = document.querySelector('#intro-p');

    if (window.matchMedia("(max-width: 400px)").matches) {

        introP.innerHTML = "Hi! I'm Pablo, a junior web developer based in Madrid."
    }
    else{
        introP.innerHTML = `Hi! I'm Pablo, a junior web developer based in Madrid.
        I love creating intuitive and interactive user experiences,
        I'm highly motivated and willing to learn new technologies.`
    }
    
  

}