const boxImg = document.querySelectorAll('.box-img .image')
const Box = document.querySelector('.box-img')
const zoomGlass = document.querySelector('.glass')
const zoom = 4

boxImg.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        zoomGlass.classList.remove('hide')

        let posx = e.pageX - Box.offsetLeft;
        let posy = e.pageY - Box.offsetTop;

        let movex = (e.offsetX / el.offsetWidth) * 100;
        let movey = (e.offsetY / el.offsetHeight) * 100;


        const takeSrcImg = el.querySelector('img')

        zoomGlass.style.cssText = `
        background-image: url(${takeSrcImg.src});
        background-size: ${takeSrcImg.width * zoom}px ${takeSrcImg.height * zoom}px;
        background-position: ${movex}% ${movey}%;
        left: ${posx}px;
        top: ${posy}px;
    `;

    })

    el.addEventListener('mouseleave', (e) => {
        zoomGlass.classList.add('hide')
    })
})