function giffer (query) {
    //will eventually use API call to pull list of gifs from Giphy
    const list = fakeList.map(e => {
        return new Gif(e)
    })

    return list
}

function subList (data, count) {
    //takes a portion of the full gif list to be used in rounds that only need a subset
    let sub = data.slice(0, (count*2)+2)
    let clone = sub.map(e => ({...e}))
    randomizer(clone)
    return clone
}

function randomizer (array) {
    // randomizes current sublist between clicks
    for (let i = array.length - 1; i > 0; i--) {

      let j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

class Gif {
    constructor (url) {
        this.url = url,
        this.picked = false
    }
}

export { giffer, subList, randomizer}

const fakeList = [1,2,3,4,5,6,7,8,9,10,11,12]