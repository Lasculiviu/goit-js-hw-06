document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelector('#categories');
    const items = categories.querySelectorAll('.item');

 
    console.log(`Numărul total de categorii: ${items.length}`);

    items.forEach(item => {
        const categoryTitle = item.querySelector('h2').textContent;
        const elementsCount = item.querySelectorAll('ul li').length;

        console.log(`Categoria: ${categoryTitle}, Numărul de elemente: ${elementsCount}`);
    });
});