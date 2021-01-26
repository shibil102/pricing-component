const slider = document.getElementById('range')
const priceValue = document.querySelector('.price_value')
const pageViews = document.querySelector('.pageViewsValue')
const unit = document.querySelector(".unit")
const pageviewsValue = document.querySelector('.pageviews')
// priceValue.innerHTML = slider.value


slider.oninput = function () {
    if(slider.value == 0){
        priceValue.innerHTML = "PAY"
        pageviewsValue.innerHTML = "SLIDE UP.."
        unit.innerHTML = null
    }
    else if(slider.value == 8){
        priceValue.innerHTML = 8
        const  val1 = pageViews.innerHTML = "10"
        const val2 = unit.innerHTML = "K"
        pageviewsValue.innerHTML = val1 + val2 + ' / PAGEVIEWS'

    }
    else if(slider.value == 12){
        priceValue.innerHTML = 12
        const  val1 = pageViews.innerHTML = "50"
        const val2 = unit.innerHTML = "K"
        pageviewsValue.innerHTML = val1 + val2 + ' / PAGEVIEWS'


    }
    else if(slider.value == 16){
        priceValue.innerHTML = 16
        const  val1 = pageViews.innerHTML = "100"
        const val2 = unit.innerHTML = "K"
        pageviewsValue.innerHTML = val1 + val2 + ' / PAGEVIEWS'

    }
    else if(slider.value == 24){
        priceValue.innerHTML = 24
        const  val1 = pageViews.innerHTML = "500"
        const val2 = unit.innerHTML = "K"
        pageviewsValue.innerHTML = val1 + val2 + ' / PAGEVIEWS'

    }
    else if(slider.value == 36){
        priceValue.innerHTML = 36
        const  val1 = pageViews.innerHTML = "1"
        const val2 = unit.innerHTML = "M"
        pageviewsValue.innerHTML = val1 + val2 + ' / PAGEVIEWS'

    }
    else if(slider.value == 50){
        priceValue.innerHTML = 50
        const  val1 = pageViews.innerHTML = "10"
        const val2 = unit.innerHTML = "M"
        pageviewsValue.innerHTML = val1 + val2 + ' / PAGEVIEWS'

    }
    else if(slider.value == 80){
        priceValue.innerHTML = 80
        const  val1 = pageViews.innerHTML = "50"
        const val2 = unit.innerHTML = "M"
        pageviewsValue.innerHTML = val1 + val2 + ' / PAGEVIEWS'

    }
    else if(slider.value == 100){
        priceValue.innerHTML = 100
        const  val1 = pageViews.innerHTML = "1"
        const val2 = unit.innerHTML = "B"
        pageviewsValue.innerHTML = val1 + val2 + ' / PAGEVIEWS'

    }

}

slider.addEventListener("mousemove" , function () {
    let percent = slider.value
let color = "linear-gradient(90deg , hsl(174, 86%, 45%)" + percent + "%, hsl(224, 65%, 95%)" + percent + "%)"
slider.style.background = color
})