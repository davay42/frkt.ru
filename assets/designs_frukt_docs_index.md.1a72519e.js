import{_ as s,o,c as r,a as e,b as t}from"./chunks/framework.58be8ee7.js";const v=JSON.parse('{"title":"Доки","description":"Переработанный сайт ФРУКТ со встроенным проектным дискурсом","frontmatter":{"title":"Доки","description":"Переработанный сайт ФРУКТ со встроенным проектным дискурсом","cover":"grav.png","status":"process","url":"https://docs.frkt.ru","date":"2020-05-10T00:00:00.000Z","type":"project","opportunities":[{"verb":"Редактировать","text":"содержание и оформление на GitHub","link":"https://github.com/DeFUCC/docs"}]},"headers":[],"relativePath":"designs/frukt/docs/index.md","filePath":"designs/frukt/docs/index.md"}'),n={name:"designs/frukt/docs/index.md"},a=e("p",null,[t("Разработанный с нуля новый сайт Фонда на "),e("a",{href:"https://getgrav.org",target:"_blank",rel:"noreferrer"},"flat file PHP CMS Grav"),t(".")],-1),i=e("p",null,"Современная система позволяющая создавать на основе Twig шаблонов и текстовых Markdown файлов сайт практически любой сложности. Технологии многоуровневого кеширования делают сайт молниеносным. Плюс к тому есть вполне неплохая админка.",-1),d=e("p",null,"Но главное — все содержимое и оформление сайта синхронизировано с GitHub репозиторием, что позволяет заниматься наполнением и развитием проекта локально, загружая изменения в репозиторий по мере готовности. А также дает возможность каждому без промедления включиться в совместное редактирование сайта. Плюс — надежный бэкап с историей изменений.",-1),c=e("p",null,[t("Разработка Twig шаблонов для вывода содержимого коллекций страниц оказалась даже проще, чем работа с JS приложениями. Используя основные наработки "),e("a",{href:"/designs/feeds/"},"Лент"),t(" в доках была воссоздана высокоуровневая система проектного дискурса — программы содержат проекты, которые в свою очередь состоят из объектов и событий. Конкретные задачи и приобретения тоже реализуемы и для них созданы все необходимые шаблоны, но все-таки файловая система работы с данными имеет свои ограничения. Для большого количества небольших и часто изменяемых объектов все-таки лучше подойдет реактивный JS движок. Grav фундаментально работает как отвечающий на запросы клиентов сервер, что сильно ограничивает возможности работы с живыми данными.")],-1),l=e("p",null,"Доки можно рассматривать как каркас, к которому крепятся Ленты — реактивные коллекции различных высказываний участников Фонда. Можно дополнить страницы сайта встраиваемыми скриптами, а можно использовать его как точку доступа API — Twig можно использовать и для создания шаблонов JSON ответов сервера.",-1),p=[a,i,d,c,l];function _(u,f,h,g,m,k){return o(),r("div",null,p)}const b=s(n,[["render",_]]);export{v as __pageData,b as default};
