window.addEventListener('load', function () {
    var container = document.querySelector('#click-img-container')
    var targetImg = container.querySelector('img')
    var imgs = document.querySelectorAll('#main-content img');
    targetImg.addEventListener('click', function (e) {
        container.style.display = 'none';
        e.stopPropagation();
    }, false);

    for (var i = 0; i < imgs.length; ++i) {
        var img = imgs[i];
        img.addEventListener('click', (function (src, rate) {
            return function (e) {
                e.stopPropagation();
                if (window.innerWidth < 980) {
                    return
                }
                targetImg.style.height = targetImg.style.width = 'auto';
                if (window.innerWidth / window.innerHeight > rate) {
                    targetImg.style.height = window.innerHeight + 'px';
                } else {
                    targetImg.style.width = window.innerWidth + 'px';
                }
                container.style.height = window.innerHeight + 'px'
                container.style.lineHeight = window.innerHeight + 'px'
                container.style.display = 'block';
                targetImg.src = src;
            };
        }(img.src, img.width / img.height)), false)
    }

    //close
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        container.style.display = "none";
    }
})