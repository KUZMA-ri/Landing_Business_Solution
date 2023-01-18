document.addEventListener('DOMContentLoaded', () => {

	// Swiper
	const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        autoplay: true,
        effect: "fade",
        draggable: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    // -----------------------------------------------

    // Navbar (add bg-color on scroll)
    const navbar = document.querySelector(".navbar");
	
	document.addEventListener("scroll", () => {
		if (document.documentElement.scrollTop > 1) {
            navbar.classList.add("navbar_has-bg");

		} else {
            navbar.classList.remove("navbar_has-bg");
		}
	});

})
