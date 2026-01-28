document.getElementById("borang").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai input
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const kategori = document.getElementById("kategori").value;
    const slot = document.getElementById("slot").value;
    const fileInput = document.getElementById("bukti");
    const file = fileInput.files[0];

    if (!file) {
        alert("Sila upload bukti pembayaran!");
        return;
    }

    const fileURL = URL.createObjectURL(file);
    let buktiUploadHTML = "";

    // Papar fail upload
    if (file.type === "image/jpeg" || file.type === "image/png") {
        buktiUploadHTML = `
            <img src="${fileURL}" width="200"
                 style="border-radius:8px; box-shadow:0 3px 6px rgba(0,0,0,0.2);">
            <br><br>
            <a href="${fileURL}" download="${file.name}">Download Gambar</a>
        `;
    } else if (file.type === "application/pdf") {
        buktiUploadHTML = `
            <a href="${fileURL}" target="_blank">
                Buka / Download Bukti Pembayaran (PDF)
            </a>
        `;
    }

    // Gambar tetap dari folder (gambarkj.jpg)
    const gambarTetapHTML = `
        <img src="gambarkj.jpg" width="200"
             style="border-radius:8px; box-shadow:0 3px 6px rgba(0,0,0,0.2);">
        <p><em>Gambar rujukan penceramah</em></p>
    `;

    // Papar output
    document.getElementById("output").innerHTML = `
        <h3>Butiran Tempahan</h3>
        <table width="100%" cellpadding="10">
            <tr>
                <th>Maklumat</th>
                <th>Butiran</th>
            </tr>
            <tr><td>Nama</td><td>${nama}</td></tr>
            <tr><td>Email</td><td>${email}</td></tr>
            <tr><td>No Telefon</td><td>${telefon}</td></tr>
            <tr><td>Kategori</td><td>${kategori}</td></tr>
            <tr><td>Bilangan Slot</td><td>${slot}</td></tr>
            <tr>
                <td>Bukti Pembayaran (Upload)</td>
                <td>${buktiUploadHTML}</td>
            </tr>
            <tr>
                <td>Gambar Penceramah</td>
                <td>${gambarTetapHTML}</td>
            </tr>
        </table>
    `;
});
