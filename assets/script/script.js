document.addEventListener("mousemove", function (e) {
    const container = document.querySelector(".parallax-container");
    const leftImage = document.querySelector(".parallax-image.left");
    const rightImage = document.querySelector(".parallax-image.right");

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (mouseX - centerX) / 20;
    const moveY = (mouseY - centerY) / 20;

    leftImage.style.transform = `translate(${-moveX}px, ${-moveY}px) rotate(-15deg)`;
    rightImage.style.transform = `translate(${moveX}px, ${moveY}px) rotate(15deg)`;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".services-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    // Número de cards visíveis depende do tamanho da tela
    const getVisibleCards = () => {
      if (window.innerWidth < 576) return 1;
      if (window.innerWidth < 992) return 2;
      return 3;
    };

    // Calcular a largura para deslizar por grupo de cards
    const getScrollAmount = () => {
      const cardWidth = slider.querySelector(".service-card").offsetWidth;
      const cardMargin = 20; // gap entre cards
      return (cardWidth + cardMargin) * getVisibleCards();
    };

    // Verificar se há mais cards para navegar
    const updateButtonVisibility = () => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      prevBtn.style.opacity = slider.scrollLeft <= 0 ? "1" : "2.5";
      nextBtn.style.opacity =
        slider.scrollLeft >= maxScrollLeft ? "1" : "2.5";
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
  });

  // document.addEventListener("DOMContentLoaded", function () {
  //   const contactForm = document.getElementById("contactForm");

  //   if (contactForm) {
  //     contactForm.addEventListener("submit", function (e) {
  //       e.preventDefault();

  //       const name = document.getElementById("name").value;
  //       const email = document.getElementById("email").value;
  //       const phone = document.getElementById("phone").value;
  //       const message = document.getElementById("message").value;

  //       // Configurando o serviço EmailJS para envio de e-mails
  //       // Você precisará criar uma conta gratuita em https://www.emailjs.com/
  //       // e substituir 'service_id', 'template_id' e 'user_id' pelos seus dados

  //       const templateParams = {
  //         from_name: name,
  //         from_email: email,
  //         from_phone: phone,
  //         message: message,
  //       };

  //       // Método para enviar o e-mail usando EmailJS
  //       emailjs
  //         .send("service_id", "template_id", templateParams, "user_id")
  //         .then(
  //           function (response) {
  //             alert("Mensagem enviada com sucesso!");
  //             contactForm.reset();
  //           },
  //           function (error) {
  //             alert(
  //               "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde."
  //             );
  //             console.error("Erro:", error);
  //           }
  //         );
  //     });
  //   }
  // });