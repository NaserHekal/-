document.addEventListener("DOMContentLoaded", function() {
    const map = L.map('map').setView([30.0444, 31.2357], 6); // القاهرة كموقع افتراضي

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // بيانات المحاصيل
    const crops = [
        { name: "القمح", lat: 30.5, lng: 31.0 },
        { name: "الأرز", lat: 31.2, lng: 30.7 },
        { name: "القطن", lat: 29.8, lng: 31.5 }
    ];

    crops.forEach(crop => {
        L.marker([crop.lat, crop.lng]).addTo(map)
            .bindPopup(`<b>${crop.name}</b>`);
    });

    // بيانات الموظف
    const employee = {
        id: 1,
        name: "ناصر هيكل",
        position: "مدير المشروع",
        salary: 15000,
        hire_date: "2020-05-15"
    };

    console.log("الموظف المسؤول:", employee);
});
