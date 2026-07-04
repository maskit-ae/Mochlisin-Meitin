const gallery = document.getElementById("gallery");

for (let i = 1; i <= 131; i++) {

    const file = images/mm${String(i).padStart(3,"0")}.JPG;

    const a = document.createElement("a");
    a.href = file;

    const img = document.createElement("img");
    img.src = file;
    img.loading = "lazy";
    img.alt = "";

    a.appendChild(img);
    gallery.appendChild(a);
}

lightGallery(gallery,{
    selector:"a"
});
