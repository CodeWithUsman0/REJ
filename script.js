function locoScroll() {
	gsap.registerPlugin(ScrollTrigger);
	const locoScroll = new LocomotiveScroll({
		el: document.querySelector("#main"),
		smooth: true
	});

	locoScroll.on("scroll", ScrollTrigger.update);
	ScrollTrigger.scrollerProxy("#main", {
		scrollTop(value) {
			return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
		},
		getBoundingClientRect() {
			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
		},
		pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
	});

	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
	ScrollTrigger.refresh();
}
locoScroll()

var tl = gsap.timeline()

tl.from("#loader h3", {
	x: 40,
	opacity: 0,
	duration: 1,
	stagger: 0.1
})

tl.to("#loader h3", {
	opacity: 0,
	y: -40,
	duration: 1,
	stagger: 0.1,
})

tl.to("#loader", {
	opacity: 0,
})

tl.to("#loader", {
	display: "none"
})

tl.from("#part1-content h1 span", {
	y: 100,
	opacity: 0,
	stagger: 0.1,
	duration: 0.5,
	delay: 0.5
})

function cursorEffect() {
	var p1c = document.querySelector("#part1-content");
	var cursor = document.querySelector("#cursor");

	p1c.addEventListener("mousemove", function (dets) {
		gsap.to(cursor, {
			x: dets.x,
			y: dets.y,
		})
	})

	p1c.addEventListener("mouseenter", function () {
		gsap.to(cursor, {
			scale: 1,
			opacity: 1
		})
	})

	p1c.addEventListener("mouseleave", function () {
		gsap.to(cursor, {
			scale: 0,
			opacity: 0
		})
	})
}
cursorEffect()

function p2cursorEffect() {
	var p4b = document.querySelector("#part4-bottom");
	var p4cursor = document.querySelector("#part4-cursor");

	p4b.addEventListener("mousemove", function (dets) {
		gsap.to(p4cursor, {
			x: dets.x,
			y: dets.y,
		})
	})

	p4b.addEventListener("mouseenter", function () {
		gsap.to(p4cursor, {
			scale: 1,
			opacity: 1
		})
	})

	p4b.addEventListener("mouseleave", function () {
		gsap.to(p4cursor, {
			scale: 0,
			opacity: 0
		})
	})
}
p2cursorEffect()

function Part2Animation() {
	gsap.from("#elem h1", {
		y: 120,
		stagger: 0.2,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: "#part2",
			scroller: "#main",
			start: "top 40%",
			end: "top 37%",
			opacity: 1,
			scrub: 2,
		}
	})
}
Part2Animation()

function Part4Animation() {
	gsap.from("#part4-elem h1", {
		y: 120,
		stagger: 0.2,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: "#part4",
			scroller: "#main",
			start: "top 40%",
			end: "top 37%",
			opacity: 1,
			scrub: 2,
		}
	})
}
Part4Animation()

function Part5Animation() {
	gsap.from("#part5-elem h1", {
		y: 120,
		stagger: 0.2,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: "#part5",
			scroller: "#main",
			start: "top 40%",
			end: "top 37%",
			opacity: 1,
			scrub: 2,
		}
	})
}
Part5Animation()

function sliderAnimation() {
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
	});
}
sliderAnimation()

function footerAnimation() {
	gsap.from("#footer-bottom h1 span", {
		y: -100,
		opacity: 0,
		stagger: 0.1,
		duration: 0.5,
		delay: 3,
		scrollTrigger: {
			trigger: "#footer",
			scroller: "#main",
			start: "top 40%",
			end: "top 37%",
			scrub: 4,
		}
	})
}
footerAnimation()