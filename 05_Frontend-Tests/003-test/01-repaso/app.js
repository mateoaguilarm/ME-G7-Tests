console.log('hola en app');

// 1. Bring the ID's from the HTML
const formAlbums = document.querySelector('#formAlbums');
const cardAlbums = document.querySelector('#albumCard');
const infoCheck = document.querySelector('infoCheck')

const API_URL = 'https://crudcrud.com/api/39bc61cdd1fa4061839d2dd5fff7f0c0/albums';

const getAlbums = async () => {
    cardAlbums.innerHTML = '';

    try {
        const response = await fetch(API_URL);
        const albums = await response.json();

        cardAlbums.innerHTML = renderAlbums(albums)
    } catch (err) {
        throw new Error('Error: ', err)
    }

}

const renderAlbums = (albums) => {
    return albums.map(album => {
        const { albumName, artist, year, songs, coverURL } = album;
        const albumCardHTML =
            `<div id="albumCard" class="row row-cols1 row-cols-md-2 g-4 m-5">
        <div class="col">
            <div  class="card m-5" style="width: 18rem;">
                <img src=" ${coverURL} " class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center pb-4">${albumName}</h5>
                    <p class="card-text lead"> Artist: ${artist} </p>
                    <p class="card-text lead"> Release Date: ${year} </p>
                    <p class="card-text lead"> Songs: ${songs} </p>
                </div>
            </div>
        </div>
    </div>`
        return albumCardHTML;
    })
}

getAlbums()

const init = async () => {
    
}