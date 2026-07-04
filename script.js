const gallery = document.getElementById("gallery");

for (let i = 1; i <= 131; i++) {
    const nomor = String(i).padStart(3, "0");
    const file = "images/mm" + nomor + ".JPG";

    const img = document.createElement("img");
    img.src = file;
    img.loading = "lazy";
    img.alt = "Foto " + i;

    gallery.appendChild(img);
}
