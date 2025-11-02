// блок с фотографиями и основным содержимым
let contentbtn = document.querySelectorAll('.tab_btn')
let content = document.querySelectorAll('.tab_content')

contentbtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    contentbtn.forEach(b=>b.classList.remove('active'));
    content.forEach(c=>c.style.display = 'none');

    btn.classList.add('active');
    content[i].style.display = '';
  })
})
// блок с постами
let tabsBtn = document.querySelectorAll('.tabs_btn')
let tabsContent = document.querySelectorAll('.tabs_content')

tabsBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    tabsBtn.forEach(b => b.classList.remove('active'));
    tabsContent.forEach(c => c.style.display = 'none');

    btn.classList.add('active');
    tabsContent[i].style.display = '';
  })
})
