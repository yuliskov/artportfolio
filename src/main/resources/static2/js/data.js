define(function(){
    // TODO: del 'single'
    // fields: title, description, url, upload, style, hide
    var data = [
    {"title": "никита-лыськов-home", "content": {"url": "img/logos/Transformation.gif"}},
    {"title": "анимация", "hide": "url content-upload style hide btn-collapse", "children": [
        {"title": "Трейлер", "content": {"url": "https://vimeo.com/118504449", "title": "Трейлер", "description": "Свежий трейлер из коммерческих и некоммерческих работ"}}, 
        {"title": "Я купил велосипед", "content": {"url": "https://vimeo.com/93370126?from=outro-local", "title": "Я купил велосипед", "description": "Фильм о велоспорте"}}, 
        {"title": "В море никого нет", "content": {"url": "https://vimeo.com/93370514", "title": "В море никого нет", "description": "Анимация на стихи Саши Лукьяненко"}}, 
        {"title": "Мальчик", "content": {"url": "https://vimeo.com/93370882", "title": "Мальчик", "description": "Фильм о мальчике, который много мечтал"}}, 
        {"title": "Untitled", "content": {"url": "https://www.youtube.com/watch?v=Imx52RhczX4", "title": "Virgo Four - Untitled", "description": "Не всегда хватает сил  закончить начатое"}}, 
        {"title": "Червяк (Серия-1)", "content": {"url": "https://www.youtube.com/watch?v=ve7_J4QAXuU", "title": "Червяк (Серия-1)", "description": "Червивая жизнь"}}, 
        {"title": "Червяк (Серия-2)", "content": {"url": "https://www.youtube.com/watch?v=V_XWBBNwAWc", "title": "Червяк (Серия-2)", "description": "Червивая жизнь продолжается"}}, 
        {"title": "Это птицы", "content": {"url": "https://www.youtube.com/watch?v=2mrcfL9zmG4", "title": "Это птицы", "description": "Мультфильм о любви к братьям нашим меньшим"}}, 
        {"title": "Это Я", "content": {"url": "https://www.youtube.com/watch?v=5jwcw8uDaUU", "title": "Это Я", "description": "Краткая биография человечества"}}, 
        {"title": "There's That Grin", "content": {"url": "https://www.youtube.com/watch?v=bNGt0vMkvn8", "title": "Deerhoof - There's That Grin", "description": "Неофициальное музыкальное видео на музыку Deerhoof - There's That Grin"}}, 
        {"title": "Close your eyes", "content": {"url": "https://www.youtube.com/watch?v=G4HDIheB8sk", "title": "Euphoria - Close your eyes", "description": "Оффициальное видео для коллектива Euphoria из Днепропетровска"}}, 
        {"title": "Частицы", "content": {"url": "https://www.youtube.com/watch?v=iPGRr7kxLZg", "title": "Дельфин - Частицы", "description": "Неоффициальное музыкальное видео, музыка: Дельфин - Частицы"}}, 
        {"title": "Темно", "content": {"url": "https://vimeo.com/122636447", "title": "Дельфин - Темно", "description": "Неоффициальное музыкальное видео, музыка: Дельфин - Темно"}}, 
        {"title": "МирМайТру...", "content": {"url": "https://www.youtube.com/watch?v=GDk57j7tgiM", "title": "KRAKATAU - МирМайТру...", "description": "Оффициальное видео для группы KRAKATAU"}}, 
        {"title": "The Gerogerigegege", "content": {"url": "https://www.youtube.com/watch?v=NcQSnGKnh48", "title": "The Gerogerigegege - Her Name's On My Cock", "description": "Неоффициальное музыкальное видео, для группы The Gerogerigegege. Осторожно! Экспериментальная анимация!"}}, 
        {"title": "Двери", "content": {"url": "https://vimeo.com/122637055", "title": "Двери", "description": "2008 год, мой первый анимационный фильм"}}, 
    ]},
    {"title": "рисунки", "style": "calendar", "hide": "title url content-title content-description style hide btn-collapse", "children": [
        {"title": "", "content": {"url": "img/comics/001.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/002.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/003.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/004.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/005.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/006.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/007.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/008.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/009.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/010.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/011.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/012.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/013.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/014.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/015.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/016.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/017.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/018.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/019.jpg", "title": "", "description": ""}},
        {"title": "", "content": {"url": "img/comics/020.jpg", "title": "", "description": ""}},
    ]},  
    {"title": "контакты", "hide": "content-upload content-title content-description content-url style hide btn-collapse", "content": {"title": "", "url": "img/logos/Metamorphose.gif", "description": "<p><strong>Никита Лыськов</strong> - художник-мультипликатор,  родился в 1983 году,  в  Днепропетровске.</p><p>1997-2002  Днепропетровское   Художественное   Училище   (Живопись)</p><p>2004-2006  Днепропетровский   Национальный   Университет  (Дизайн)</p><p>2007-2012  КНУТКиТ  им. Карпенка-Карого  (Режиссура  анимационного  фильма)</p><p>В своем творчестве, Никита  отдает  предпочтение традиционной  рисованной анимации,</p> <p>кадр за кадром, с минимальным применением спецэффектов. Так  же  Никита  проводит</p>  <p>лекции-кинопоказы   по   истории   анимации.  Живет   и   работает   в   Днепропетровске.</p>"}, "children": [
        {"title": "vk.com", "url": "http://vk.com/nikita_liskov"}, 
        {"title": "facebook.com", "url": "https://www.facebook.com/nikita.liskov"},
        {"title": "youtube.com", "url": "https://www.youtube.com/user/Nikitaliskov/videos"}, 
        {"title": "nikitaliskov@gmail.com", "url": "mailto://nikitaliskov@gmail.com"},
    ]},
    ];
    return data;
})