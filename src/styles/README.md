# Стили проекта

## Переход на Tailwind CSS v4 + чистый CSS

Проект успешно мигрирован с SCSS на Tailwind CSS v4 и чистый CSS.

## Структура

- `global.css` - основной файл стилей с:
    - Импорт Tailwind CSS v4
    - Кастомные CSS переменные через `@theme`
    - Утилитные классы
    - Глобальные стили

## Как использовать

### 1. CSS переменные (цвета)

В Tailwind классах можно использовать:

```html
<div class="bg-main-color text-grey-color">
    <!-- Используем кастомные цвета -->
</div>
```

### 2. Кастомные утилитные классы

```html
<!-- Адаптивный грид: 1 колонка → 2 (xs) → 4 (lg) -->
<div class="grid-cols-1-xs-2-lg-4 gap-4">
    <div>Item 1</div>
    <div>Item 2</div>
    <!-- ... -->
</div>

<!-- Кастомный scrollbar -->
<div class="scrollbar-color-main-color-3 overflow-y-auto">
    <!-- Контент -->
</div>
```

### 3. Доступные цвета

- `main-color` - #51993d
- `main-color-2` - #85c450
- `main-color-3` - #cddba2
- `grey-color` - #eaebed
- `grey-color-2` - #5c5c5c

### 4. Breakpoints

- `xs` - 480px
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px

Используйте как обычно в Tailwind:

```html
<div class="text-sm md:text-base lg:text-lg">Адаптивный текст</div>
```

## Конфигурация

Конфигурация Tailwind CSS v4 происходит через CSS в файле `global.css` с помощью директивы `@theme`.

Больше не нужен файл `tailwind.config.mjs` или SCSS препроцессор!
