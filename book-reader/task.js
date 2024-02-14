const content = document.querySelector('.book__content')
const control = document.querySelector('.book__control')
const book = document.querySelector('.book')
const links = document.getElementsByTagName('a')

for (let index = 0; index < links.length; index++) {
    const link = links[index];
    link.onclick = () => {
        return false
    };
};

for (let index = 0; index < control.children.length; index++) {
    const size = control.children[index];

    size.addEventListener('click', function() {
        for (let index = 0; index < control.children.length; index++) {
            const s = control.children[index];
            if (s.classList.contains('font-size_active')) {
                s.classList.remove('font-size_active')
            }
        }

        size.classList.add('font-size_active')

        if (!size.getAttribute('data-size')) {
            book.classList.remove(...book.classList)
            book.classList.add('book')
        }
        else {
            book.classList.remove(...book.classList)
            book.classList.add('book', `book_fs-${size.getAttribute('data-size')}`)
        }
    })
}