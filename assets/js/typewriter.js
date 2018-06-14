var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('Film Production | Cinematography')
.pauseFor(2500)
.start();