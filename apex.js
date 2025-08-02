const images = [
      "https://picsum.photos/id/1015/600/300",
      "https://picsum.photos/id/1025/600/300",
      "https://picsum.photos/id/1035/600/300",
      "https://picsum.photos/id/1045/600/300"
    ];
    let currentIndex = 0;
    const carouselImage = document.getElementById('carouselImage');

    function showImage(index) {
      currentIndex = (index + images.length) % images.length;
      carouselImage.src = images[currentIndex];
    }

    function nextImage() { showImage(currentIndex + 1); }
    function prevImage() { showImage(currentIndex - 1); }

    setInterval(() => { nextImage(); }, 4000); // Auto carousel

    // Fetch Joke from API
    async function fetchJoke() {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
      const data = await response.json();
      document.getElementById('joke').innerText = data.joke;
    }
