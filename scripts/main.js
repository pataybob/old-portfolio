// Change Cursor
function changeCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.follower');

    let posX = 0,
        posY = 0

    let mouseX= 0,
        mouseY= 0



    TweenMax.to({}, 0.01, {
        repeat: -1,
        onRepeat:() =>{
            posX += (mouseX - posX) / 5
            posY += (mouseY - posY) / 5

            TweenMax.set(follower , {
                css:{
                    left:posX - 12,
                    top:posY -12
                }
            })

            TweenMax.set(cursor , {
                css:{
                    left:mouseX,
                    top:mouseY
                }
            })
        }

        })

        window.addEventListener('mousemove' , e => {
            mouseX= e.clientX
            mouseY= e.clientY
            console.log('mouseX , mouseY')
        })
}
changeCursor();


let container = document.querySelector(".anim-explode-container");
let svg = container.querySelector(".anim-explode");
let numberOfShapes = 10;

let shapes = [
	"M254 286.11a50 50 0 0050-50H204a50 50 0 0050 50z",
	"M255.5 271a20 20 0 10-20-20 20 20 0 0020 20zm0 30a50 50 0 10-50-50 50 50 0 0050 50z",
	"M248.8 202.17a8 8 0 019.4 0l40.6 29.5a8 8 0 012.9 8.94l-15.5 47.73a8 8 0 01-7.61 5.52h-50.18a8 8 0 01-7.61-5.52l-15.5-47.73a8 8 0 012.9-8.94z",
	"M307.5 250a50 50 0 11-50-50 50 50 0 0150 50",
	"M248.08 204.07a11.91 11.91 0 0116.84 0l30.59 30.59a11.91 11.91 0 11-16.85 16.85l-10.25-10.25v47.41a11.91 11.91 0 11-23.82 0v-47.41l-10.25 10.25a11.91 11.91 0 01-16.85-16.85z",
	"M234 237a22.5 22.5 0 0045 0h27.5a50 50 0 01-100 0z",
	"M258 202.5a12 12 0 00-12 12v26h-26a12 12 0 000 24h26v26a12 12 0 0024 0v-26h26a12 12 0 000-24h-26v-26a12 12 0 00-12-12z"
];

container.addEventListener("mouseenter", (e) => {
	let animatedShapes = [];

	for (var i = 0; i < numberOfShapes; i++) {
		let newElement = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path"
		);
		newElement.setAttribute("d", gsap.utils.random(shapes));
		newElement.style.fill = gsap.utils.random([
			"#8EF6E4",
			"#A2D5F2",
			"#D59BF6",
			"#EDB1F1"
		]);
		svg.appendChild(newElement);
		animatedShapes.push(newElement);
	}

	function killShapes() {
		animatedShapes.forEach((shape) => {
			svg.removeChild(shape);
		});
	}

	gsap.set(animatedShapes, {
		transformOrigin: "center",
		scale: "random(0.4, 0.8)"
	});

	gsap.to(animatedShapes, {
		onComplete: killShapes,
		keyframes: [
			{
				rotate: "random(180, -180)",
				x: "random([-150, -100, -200, 200, 100, 150])",
				y: "random([-150, -100, -200, 200, 100, 150])",
				ease: "expo.out",
				duration: 4,
				stagger: {
					amount: 0.1
				}
			},
			{ opacity: 0, delay: -3 }
		]
	});
});