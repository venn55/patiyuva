// Ortak site davranışı: tarihleri güncelle, hayvan kartları ve form simülasyonu
document.addEventListener('DOMContentLoaded', function(){
  // Yılları güncelle
  document.getElementById('year')?.textContent = new Date().getFullYear();
  for(let i=2;i<=8;i++){ document.getElementById('year'+i)?.textContent = new Date().getFullYear(); }

  // Hayvan verileri
  const animals = [
    {id:1, name:'Mavi', species:'Kedi', age:'2 yaş', desc:'Uysal ve oyuncu. Kısırlaştırılmış.', page:'animal-1.html', img:'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'},
    {id:2, name:'Badem', species:'Köpek', age:'3 yaş', desc:'Sadık, çocuklarla iyi.', page:'animal-2.html', img:'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'},
    {id:3, name:'Minik', species:'Kedi', age:'6 ay', desc:'Enerjik, iç mekan kedisi.', page:'animal-3.html', img:'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'}
  ];

  const list = document.getElementById('animal-list');
  if(list){
    animals.forEach(a=>{
      const div = document.createElement('article');
      div.className = 'animal';
      div.innerHTML = `
        <img alt="${a.name} — ${a.species}" src="${a.img}">
        <h3>${a.name} <span class="small">(${a.species})</span></h3>
        <p><strong>Yaş:</strong> ${a.age}</p>
        <p>${a.desc}</p>
        <p><a class="btn" href="${a.page}">Detay & Sahiplendirme</a></p>
      `;
      list.appendChild(div);
    });
  }

  // Gönüllü form simülasyonu
  const volForm = document.getElementById('vol-form');
  const volStatus = document.getElementById('vol-status');
  if(volForm){
    volForm.addEventListener('submit', function(e){
      e.preventDefault();
      if(volStatus) volStatus.textContent = 'Gönderiliyor...';
      setTimeout(()=>{
        if(volStatus) volStatus.textContent = 'Teşekkürler! Başvurunuz alındı.';
        volForm.reset();
      }, 700);
    });
  }
});
