const gallery = document.getElementById("gallery");
const extensions = [".JPG", ".jpg", ".Jpg", ".png"];

for (let i = 1; i <= 131; i++) {
    const nomor = String(i).padStart(3, "0");
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = "Foto " + i;

    // Fungsi otomatis mencoba ekstensi berikutnya jika ekstensi sebelumnya gagal dimuat
    let extIndex = 0;
    function tryNextExtension() {
        if (extIndex < extensions.length) {
            img.src = "images/mm" + nomor + extensions[extIndex];
            extIndex++;
        }
    }

    img.onerror = function() {
        tryNextExtension();
    };

    // Mulai coba dari ekstensi pertama
    tryNextExtension();
    gallery.appendChild(img);
}
