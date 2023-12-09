import { giffer } from "./giffer"

function Start ({ theme }) {
    function imgPull () {
        const query = document.querySelector('.theme')
        giffer(query.value, theme)
    }

    return (
        <div className="start">
            <form action="">
            <input type="text" className="theme" placeholder="Choose a Theme" />
            <button type="submit" onClick={ 
                (e) => {
                    e.preventDefault()
                    imgPull()
            }
            }>Submit</button>
            </form>
        </div>
    )
}

export { Start }