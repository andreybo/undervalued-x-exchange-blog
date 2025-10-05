# ПРАВИЛЬНЫЕ ЦВЕТА ИЗ ОРИГИНАЛА

## Цветовая схема из old-website/src/index.css

### Primary (Navy - Темно-синий)
```css
--primary: 209 100% 14%;           /* hsl(209, 100%, 14%) - #00284D */
--primary-foreground: 0 0% 100%;   /* Белый текст */
--primary-glow: 209 90% 24%;       /* Светлее для hover */
```

### Accent (GOLD - Золотой, НЕ синий!)
```css
--accent: 42 44% 60%;              /* hsl(42, 44%, 60%) - #BC9C5E */
--accent-foreground: 209 100% 14%; /* Navy текст */
--accent-glow: 42 54% 70%;         /* Светлее для hover */
```

### Градиенты
```css
--hero-gradient: linear-gradient(135deg, 
  hsl(209 100% 14%) 0%,    /* Navy */
  hsl(195 100% 25%) 100%   /* Teal */
);

--stats-gradient: linear-gradient(135deg, 
  hsl(209 90% 24%) 0%, 
  hsl(195 90% 35%) 100%
);
```

---

## Использование в компонентах

### Хедер (Header)
```scss
// Базовый стиль - БЕЛЫЙ фон
background-color: rgba(255, 255, 255, 0.98);
backdrop-filter: blur(8px);

// При скролле на темных секциях - NAVY фон
&.header--dark {
  background-color: hsla(209, 100%, 14%, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

// Кнопка Get Started
background: hsl(209, 100%, 14%);  // Navy
color: white;

// На темных секциях - золотая кнопка
background: hsl(42, 44%, 60%);    // Gold
color: hsl(209, 100%, 14%);       // Navy text
```

### Hero Section
```scss
// Фон - градиент из Navy в Teal
background: linear-gradient(135deg, 
  hsl(209, 100%, 14%) 0%, 
  hsl(195, 100%, 25%) 100%
);

// Акцентный текст - ЗОЛОТОЙ
color: hsl(42, 44%, 60%);
```

### Footer
```scss
// Фон - Navy
background-color: hsl(209, 100%, 14%);

// Иконки - ЗОЛОТЫЕ
color: hsl(42, 44%, 60%);

// Кнопка - ЗОЛОТАЯ
background: hsl(42, 44%, 60%);
color: hsl(209, 100%, 14%);

// Ховер эффект - светлее золотой
&:hover {
  background: hsl(42, 54%, 70%);
  box-shadow: 0 0 20px rgba(188, 156, 94, 0.4);
}
```

---

## SCSS Переменные

```scss
$dark: hsl(209, 100%, 14%);    // Navy - основной
$gold: hsl(42, 44%, 60%);      // Gold - акцент
$white: hsl(0, 0%, 100%);      // Белый
$grey: hsl(0, 0%, 96%);        // Светло-серый

// Для совместимости
$accent: hsl(42, 44%, 60%);    // ЗОЛОТОЙ акцент
$primary: hsl(209, 100%, 14%); // Navy primary
```

---

## Тени и эффекты

### Gold Glow (для золотых элементов)
```scss
box-shadow: 0 0 20px rgba(188, 156, 94, 0.3);

// Hover
box-shadow: 0 0 20px rgba(188, 156, 94, 0.4);
```

### Navy Shadow (для navy элементов)
```scss
box-shadow: 0 4px 12px rgba(0, 40, 77, 0.25);
```

---

## ❌ ЧТО НЕ НАДО ИСПОЛЬЗОВАТЬ

### НЕТ синего акцента!
```scss
// ❌ НЕПРАВИЛЬНО
--accent: 217 91% 60%;  // Это синий, его НЕТ в оригинале!

// ✅ ПРАВИЛЬНО
--accent: 42 44% 60%;   // Золотой
```

---

## Конвертация цветов

### Navy (Primary)
- HSL: `hsl(209, 100%, 14%)`
- RGB: `rgb(0, 40, 77)`
- HEX: `#00284D`

### Gold (Accent)
- HSL: `hsl(42, 44%, 60%)`  
- RGB: `rgb(188, 156, 94)`
- HEX: `#BC9C5E`

### Gold Hover
- HSL: `hsl(42, 54%, 70%)`
- RGB: `rgb(209, 184, 142)`
- HEX: `#D1B88E`

---

## Проверка

✅ Primary = Navy (темно-синий) `#00284D`  
✅ Accent = Gold (золотой) `#BC9C5E`  
✅ Hero = Navy gradient  
✅ Header = Белый, на скролле Navy  
✅ Buttons = Gold с Navy текстом  
✅ Footer = Navy фон с Gold акцентами  

❌ НЕТ СИНЕГО АКЦЕНТА!
