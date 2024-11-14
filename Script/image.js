$(document).ready(function() {// запуск сайту

    $(".image").click(function(){	// натиск на зображення
        var img = $(this);	// отримання зображення
        var wid = img.width()
        var hei = img.height()
        if(wid <= 200 && hei > wid){ wid*=2.5}
        else if(wid > hei || wid + hei <= 650){wid*=2}
        var src = img.attr('src'); // атрибут шляху до картини
        $("body").append("<div class='popup'> "+ //основа для картинки
            "<div class='popup_bg'></div>"+ // Затемнення
            "<img src='"+src+"' class='popup_img' style='width: "+wid+"px'/>"+ // Збільшення
            "</div>");
        $(".popup").fadeIn(500).css('display','flex'); // Повільне виведення
        $(".popup_bg").click(function(){	// Клік по фону забирає зображення
            $(".popup").fadeOut(500);	// повільне убирання
            setTimeout(function() {	// Таймер
                $(".popup").remove(); // видалення розмітки
            }, 800);
        });
    });
    
});



