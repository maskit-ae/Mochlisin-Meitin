const gallery = document.getElementById("gallery");

for (let i = 1; i <= 131; i++) {

    const nomor = String(i).padStart(3, "0");
    const file = "images/mm" + nomor + ".JPG";

    const a = document.createElement("a");
    a.href = file;

    const img = document.createElement("img");
    img.src = file;
    img.alt = "Foto " + i;
    img.loading = "lazy";

    a.appendChild(img);
    gallery.appendChild(a);
}

lightGallery(gallery, {
    selector: "a"
});
