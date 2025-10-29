// блок с фотками, музыкой и тд
const links = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = link.getAttribute('data-tab');

    links.forEach(l => l.classList.remove('active'));
    contents.forEach(c => c.style.display = 'none');

    link.classList.add('active');
    document.getElementById(tabId).style.display = 'block';
  });
});


// блок с постами в профиле
const post = document.querySelectorAll('.tabs-btn');
const postContent = document.querySelectorAll('.tabs-content');
post.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('search-btns')) return;
    const tabId = button.getAttribute('data-tab');

    post.forEach(btn => btn.classList.remove('active'));
    postContent.forEach(content => content.style.display = 'none');

    button.classList.add('active');
    document.getElementById(tabId).style.display = 'block';
  });
});

