document.getElementById("borang").addEventListener("submit", function(e) {
    e.preventDefault();

    // Ambil nilai input
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const kategori = document.getElementById("kategori").value;
    const slot = document.getElementById("slot").value;
    const fileInput = document.querySelector("input[type='file']");
    const file = fileInput.files[0];

    if (!file) {
        alert("Sila upload bukti pembayaran!");
        return;
    }

    const fileURL = URL.createObjectURL(file);

    document.getElementById("output").innerHTML = `
        <h3>Butiran Tempahan</h3>
        <table border="1" width="100%" cellpadding="8">
            <tr>
                <th>Maklumat</th>
                <th>Butiran</th>
            </tr>
            <tr>
                <td>Nama</td>
                <td>${nama}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>No Telefon</td>
                <td>${telefon}</td>
            </tr>
            <tr>
                <td>Kategori</td>
                <td>${kategori}</td>
            </tr>
            <tr>
                <td>Bilangan Slot</td>
                <td>${slot}</td>
            </tr>
            <tr>
                <td>Bukti Pembayaran</td>
                <td><a href="${fileURL}" download="${file.name}">Download Fail</a></td>
            </tr>
        </table>
    `;
});