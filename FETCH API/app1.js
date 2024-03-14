// app1.js
document.addEventListener("DOMContentLoaded", () => {
    // URL'den userId parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const selectedUserId = urlParams.get('userId');

    // Seçilen kullanıcı ID'sini yazdır
    console.log('Selected User ID:', selectedUserId);

    const profileContainer = document.getElementById('profile-container');

    // Kullanıcı bilgilerini çek
    fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`)
        .then(response => response.json())
        .then((user) => {
            const div = document.createElement('div');
            div.classList.add('profile-item');
            div.innerHTML = `
                <h2 class="profile-title">${user.name}</h2>
                <img class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&usqp=CAU">
                <p class="profile-body1">${user.username}</p>
                <p class="profile-body2">${user.website}</p>
                <p class="profile-body3">${user.phone}</p>
                <p class="profile-body4">${user.address.street}</p>
                <p class="profile-body5">${user.company.name}</p>
                <p class="profile-body6">${user.email}</p>
            `;

            profileContainer.appendChild(div);
        })
        .catch(error => console.log(error));
});