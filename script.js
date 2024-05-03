function openPdfPreview(pdfUrl) {
    var modal = document.getElementById("pdfModal");
    var iframe = document.getElementById("pdfFrame");
    var booksContainer = document.querySelector(".container");
    booksContainer.style.overflowY = "hidden"; // Скрываем вертикальную прокрутку контейнера книг
    iframe.src = pdfUrl;
    modal.style.display = "block";
}

function closePdfPreview() {
    var modal = document.getElementById("pdfModal");
    var iframe = document.getElementById("pdfFrame");
    var booksContainer = document.querySelector(".container");
    booksContainer.style.overflowY = "auto"; // Восстанавливаем вертикальную прокрутку контейнера книг
    modal.classList.add("closing"); // Добавляем класс для анимации закрытия
    setTimeout(function() {
        iframe.src = "";
        modal.style.display = "none";
        modal.classList.remove("closing"); // Удаляем класс после анимации
    }, 500); // Задержка перед скрытием модального окна (в миллисекундах), соответствует времени анимации
}
