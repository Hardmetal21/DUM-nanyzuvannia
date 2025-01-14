$(document).ready(function() {
    let currentRotation = 0;

    $(".image").click(function() {
        var img = $(this); 
        var src = img.attr('src');
        var naturalWidth = img[0].naturalWidth; 
        var naturalHeight = img[0].naturalHeight; 

        var windowWidth = $(window).width() * 0.9; 
        var windowHeight = $(window).height() * 0.9; 

        var scale = Math.min(windowWidth / naturalWidth, windowHeight / naturalHeight);
        var finalWidth = naturalWidth * scale;
        var finalHeight = naturalHeight * scale; 

        $("body").append(`
            <div class='popup'>
                <div class='popup_bg'></div>
                <img src='${src}' class='popup_img' style='width:${finalWidth}px; height:${finalHeight}px;'/>
                <div class='rotate-buttons'>
                    <button id="rotate-left">Rotate Left</button>
                    <button id="rotate-right">Rotate Right</button>
                </div>
            </div>
        `);

        $(".popup").fadeIn(500).css('display', 'flex');

        $(".popup_bg").click(function() {
            $(".popup").fadeOut(500);
            setTimeout(function() { 
                $(".popup").remove(); 
                currentRotation = 0;
            }, 800);
        });


        function adjustSizeAfterRotation(rotation) {
            const isRotated = (rotation / 90) % 2 !== 0; // Перевірка: чи картинка повернута на 90 або 270 градусів

            // Якщо повернуто на 90 або 270 градусів, міняємо ширину та висоту місцями
            const adjustedWidth = isRotated ? finalHeight : finalWidth;
            const adjustedHeight = isRotated ? finalWidth : finalHeight;

            $(".popup_img").css({
                width: `${adjustedWidth}px`,
                height: `${adjustedHeight}px`
            });
        }

        // Функція обертання ліворуч
        $("#rotate-left").click(function() {
            currentRotation -= 90;
            $(".popup_img").css("transform", `rotate(${currentRotation}deg)`);
            adjustSizeAfterRotation(currentRotation);
        });

        // Функція обертання праворуч
        $("#rotate-right").click(function() {
            currentRotation += 90;
            $(".popup_img").css("transform", `rotate(${currentRotation}deg)`);
            adjustSizeAfterRotation(currentRotation);
        });
    });
});
