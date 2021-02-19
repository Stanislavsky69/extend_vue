# Тестовое задание
***
Процесс наследования

1. Копируем config.theme.default.js в корне проекта с именем config.theme.|ваше название|.js
2. Внутри пишем  
```
   import ConfigDefault from './config.theme.default'  
   let CopyConfig = Object.assign({}, ConfigDefault) //Копируем конфиг
```
3. У нас есть конфиг, теперь нужно переопределить страницу. Нужно создать в папке pages папку с 
названием вашей темы и скопировать наследуемую страницу и внутри неё написать
```
import AppCatalogDefault from "@/pages/default/AppCatalog.vue";
export default {
  name: 'AppCatalogSite',
  extends: AppCatalogDefault,
}
```
4. Далее нам нужно переопределить модуль стора. Аналогично создаем в папке store папку с нашей темой
и с аналогичной вложенностью до файла index.js. Внутри пишем:
```
import PageDefault from '@/store/default/staticPage/modules/page';

export default class Page extends PageDefault {
    constructor() {
        super();
        
        /*
            Здесь мы можем переопределять все что нам нужно. Через this обращаемся к элементам
        */
    }
}

```
5. Далее нужно подключить этот модуль в файле config.theme.|ваша тема|.js
```
import ConfigDefault from './config.theme.default'  
import PageSite from './src/store/site/staticPage/modules/page'

let CopyConfig = Object.assign({}, ConfigDefault) //Копируем конфиг
CopyConfig.store.modules.StaticPage.modules.page = new PageSite()

```

6. Теперь нам нужны стили для проекта. Создаем в папке assets директорию с именем нашей темы, а в ней
два файла - _variabless.scss и _ui.scss  
В файле _variabless.scss наследуем переменные из default так:
```
@import "../default/variabless";

```
7. Далее в файле .env.development прописываем название темы
```
VUE_APP_THEME=site

```
8. Запускаем проект 
```
npm run serve
```

