/* ==========================================================
   WALI KELAS
   Ambil data wali kelas dari data/walikelas.json
   lalu render satu kartu (foto + nama + detail).
   ========================================================== */

async function initWalikelas() {
  const wrap = document.getElementById("walikelasWrap");
  if (!wrap) return;

  try {
    const response = await fetch("data/walikelas.json");
    if (!response.ok) throw new Error("Data wali kelas gagal dimuat");
    const data = await response.json();
    wrap.innerHTML = buildWalikelasCard(data);
  } catch (error) {
    wrap.innerHTML = `<div class="empty-state">${error.message}. Jalankan website lewat server, bukan membuka index.html langsung.</div>`;
  }
}

function buildWalikelasCard(data) {
  const DEFAULT_FOTO = "assets/img/guru/guru.png";
  const nama = data.nama || "Nama Wali Kelas";
  const jabatan = data.jabatan || "Wali Kelas";
  const nip = data.nip || "-";
  const foto = data.foto || DEFAULT_FOTO;
  const ig = data.instagram || "";

  return `
    <article class="site-card walikelas-card">
      <div class="walikelas-photo-wrap">
        <img
          class="walikelas-photo"
          src="${escapeHtml(foto)}"
          alt="Foto ${escapeHtml(nama)}"
          onerror="this.onerror=null;this.src='${DEFAULT_FOTO}';"
        />
      </div>
      <h3 class="walikelas-nama">${escapeHtml(nama)}</h3>
      <p class="walikelas-jabatan">${escapeHtml(jabatan)}</p>
      <ul class="walikelas-details">
        <li><span>NIP</span><strong>${escapeHtml(nip)}</strong></li>
      </ul>
      ${
        ig
          ? `<a class="walikelas-ig" href="https://instagram.com/${escapeHtml(
              ig.replace("@", "")
            )}" target="_blank" rel="noopener">
              <i class="fa-brands fa-instagram"></i> @${escapeHtml(
                ig.replace("@", "")
              )}
            </a>`
          : ""
      }
    </article>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
