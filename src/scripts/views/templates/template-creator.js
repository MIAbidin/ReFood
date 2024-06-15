const createRefoodCard = (item) => `
    <div class="col-md-6">
      <div class="image-wrapper">
        <img id="imageBanner" class="up-layar" src="${item.picture}" alt="${item.jenis}" />
      </div>
    </div>
    <div class="col-md-2">
      <h1 id="judul">${item.jenis}</h1>
    </div>
    <div class="col-md-3 rounded" id="description">
      <h1 class="teks"><b>${item.jenis}</b></h1>
      <p class="teks">${item.deskripsi}</p>
      <a href="/detail.html?id=${item.idLimbah}" class="btn btn-primary" id="cara-pengolahan">Cara Pengolahan</a>
    </div>
  `;

const createRefoodSlide = (item) => `
    <div class="refood-slide-img">
      <img src="${item.picture}" alt="${item.jenis}">
    </div>
    <div class="refood-slide-content">
      <h2 class="food-type">${item.jenis}</h2>
    </div>
  `;

const createDetailPengolahan = (item) => `
<div class="card text-bg-light mb-3">
    <div class="card-header">
      <h3>Cara Pengolahan:</h3>
    </div>
    <div class="card-body">
      <p class="card-text">${item.caraPengolahan.teks}</p>
    </div>
</div>
`;

export { createRefoodCard, createRefoodSlide, createDetailPengolahan };
