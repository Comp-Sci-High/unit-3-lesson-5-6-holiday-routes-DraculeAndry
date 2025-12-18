/* ================= ELEMENTS ================= */
const carrotButton = document.getElementById('carrotButton');
const reaction = document.getElementById('reaction');
const bunnies = document.querySelectorAll('.bunny');
const canvas = document.getElementById('sparkleCanvas');
const ctx = canvas.getContext('2d');
const paradeBunnies = document.querySelectorAll('.parade-bunny');

/* ================= CANVAS SIZE ================= */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/* ================= SPARKLE PARTICLES ================= */
let particles = [];
const colors = ['#FFD1DC','#FFB6C1','#FFF0F5','#FF69B4','#FFF'];
for(let i=0;i<200;i++){
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
    });
}

function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* ================= BUNNY REACTIONS ================= */
const reactions = [
    "Bunny is hopping with joy! 🐰💖",
    "Bunny munches the carrot happily! 🥕😋",
    "Bunny wiggles its nose at you! 👃🐇",
    "Bunny does a little twirl! ✨🐰",
    "Bunny gives you a cute stare! 😍🐇"
];

carrotButton.addEventListener('click', () => {
    const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
    reaction.textContent = randomReaction;

    // Bunny shake
    bunnies.forEach(bunny => {
        bunny.classList.add('shake');
        setTimeout(() => bunny.classList.remove('shake'), 500);
    });
});

/* ================= BUNNY CLICK EVENT ================= */
bunnies.forEach(bunny => {
    bunny.addEventListener('click', () => {
        reaction.textContent = "Bunny loves your attention! 🐇💖";
        bunny.classList.add('shake');
        setTimeout(() => bunny.classList.remove('shake'), 500);
    });
});

/* ================= FALLING CARROTS ================= */
function createCarrot(){
    const carrot = document.createElement('div');
    carrot.classList.add('carrot');
    carrot.style.left = Math.random() * window.innerWidth + 'px';
    carrot.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(carrot);
    setTimeout(()=>carrot.remove(),5000);
}
setInterval(createCarrot, 700);

/* ================= BUNNY PARADE ================= */
paradeBunnies.forEach(bunny => {
    const speed = parseFloat(bunny.dataset.speed);
    bunny.style.animationDuration = (15 / speed) + 's';
});