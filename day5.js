const accessKey = "pLntmc1qvw_SZT1SMvSNAgZXEW5X47Q_jBNtRkJzDmY";
fetch(`https://api.unsplash.com/photos/random?count=12&client_id=${accessKey}`)
    .then(response => response.json())
    .then(images => {
        const gallery = document.getElementById("gallery");
        images.forEach(image => {
            const img = document.createElement("img");
            img.src = image.urls.small;
            img.alt = image.alt_description || "Image";
            img.loading = "lazy";
            gallery.appendChild(img);
        });
    })
    .catch(() => {
        document.getElementById("gallery").innerHTML = "Failed to load images!";
    });