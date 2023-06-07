const list = document.querySelectorAll('.card-question');


list.forEach(element =>{
  element.addEventListener('click', ()=>{
      removeClass();
      element.lastElementChild.classList.toggle('active');
      element.firstElementChild.classList.toggle('active-2');
  })
})


const removeClass = ()=>{
  list.forEach(e => {
    e.lastElementChild.classList.remove('active')
    e.firstElementChild.classList.remove('active-2')
  });
}
