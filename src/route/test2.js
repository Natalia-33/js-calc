// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const Test = require('../class/test2/')
// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву контейнера
    name: 'index',
    // вказуємо назву компонентів
    component: ['heading'],

    // вказуємо назву сторінки
    title: 'Назва сторінки',

    // сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватись в layout

    // ... вказуємо дані,

    data: {
      test2: new Test().test2,
    },
  })

  // ↑↑ сюди вводимо JSON дані
})
