let readMore = document.querySelector('#readm');
let aboutPara = document.querySelector('#aboutPara')

readMore.onclick = () =>{
    if (aboutPara.textContent == "As a game and web developer, I thrive on the fusion of creativity and technical expertise to build immersive digital experiences. My vision is a tapestry of design and code, where interactive narratives and dynamic functionalities come to life. The passion I hold for gaming fuels my innovation, driving me to navigate the complexities of coding and design to manifest my visions. With a deep commitment to user experience, I craft seamless and engaging interfaces that reflect my dedication and talent in the ever-evolving landscape of game and web development. ") {
        aboutPara.textContent = "Immersed within the multifaceted world of game and web development, I find myself at the nexus of creativity and technical expertise, where the marriage of these two forces allows me to sculpt immersive digital experiences. At the core of my work lies an intricate fusion of design and code, an artistic symphony where interactive narratives and dynamic functionalities converge to create a vibrant digital tapestry. It's my unwavering passion for gaming that propels my innovation, acting as a constant source of inspiration, urging me to explore and conquer the complexities inherent in coding and design. This relentless drive steers me through the labyrinth of challenges, guiding me to manifest the visions that stir my imagination. The process of development is more than just crafting lines of code or designing graphics; it's an ever-evolving journey. Each line of code represents a solution to a puzzle, a carefully chosen brushstroke contributing to a larger canvas that I meticulously craft. The canvas, in this case, becomes an interactive, dynamic world where users are not mere participants but protagonists in the stories I weave. Through meticulous attention to detail, I endeavor to build environments that captivate and engage, transcending mere functionality to evoke emotions and immerse users in unforgettable experiences. The development landscape is one of perpetual evolution, characterized by its ever-shifting terrain. This constantly changing environment demands not only technical expertise but also adaptability and a hunger for continuous learning. It's within this sphere that I tirelessly hone my skills, seeking out the latest technologies and industry trends to ensure that my work remains at the forefront of innovation.Furthermore, user experience is a pillar I uphold with utmost reverence. Crafting seamless and intuitive interfaces is not just a task but a testament to my dedication to user-centric design. I strive to anticipate user needs, to pre-empt their interactions, and to provide them with an experience that feels natural and immersive. The satisfaction of a user seamlessly navigating through a design, experiencing the fluidity of interaction, and feeling engaged with the product is a reward that continually drives my pursuit of excellence."
        readMore.textContent = 'Read Less'
    }
    else if (aboutPara.textContent == "Immersed within the multifaceted world of game and web development, I find myself at the nexus of creativity and technical expertise, where the marriage of these two forces allows me to sculpt immersive digital experiences. At the core of my work lies an intricate fusion of design and code, an artistic symphony where interactive narratives and dynamic functionalities converge to create a vibrant digital tapestry. It's my unwavering passion for gaming that propels my innovation, acting as a constant source of inspiration, urging me to explore and conquer the complexities inherent in coding and design. This relentless drive steers me through the labyrinth of challenges, guiding me to manifest the visions that stir my imagination. The process of development is more than just crafting lines of code or designing graphics; it's an ever-evolving journey. Each line of code represents a solution to a puzzle, a carefully chosen brushstroke contributing to a larger canvas that I meticulously craft. The canvas, in this case, becomes an interactive, dynamic world where users are not mere participants but protagonists in the stories I weave. Through meticulous attention to detail, I endeavor to build environments that captivate and engage, transcending mere functionality to evoke emotions and immerse users in unforgettable experiences. The development landscape is one of perpetual evolution, characterized by its ever-shifting terrain. This constantly changing environment demands not only technical expertise but also adaptability and a hunger for continuous learning. It's within this sphere that I tirelessly hone my skills, seeking out the latest technologies and industry trends to ensure that my work remains at the forefront of innovation.Furthermore, user experience is a pillar I uphold with utmost reverence. Crafting seamless and intuitive interfaces is not just a task but a testament to my dedication to user-centric design. I strive to anticipate user needs, to pre-empt their interactions, and to provide them with an experience that feels natural and immersive. The satisfaction of a user seamlessly navigating through a design, experiencing the fluidity of interaction, and feeling engaged with the product is a reward that continually drives my pursuit of excellence.") {
        aboutPara.textContent = 'As a game and web developer, I thrive on the fusion of creativity and technical expertise to build immersive digital experiences. My vision is a tapestry of design and code, where interactive narratives and dynamic functionalities come to life. The passion I hold for gaming fuels my innovation, driving me to navigate the complexities of coding and design to manifest my visions. With a deep commitment to user experience, I craft seamless and engaging interfaces that reflect my dedication and talent in the ever-evolving landscape of game and web development. '
        readMore.textContent = 'Read More'
    }
}

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');

        }
    })
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    nav.classList.toggle('active')
}


