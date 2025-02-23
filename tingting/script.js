const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
    image.addEventListener('click', () => {
        alert('婷婷说：谢谢你喜欢我！');
    });
});
// JavaScript实现点击按钮显示更多内容
const showMoreBtn = document.getElementById('showMoreBtn');
const moreContent = document.getElementById('moreContent');

showMoreBtn.addEventListener('click', () => {
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        showMoreBtn.textContent = '隐藏内容';
    } else {
        moreContent.style.display = 'none';
        showMoreBtn.textContent = '显示更多';
    }
});

// JavaScript生成樱花
const sakuraContainer = document.querySelector('.sakura-background');

function createSakura() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    sakura.style.left = `${Math.random() * 100}vw`;
    sakura.style.animationDuration = `${Math.random() * 5 + 5}s`;
    sakuraContainer.appendChild(sakura);

    setTimeout(() => {
        sakura.remove();
    }, 10000); // 10秒后移除樱花
}

setInterval(createSakura, 500); // 每0.5秒生成一朵樱花