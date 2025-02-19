---
title: Онлайн-словарь новых слов
description: Веб-приложение для сбора и обзора придуманных в ходе игры слов
status: development
cover: canvas.png
date: 2019-04-02

list: etovoteto-app
type: project
---

Интерактивная среда для игры в слова. Приложение ориентировано в первую очередь на заполнение и изучение с мобильных устройств в процессе игры с друзьями или в качестве веселого досуга.

Возможности авторов онлайн-словаря этовотэто:

- добавлять придуманные слова и определения
- связывать слова и определения друг с другом
- иметь свой счет добавленных слов и определений
- наполнить профиль информацией о себе
- создавать вложенные тематические комнаты
- переходить между карточками, делиться лучшими с друзьями

Разработка интерактивного словаря – непростой вызов для фронтендера, т.к. здесь не обойтись без общей базы данных, где будут собираться придуманные слова и определения к ним.

Все началось с PHP системы построенной на API [Directus CMS](./directus/index.md) и с интерфейсом на VueJS. Система работала вполне неплохо. Но в какой-то момент я не смог следовать за обновлениями этой системы (она перешла на другую базу данных, а затем сменила платформу на JavaScript). А меня все больше манила разработка сервисов с использованием децентрализованной базы данных GUN.

Во [второй итерации словаря придуманных слов](./vuetify-gun/index.md) на основе базы данных GUN и UI-фреймфорка Vuetify получилось создать первую децентрализованную версию приложения. Но лишь с [третьего подхода](./v3/index.md) мне удалось включить всю мощь децентрализации и криптографии. Слова и определения хранятся под из хешами, что гарантирует неизменность данных, а пользовательские связи между словами подписываются асимметричными ключами шифрования.

Некоторые проблемы с парсингом неизменяемых данных в доступной тогда версии GUN породили массу проблем с производительностью системы и несмотря на попытки запустить её продвижение, пользователей в этой версии практически не было. Но масса опыта и ценных наработок в плане алгоритмов не пропала зря и теперь активно внедряется в разработке более универсального и международного проекта [Gun-Vue](../../defucc/gun-vue/index.md)
