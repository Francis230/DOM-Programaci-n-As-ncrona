// Simulación de una función para obtener datos de un artista
function infoArtista(artistId) {
    return new Promise((resolve, reject) => {
        console.log('Buscando información del artista...');
        setTimeout(() => {
            const artistData = {
                id: artistId,
                name: 'Milky Chance',
                genre: 'Electrónica y Pop',
                followers: 30000000
            };
            console.log(`Artista encontrado: ${artistData.name}`);
            resolve(artistData);
        }, 2000); // Simula una espera de 2 segundos
    });
}

// Simulación de una función para obtener las canciones más populares del artista
function cancionesArtista(artistId) {
    return new Promise((resolve, reject) => {
        console.log('Buscando las canciones más populares del artista...');
        setTimeout(() => {
            const topTracks = [
                'Shape of You',
                'Perfect',
                'Thinking Out Loud',
                'Photograph'
            ];
            console.log('Canciones más populares encontradas');
            resolve(topTracks);
        }, 1500); // Simula una espera de 1.5 segundos
    });
}

// Función principal que maneja las solicitudes asíncronas con async/await
async function fetchArtistInfo(artistId) {
    try {
        const artistData = await infoArtista(artistId);
        console.log(`Información del Artista:`);
        console.log(`Nombre: ${artistData.name}`);
        console.log(`Género: ${artistData.genre}`);
        console.log(`Seguidores: ${artistData.followers}`);

        const topTracks = await cancionesArtista(artistId);
        console.log(`Las canciones más populares de ${artistData.name}:`);
        topTracks.forEach((track, index) => {
            console.log(`${index + 1}. ${track}`);
        });
    } catch (error) {
        console.error('Error al obtener la información del artista:', error);
    }
}

// Llamada a la función principal con el ID de un artista simulado
fetchArtistInfo('1234'); // ID simulado
