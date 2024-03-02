function downloadImage() {
    // Get the image element by its ID
    let imageElement = document.getElementById('pic1');

    // Get the source URL of the image
    let imageUrl = imageElement.src;

    // Create an anchor element
    let downloadLink = document.createElement('a');

    // Set the download attribute to suggest a filename for the downloaded file
    downloadLink.download = 'downloaded-unsplash-image.jpg'; // You can customize the filename and extension

    // Set the href attribute to the image URL
    downloadLink.href = imageUrl;

    // Append the anchor element to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the document
    document.body.removeChild(downloadLink);
}