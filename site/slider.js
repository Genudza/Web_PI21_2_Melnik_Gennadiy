const gridViewBtn = document.querySelector('#grid-view-btn');
const listViewBtn = document.querySelector('#list-view-btn');

gridViewBtn.addEventListener('click', () => {
    productContainer.classList.remove('list-view');
    productContainer.classList.add('grid-view');
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
});

listViewBtn.addEventListener('click', () => {
    productContainer.classList.remove('grid-view');
    productContainer.classList.add('list-view');
    gridViewBtn.classList.remove('active');
    listViewBtn.classList.add('active');
});




