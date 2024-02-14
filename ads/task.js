
const rotator = document.querySelectorAll('.rotator__case');

function showAnnouncement(arr, currentIndex) {
    arr.forEach(element => {
        element.classList.remove('rotator__case_active')
    });
    arr[currentIndex].classList.add('rotator__case_active')
}

function intervalForAnnouncements (arr, showAnnouncement, delay) {
    let current = 0;

    setInterval(() => {
        if (current === arr.length) {
            current = 0
        } else {
            showAnnouncement(arr, current)
            current++
        }
    }, delay)
}

intervalForAnnouncements(rotator, showAnnouncement, 1000)