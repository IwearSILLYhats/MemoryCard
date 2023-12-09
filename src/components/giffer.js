async function giffer (query, callback) {
    //will eventually use API call to pull list of gifs from Giphy
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=FWTNu6QTPcmts0yrsSPtVD0kSMeynK9m&q=${query}&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const gifs = await response.json()
    const list = gifs.data.map(e => {
        return new Gif(e)
    })
    callback(list)
}

function subList (data, count) {
    //takes a portion of the full gif list to be used in rounds that only need a subset
    console.log(data)
    let sub = data.slice(0, count*2+2)
    let clone = sub.map(e => ({...e}))
    randomizer(clone)
    return clone
}

function randomizer (array) {
    // randomizes CURRENT sublist between clicks
    for (let i = array.length - 1; i > 0; i--) {

      let j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

class Gif {
    constructor (data) {
        this.url = data.images.fixed_height.url,
        this.picked = false
    }
}

export { giffer, subList, randomizer}