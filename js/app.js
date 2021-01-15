const DATA = {
    mobile: {
        "woman": "./images/illustration-woman-online-mobile.svg",
        "bg": "./images/bg-pattern-mobile.svg"
    },
    desktop: {
        "woman": "./images/illustration-woman-online-desktop.svg",
        "bg": "./images/bg-pattern-desktop.svg"
    }
}

class Accordion {
    constructor(selector, multiple) {
        this.accordion = document.querySelector(selector)
        this.multiple = multiple
      
        this.bindEvents()
    }
    
    bindEvents() {
        this.accordion.querySelectorAll('.accordion__item--title').forEach(itemTitle => {
            itemTitle.addEventListener("click", () => {
                let item = itemTitle.parentNode
                this.validateMultiple(item)
                item.classList.toggle('active')
            })
        })
    }
    
    validateMultiple(selectedItem) {
        if(this.multiple) return;
        this.accordion.querySelectorAll('.accordion__item').forEach(item => {
            if(selectedItem == item) return;
            item.classList.remove('active')
        })
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const VIEWPORT_WIDTH = window.screen.width
    let container = document.querySelector('.container__img')

    if(VIEWPORT_WIDTH >= 820) {
        let data = DATA.desktop
        let imgWoman = document.createElement('img')
        imgWoman.classList.add('woman2')
        imgWoman.src = data.woman
        container.appendChild(imgWoman)
        let imgBg = document.createElement('img')
        imgBg.classList.add('pattern2')
        imgBg.src = data.bg
        container.appendChild(imgBg)
    } else {
        let data = DATA.mobile
        let imgWoman = document.createElement('img')
        imgWoman.classList.add('woman')
        imgWoman.src = data.woman
        container.appendChild(imgWoman)
        let imgBg = document.createElement('img')
        imgBg.classList.add('pattern')
        imgBg.src = data.bg
        container.appendChild(imgBg)
    }
       
    (function() {
        new Accordion('.accordion', false)
    })()
})


