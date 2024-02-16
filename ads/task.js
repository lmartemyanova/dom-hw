
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
        
        showAnnouncement(arr, current)
        current = (current + 1) % arr.length

    }, delay)
}

intervalForAnnouncements(rotator, showAnnouncement, 1000)