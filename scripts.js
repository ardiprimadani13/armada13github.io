document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');

    // Ambil semua link di dalam div "service-categories"
    var serviceLinks = document.querySelectorAll('.service-categories a');

    // Fungsi untuk mengubah link yang aktif dan menampilkan konten yang sesuai
    function handleLinkClick(event) {
        event.preventDefault();

        // Hapus kelas aktif dari semua link
        serviceLinks.forEach(link => link.classList.remove('active'));

        // Tambah kelas aktif ke link yang diklik
        var clickedLink = event.target;
        clickedLink.classList.add('active');

        // Sembunyikan semua service-details
        var allServiceDetails = document.querySelectorAll('.service-details');
        allServiceDetails.forEach(detail => detail.style.display = 'none');

        // Tampilkan detail yang sesuai berdasarkan href link yang diklik
        var targetId = clickedLink.getAttribute('href').substring(1); // Hilangkan karakter "#" di awal
        var targetElement = document.getElementById(targetId + '-details'); // Sesuaikan ID dengan '-details'
        if (targetElement) {
            targetElement.style.display = 'block';
        }
    }

    // Tambahkan event listener untuk setiap link di service-categories
    serviceLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Fungsi untuk menampilkan section yang dipilih dan menyembunyikan yang lain
    function showSection(sectionToShow) {
        // Sembunyikan semua service-details
        var allServiceDetails = document.querySelectorAll('.service-details');
        allServiceDetails.forEach(detail => detail.style.display = 'none');

        // Tampilkan detail yang dipilih
        sectionToShow.style.display = 'block';
    }

    // Tampilkan default section (jika ada link dengan kelas 'active')
    var defaultLink = document.querySelector('.service-categories a.active');
    if (defaultLink) {
        defaultLink.click(); // Panggil event click untuk menampilkan konten yang sesuai
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk menangani klik pada tautan formulir pembayaran
    document.querySelectorAll('a[data-activity]').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah perilaku default dari tautan
            var activity = this.getAttribute('data-activity'); // Mendapatkan nilai data-activity
            // Mengarahkan ke pembayaran.html dengan parameter kegiatan
            window.location.href = 'pembayaran.html?kegiatan=' + encodeURIComponent(activity);
        });
    });
});


