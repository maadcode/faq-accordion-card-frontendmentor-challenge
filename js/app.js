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
  
// If you want enable multiple options, you must change the second parameter to true :D
  
(function() {
    new Accordion('.accordion', false)
})()