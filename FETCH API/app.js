// app.js
const myContainer = document.querySelector('.post-container');

// Fonksiyon: Card tıklama işlemini yönet
function handleCardClick(user) {
    // Sayfayı yönlendir
    window.location.href = `profile.html?userId=${user.id}`;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data) => {
        const mySpinner = document.querySelector('.active-spinner');
        mySpinner.classList.remove('active-spinner');
        mySpinner.classList.add('disable-spinner');
        data.forEach((user) => {
            const div = document.createElement('div');
            div.classList.add('post-item');
            div.innerHTML = `
                <h2 class="post-title1">${user.name}</h2>
                <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&usqp=CAU">
                <p class="post-body1">${user.username}</p>
                <p class="post-body2">${user.website}</p>
                <p class="post-body3">${user.phone}</p>
                <p class="post-body4">${user.address.street}</p>
                <p class="post-body5">${user.company.name}</p>
                <p class="post-body6">${user.email}</p>
            `;

            // Her bir card'a tıklama olayı ekleniyor
            div.addEventListener('click', () => handleCardClick(user));

            myContainer.appendChild(div);
        });
    })
    .catch(error => console.log(error));

// app1.js
// URL'den userId parametresini al
const urlParams = new URLSearchParams(window.location.search);
const selectedUserId = urlParams.get('userId');

// Seçilen kullanıcı ID'sini yazdır
console.log('Selected User ID:', selectedUserId);