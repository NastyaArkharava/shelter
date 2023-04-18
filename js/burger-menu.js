(function() {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav');
	const body = document.body;

	burger.addEventListener('click', toggleNav);
	nav.addEventListener('click', closeNav);
	window.addEventListener('resize', removeNav);

	function toggleNav () {
		nav.classList.toggle('nav_active');
		burger.classList.toggle('burger_active');
		body.classList.toggle('body_lock');
		if (body.classList.contains('body_lock')) {
			addOverflow();
		} else {
			removeOverflow();
		}
	}

	function addOverflow() {
		const overflow = document.createElement('div');
		overflow.classList.add('overflow');
		overflow.addEventListener('click', toggleNav);
		body.prepend(overflow);
	}

	function removeOverflow() {
		document.querySelector('.overflow').remove();
	}

	function closeNav(e) {
		if (e.target.closest('.nav__item')) {
			toggleNav();
		}
	}

	function removeNav() {
		if (document.body.clientWidth >= 768 && nav.classList.contains('nav_active')) {
			toggleNav();
		}
	}
}())