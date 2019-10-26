var btn = document.getElementById('wrapper'); // préférez utilisez un ID pour cliquez, ici on utilise une balise <a>
var iframe = document.getElementById('univers'); 
var logo = document.getElementById('logo');   
   
    btn.onclick = function() { //LORSQUE L'ON CLIQUE
        var morphing = anime({ // ANIMATION DU SVG 
        targets: '.polymorph',
        points: [
            { value: '0,1067.3 960,600.9 1920,1067.3 1920,1080 0,1080 '},
            { value: '0,0.6 960,0 1920,0 1920,1080 0,1080 '},
        ],
        easing: 'easeInOutExpo',
        duration: 1700,
        direction: 'alternate',
        })

        anime({ // LA SECTION 1 MONTE AVEC TOUT SON CONTENU
            targets:'.content',
            translateY: -1500,
            easing: 'easeInOutExpo',
            duration: 1850,
            delay: 755,
            loop: false,
        })

        anime({ //ANIMATION DE L'AVION
        targets: '.plane',
        rotate: {
            value: -90,
            duration: 200,
        },
        translateX: {
            value: 1500,
            duration: 2000,
        },
        delay: 200,
        loop: false,
        easing: 'easeInOutExpo',

        })
    };

    anime({ // ANIMATION DE L'AVION EN HAUT A GAUCHE
        targets: '.el',
        translateX: {
            value: 350,
            duration: 5000,
        },
        translateY: {
            value: -350,
            duration: 5000,
        },
        rotate: {
            value: -45,
            duration:0,
        },
        easing: 'easeInOutSine',
        delay: 2000,
        loop: true,
    });

    anime({ // ANIMATION BOULE MotifB
        targets: '.boule',
        keyframes: [
            {translateX:-850 },
            {translateX:-994 , translateY: -110},
            {translateY: -200},
        ],
        duration: 2500,
        easing: 'easeInOutExpo',
        loop: true
    });

    anime({ // ANIMATION BOULE LineB
        targets: '.boule2',
        keyframes: [
            {translateX: 780 , translateY: -700},
        ],
        duration: 2500,
        easing: 'easeInOutExpo',
        loop: true
    });

    anime({ // ANIMATION BOULE TOP LEFT
        targets: '.boule3',
        keyframes: [
            {translateX: 300, translateY: -300},
        ] ,
        duration:5000,
        easing: 'easeInOutExpo',
        loop: true,
    });

    
    function startButton() {
        iframe.style.display = 'block';
        anime({
            targets: 'iframe',
            translateY: -2000,
            duration: 3000,
            easing: 'easeInOutExpo',
            delay : 0,
        }) 
    };

    btn.addEventListener('click', function() {
        startButton();
    });



    


        
    // easing : 'easeInOutSine', 'easeInOutExpo', 'easeInOutQuad' */