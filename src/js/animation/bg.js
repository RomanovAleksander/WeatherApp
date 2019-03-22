import moon from "../../images/moon.png";
import cat from "../../images/cat.png";

export function moonAnimation() {
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let ballRadius = 18;
    let dx = 3;
    let dy = -3;
    let e = window.innerWidth;
    let t = window.innerHeight;
    let x = Math.floor(Math.random() * (e - 10 + 1)) + 10;
    let y = Math.floor(Math.random() * (t - 50 + 1)) + 10;
    let timer = 15;

    function ifResize() {
        window.addEventListener("resize", resizeChanged);
    }

    function resizeChanged() {
        e = window.innerWidth;
        t = window.innerHeight;
        canvas.width = e;
        canvas.height = t;
    }

    function drawBall() {
        canvas.width = e;
        canvas.height = t;

        const img = document.createElement('img');
        const circle = new Path2D();
        circle.arc(x, y, ballRadius, 0, Math.PI * 2);
        img.src = moon;
        ctx.fillStyle = 'transparent';
        ctx.fill(circle);
        ctx.drawImage(img, x - 12, y - 12);

        canvas.addEventListener('click', (event) => {
            // Check whether point is inside circle
            if (ctx.isPointInPath(circle, event.clientX, event.clientY)) {
                clearInterval(timer);
                img.src = cat;
                document.querySelector('.hide').classList.add('active');
                document.querySelector('.cat').classList.add('go');
            }
            else {
                clearInterval(timer);
                timer = setInterval(draw, 15);
                document.querySelector('.hide').classList.remove('active');
                document.querySelector('.cat').classList.remove('go');
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fill(circle);
            ctx.drawImage(img, x - 12, y - 12);
        });
        clearInterval(timer);
        timer = setInterval(draw, 15);
    }

    function draw() {
        drawBall();

        if (x + dx > canvas.width - ballRadius + ballRadius / 3 || x + dx < ballRadius - ballRadius / 3) {
            dx = -dx;
        }
        if (y + dy > canvas.height - ballRadius + ballRadius / 3 || y + dy < ballRadius - ballRadius / 3) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

    console.log('Try to catch the Moon');

    ifResize();
    draw();
}
