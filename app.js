const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        var c = entry.target.classList;
        var cl = c[c.length - 1];
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const right =  document.querySelectorAll('.right');
right.forEach((el) => {
    console.log(el);
    observer.observe(el);
});

const left =  document.querySelectorAll('.left');
left.forEach((el) => {
    observer.observe(el);
});