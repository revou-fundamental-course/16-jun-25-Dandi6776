// Untuk ganti teks di welcome section
document.addEventListener("DOMContentLoaded", () => {
  const name = prompt("Masukkan nama kamu:");
  if (name) {
    document.getElementById("welcome-text").textContent = `Hi ${name}, Selamat datang di Web PM. Juragan`;
  }
});

// Menangani form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value;

  const currentTime = new Date().toString();

  const result = `
    <p><strong>Current time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  document.getElementById("form-result").innerHTML = result;
});
