// Kullanıcı adını al ve karşılama mesajı yazdır
let userName = prompt("Adınızı giriniz:");
document.getElementById('myName').textContent = `Merhaba, ${userName}! Hoş geldin!`;

// Saat ve gün bilgisini göstermek için fonksiyon
function showTime() {
    let now = new Date();
    
    // Saat, dakika ve saniyeyi al ve iki basamaklı hale getir
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Gün bilgisi (Pazartesi, Salı, vb.)
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let dayName = days[now.getDay()];

    // Zaman ve gün bilgisini ekrana yazdır
    document.getElementById('myClock').textContent = `${hours}:${minutes}:${seconds} ${dayName}`;
}

// Her saniyede bir showTime fonksiyonunu çalıştır
setInterval(showTime, 1000);

// Ödev bilgisini ekrana yazdır
document.getElementById('task-info').textContent = `Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümünün 1. ödevindesiniz.`;
