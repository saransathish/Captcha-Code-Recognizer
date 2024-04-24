function changeImage() {
    // Define an array of image URLs
    const images = [
      'C:\\Users\\sanje\\Downloads\\bus tiket\\saran\\static\\2b827.png',
      'C:\\Users\\sanje\\Downloads\\bus tiket\\saran\\static\\2bg48.png',
      'C:\\Users\\sanje\\Downloads\\bus tiket\\saran\\static\\2cegf.png',
      'C:\\Users\\sanje\\Downloads\\bus tiket\\saran\\static\\2cg58.png',
      'C:\\Users\\sanje\\Downloads\\bus tiket\\saran\\static\\2cgyx.png'
    ];
    
    // Get a random image from the array
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    // Set the image source
    document.getElementById('random-image').src = randomImage;
  }