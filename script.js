var image = document.getElementById('image');
var images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Замените на пути к вашим изображениям
var interval = 2 * 60 * 1000; // Интервал в миллисекундах (два минуты)
var duration = 2 * 24 * 60 * 60 * 1000; // Длительность в миллисекундах (два дня)

var startTime = new Date().getTime();
var endTime = startTime + duration;
var currentIndex = 0;

function displayImage() {
    if (new Date().getTime() <= endTime) {
        image.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(displayImage, interval);
    }
}

displayImage();
