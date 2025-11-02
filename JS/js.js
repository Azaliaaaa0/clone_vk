let contentbtn = document.querySelectorAll('.tab_btn')
let content = document.querySelectorAll('.tab_content')


contentbtn.forEach((tab_btn, i) => {
  tab_btn.addEventListener('click', () => {
    contentbtn.forEach(b=>b.classList.remove('active'));
    content.forEach(c=>c.style.display = 'none');

    tab_btn.classList.add('active');
    content[i].style.display = '';
  })
})

