const gallery = document.getElementById("gallery");

for (let i = 1; i <= 131; i++) {
    const file = images/mm (${i}).JPG;

    gallery.innerHTML += 
        <a href="${file}">
            <img loading="lazy" src="${file}" alt="Photo ${i}">
        </a>
    ;
}

lightGallery(gallery, {
    selector: "a"
});
