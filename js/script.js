$('.owl-carousel').owlCarousel({
    loop: true,
    navText: ['<i class="fa-solid fa-arrow-left-long navtext-left"></i>', '<i class="fa fa-long-arrow-right ff navtext-right "></i>'],
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }

    }
})
var valid = true

var topbtn = document.getElementById("up-icon")
var counter = document.getElementsByClassName("count")
var counter2 = document.getElementsByClassName("count2")
var counter3 = document.getElementsByClassName("count3")
var counter4 = document.getElementsByClassName("count4")


function customSetInterval(start, clear, count, counter, time) {
    var x = start
    var set = setInterval(() => {

        if (x == clear) {
            clearInterval(set)
        } else {
            x += count
            counter.innerText = x
            valid == true
        }
    }, time)
}
window.addEventListener("scroll", function() {

    if (document.documentElement.scrollTop > 700) {
        // if (valid == false) {


        customSetInterval(0, 8000, 400, counter[0], 500)
        customSetInterval(0, 810, 30, counter2[0], 500)
        customSetInterval(0, 2000, 100, counter3[0], 500)
        customSetInterval(0, 20, 1, counter4[0], 500)

        // }
    }

    if (document.documentElement.scrollTop > 500) {
        topbtn.style.visibility = "visible"
    } else {
        topbtn.style.visibility = "hidden"
    }


})


var form = document.getElementById("my_form")



var passwordInput = document.getElementById("userPass")





form.addEventListener("input", function(e) {

    switch (e.target.id) {
        case "userName":
            nameValidation(e.target)
            break
        case "userEmail":
            emailValidation(e.target)
            break
        case "userPass":
            passwordValidation(e.target)
            break

    }
})


var nameValidation = (inp) => {
    var inputValue = inp.value.trim()
    if (inputValue.length < 3) handleError(inp, "enter at least 3 character")
    else handleError(inp, "")
    console.log(inputValue.length)

}


var emailValidation = (inp) => {

    var inputValue = inp.value
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (regExp.test(inputValue) == false) handleError(inp, "please enter a valid email")
    else handleError(inp, "")

}



var passwordValidation = (inp) => {
    var inputValue = inp.value
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (strongRegex.test(inputValue) == false)
        handleError(inp, "enter at least 1 uppercase character , 1 lowercase character , 1 number .......")
    else
        handleError(inp, "")
}


var handleError = (ele, msg) => {
    ele.nextElementSibling.innerText = msg
}