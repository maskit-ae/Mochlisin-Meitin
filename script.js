const gallery = document.getElementById("gallery");

for (let i = 1; i <= 131; i++) {

    const a = document.createElement("a");
    a.href = images/mm (${i}).JPG;

    const img = document.createElement("img");
    img.src = images/mm (${i}).JPG;
    img.loading = "lazy";
    img.alt = Photo ${i};

    a.appendChild(img);

    gallery.appendChild(a);
}

lightGallery(gallery, {
    selector: "a"
});
