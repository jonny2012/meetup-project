
import {eventsStore} from "./api.js";

const createElem = ({ tag, className="", src= "", text}) => {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    element.src = src
    return element
  }

eventsStore.forEach((element)=>{
  const articles = document.querySelector('.articles')
  const createArticle = () =>{
    const container = createElem( {tag:'div', className: 'article', })
    const  img = createElem({tag: 'img',  src:element.image})
    const  online = createElem({tag: 'img', className:'show', src: '/page2img/Online Event.svg'})
    const  text_box = createElem({tag: 'div', className:'article__text'})
    const  date = createElem({tag:'span', className:'date', text:element.date})
    const  title = createElem({tag:'h4',  text:element.title})
    const  distance = createElem({tag: 'span', className:'text', text:`${element.category} (${element.distance} km)`})
    const  attendees = createElem({tag: 'div',  className:'attendees' })
   
    const  attendNum = createElem({tag:'span', text:`Attendees ${element.attendees}`})

   if(attendNum.textContent !== "Attendees undefined"){
   attendees.append(attendNum)
  
   }else{  attendNum.textContent = ""
   img.style.height = "90px"
}
if(element.type !== "online") online.classList.add('hide')
  text_box.append(date,title,distance,attendees)
  container.append(img,online,text_box)
  articles.append(container)

  }
  createArticle()

})

const  selectmenu = document.querySelectorAll('selectmenu')
console.log(selectmenu)

const btn = document.querySelectorAll('.sort-')

btn.forEach((element)=>{

element.addEventListener('click', (e)=>{

   if(element.className === "sort-"){
     element.classList.add('active')
   }
   else element.classList.remove('active')

})
})












