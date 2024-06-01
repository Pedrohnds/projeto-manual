function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function toggleContent(id) {
    var content = document.getElementById(id);
    var allContents = document.querySelectorAll('.content');
    
    allContents.forEach(function(element) {
        if (element.id !== id && element.style.display === "block") {
            element.style.display = "none";
        }
    });

    // Alternar o estilo de exibição entre "none" e "block"
    content.style.display = (content.style.display === "block") ? "none" : "block";
}

function toggleSubtopic(id) {
    var subtopic = document.getElementById(id);
    var allSubtopics = document.querySelectorAll('.subtopic');
    
    allSubtopics.forEach(function(element) {
        if (element.id !== id) {
            element.style.display = "none";
        }
    });

    // Alternar o estilo de exibição entre "none" e "block"
    subtopic.style.display = (subtopic.style.display === "block") ? "none" : "block";
}

// Esta função está atribuída ao evento de rolagem, mas não faz nada no momento
function scrollFunction() {
    // Adicione o código que deseja executar ao rolar a página
}

// Atribuir a função de rolagem ao evento de rolagem da janela
window.onscroll = function() {
    scrollFunction();
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
    window.onscroll = function() {
        var topButton = document.getElementById("topButton");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.classList.add("show");
            topButton.classList.remove("hide");
        } else {
            topButton.classList.add("hide");
            topButton.classList.remove("show");
        }
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';

}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.style.display = 'none';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop;
        const duration = 2000; // Tempo em milissegundos

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'

        });
    });
});