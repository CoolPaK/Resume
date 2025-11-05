// Данные сертификатов
const certificates = [
  {
    name: "HTML-верстка: с нуля до первого макета",
    issuer: "Нетология",
    date: "2023",
    file: "certificates/certificate (1).pdf",
  },
  {
    name: "Основы программирования",
    issuer: "Нетология",
    date: "2024",
    file: "certificates/certificate (2).pdf",
  },
  {
    name: "Основы JavaScript в браузере",
    issuer: "Нетология",
    date: "2024",
    file: "certificates/certificate (3).pdf",
  },
  {
    name: "Продвинутый JavaScript: современные возможности языка",
    issuer: "Нетология",
    date: "2024",
    file: "certificates/certificate (4).pdf",
  },
  {
    name: "Продвинутый JavaScript в браузере",
    issuer: "Нетология",
    date: "2025",
    file: "certificates/certificate (5).pdf",
  },
  {
    name: "React: Библиотека №1 в современной фронтенд-разработке",
    issuer: "Нетология",
    date: "2025",
    file: "certificates/certificate (6).pdf",
  },
  {
    name: "Алгоритмы и структуры данных. Базовый курс",
    issuer: "Нетология",
    date: "2025",
    file: "certificates/certificate (7).pdf",
  },
  {
    name: "Основы PHP",
    issuer: "Нетология",
    date: "2025",
    file: "certificates/certificate (8).pdf",
  },
  {
    name: "Продвинутый PHP",
    issuer: "Нетология",
    date: "2025",
    file: "certificates/certificate (9).pdf",
  },
  {
    name: "Фреймворк Laravel",
    issuer: "Нетология",
    date: "2025",
    file: "certificates/certificate (10).pdf",
  },
  {
    name: "Основы JavaScript",
    issuer: "Нетология",
    date: "2024",
    file: "certificates/certificate (bjs).pdf",
  },
  {
    name: "Git — система контроля версий",
    issuer: "Нетология",
    date: "2024",
    file: "certificates/certificate(git).pdf",
  },
  {
    name: "Адаптивная и мобильная верстка",
    issuer: "Нетология",
    date: "2024",
    file: "certificates/certificate.pdf",
  },
];

// Функция для отображения сертификатов
function renderCertificates() {
  const certificatesContent = document.getElementById("certificatesContent");

  certificates.forEach((cert) => {
    const certificateItem = document.createElement("div");
    certificateItem.className = "certificate-item";

    certificateItem.innerHTML = `
            <div class="certificate-info">
                <div class="certificate-name">${cert.name}</div>
                <div class="certificate-issuer">${cert.issuer}</div>
                <div class="certificate-date">${cert.date}</div>
            </div>
            <div class="certificate-actions">
                <a href="${cert.file}" target="_blank" class="btn btn-view">Просмотреть</a>
                <a href="${cert.file}" download class="btn btn-download">Скачать</a>
            </div>
        `;

    certificatesContent.appendChild(certificateItem);
  });
}

// Функционал выпадающего списка сертификатов
function initCertificatesToggle() {
  const certificatesToggle = document.getElementById("certificatesToggle");
  const certificatesContent = document.getElementById("certificatesContent");

  certificatesToggle.addEventListener("click", function () {
    certificatesContent.classList.toggle("active");

    if (certificatesContent.classList.contains("active")) {
      certificatesToggle.innerHTML =
        '<span>Скрыть сертификаты</span><i class="fas fa-chevron-up"></i>';
    } else {
      certificatesToggle.innerHTML =
        '<span>Показать сертификаты</span><i class="fas fa-chevron-down"></i>';
    }
  });
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  renderCertificates();
  initCertificatesToggle();
});
