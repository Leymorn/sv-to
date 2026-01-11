export interface SeoMetadata {
    /** Заголовок страницы (используется в title и og:title) */
    title: string;
    /** Переопределение og:title (если нужно отличаться от title) */
    ogTitle?: string;
    /** Описание страницы (используется в meta description и og:description) */
    description?: string;
    /** Переопределение og:description (если нужно отличаться от description) */
    ogDescription?: string;
    /** Изображение для Open Graph (путь относительно public или полный URL) */
    image?: string;
    /** Альтернативный текст для изображения */
    imageAlt?: string;
    /** Тип контента для Open Graph (по умолчанию 'website') */
    type?: 'website' | 'article' | 'product' | 'profile';
    /** URL страницы (по умолчанию берется из Astro.url) */
    url?: string;
    /** Локаль страницы (по умолчанию 'ru_RU') */
    locale?: string;
    /** Имя сайта для Open Graph */
    siteName?: string;
    /** Ключевые слова для SEO */
    keywords?: string;
    /** Автор статьи (для type='article') */
    author?: string;
    /** Дата публикации (для type='article') */
    publishedTime?: string;
    /** Дата обновления (для type='article') */
    modifiedTime?: string;
    /** Twitter карточка тип */
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
    /** Переопределение twitter:title */
    twitterTitle?: string;
    /** Переопределение twitter:description */
    twitterDescription?: string;
    /** Twitter handle (например, '@username') */
    twitterSite?: string;
    /** Twitter creator */
    twitterCreator?: string;
    /** Канонический URL */
    canonical?: string;
    /** Robots meta теги */
    robots?: string;
    /** Дополнительные meta теги */
    additionalMeta?: Array<{
        name?: string;
        property?: string;
        content: string;
    }>;
}
