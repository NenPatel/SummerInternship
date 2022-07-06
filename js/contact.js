const targets = document.querySelectorAll('label');
    Array.from(targets).forEach((item) => {
        item.innerHTML = item.innerHTML.split('').map((elem, index) => {
            console.log(elem)
            return(
                `<span style="transition-delay: ${index*80}ms" >${elem}</span>`
            );
        }).join('')
    })