document.addEventListener("mousemove", function (e) {
    const container = document.querySelector(".parallax-container");
    const leftImage = document.querySelector(".parallax-image.left");
    const rightImage = document.querySelector(".parallax-image.right");

    if (container && leftImage && rightImage) {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (mouseX - centerX) / 20;
        const moveY = (mouseY - centerY) / 20;

        leftImage.style.transform = `translate(${-moveX}px, ${-moveY}px) rotate(-15deg)`;
        rightImage.style.transform = `translate(${moveX}px, ${moveY}px) rotate(15deg)`;
    }
});

window.addEventListener("load", function () {
    const slider = document.querySelector(".services-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (slider && prevBtn && nextBtn) {
        // Ativa scroll suave
        slider.style.scrollBehavior = "smooth";

        // Número de cards visíveis depende do tamanho da tela
        const getVisibleCards = () => {
          if (window.innerWidth < 576) return 1;
          if (window.innerWidth < 992) return 2;
          return 3;
        };

        // Calcular a largura para deslizar por grupo de cards
        const getScrollAmount = () => {
          const card = slider.querySelector(".service-card");
          if (!card) return 0;
          const cardWidth = card.offsetWidth;
          const cardMargin = 20; // gap entre cards
          return (cardWidth + cardMargin) * getVisibleCards();
        };

        // Verificar se há mais cards para navegar
        const updateButtonVisibility = () => {
          const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
          prevBtn.style.opacity = slider.scrollLeft <= 0 ? "0.5" : "1";
          nextBtn.style.opacity =
            slider.scrollLeft >= maxScrollLeft ? "0.5" : "1";
        };

        // Inicializar visibilidade dos botões
        updateButtonVisibility();

        // Event listeners para os botões de navegação
        prevBtn.addEventListener("click", () => {
          slider.scrollLeft -= getScrollAmount();
        });

        nextBtn.addEventListener("click", () => {
          slider.scrollLeft += getScrollAmount();
        });

        // Atualizar quando rolar
        slider.addEventListener("scroll", updateButtonVisibility);

        // Atualizar quando redimensionar a janela
        window.addEventListener("resize", () => {
          updateButtonVisibility();
        });
    }
});

