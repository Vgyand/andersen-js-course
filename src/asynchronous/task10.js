export class Musician {
  constructor(albumsUrl) {
    this.url = albumsUrl;
  }
  async getAlbums() {
    const res = await fetch(this.url);
    const data = await res.json();
    console.log(data);
    return data;
  }
}
