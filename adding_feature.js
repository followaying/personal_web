const albums = [
    { name: "Vacation", description: "Photos from my recent trip." },
    { name: "Portraits", description: "Portrait photography collection." },
];

const albumSection = document.querySelector('.album-section');
albums.forEach(album => {
    const albumDiv = document.createElement('div');
    albumDiv.className = 'album';
    albumDiv.innerHTML = `<h3>${album.name}</h3><p>${album.description}</p>`;
    albumSection.appendChild(albumDiv);
});
