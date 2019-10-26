var frame = document.getElementById('univers');
var frame_logo = frame.getElementById('logo');

frame_logo.onclick = function() { //LORSQUE L'ON CLIQUE
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
            translateY: 1500,
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
