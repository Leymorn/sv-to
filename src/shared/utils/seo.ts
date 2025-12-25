import type { SeoMetadata } from '../model/SeoMetadata';

const DEFAULT_SITE_NAME = '"СВ" Торговое оборудование';
const DEFAULT_LOCALE = 'ru_RU';
const DEFAULT_TYPE = 'website' as const;

/**
 * Генерирует полный URL из пути
 */
export function getFullUrl(path: string, baseUrl?: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    const base = baseUrl || 'https://sv-to.ru';
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Генерирует полный URL для изображения
 */
export function getImageUrl(
    imagePath: string | undefined,
    baseUrl?: string
): string | undefined {
    if (!imagePath) return undefined;
    return getFullUrl(imagePath, baseUrl);
}

/**
 * Подготавливает SEO метаданные с дефолтными значениями
 */
export function prepareSeoMetadata(
    metadata: SeoMetadata,
    astroUrl: URL
): Required<Pick<SeoMetadata, 'title' | 'type' | 'locale' | 'siteName'>> &
    SeoMetadata {
    const baseUrl = `${astroUrl.protocol}//${astroUrl.host}`;
    const currentUrl = metadata.url || astroUrl.pathname;

    return {
        title: metadata.title,
        description: metadata.description || '',
        image: metadata.image
            ? getImageUrl(metadata.image, baseUrl)
            : undefined,
        imageAlt: metadata.imageAlt || metadata.title,
        type: metadata.type || DEFAULT_TYPE,
        url: getFullUrl(currentUrl, baseUrl),
        locale: metadata.locale || DEFAULT_LOCALE,
        siteName: metadata.siteName || DEFAULT_SITE_NAME,
        keywords: metadata.keywords,
        author: metadata.author,
        publishedTime: metadata.publishedTime,
        modifiedTime: metadata.modifiedTime,
        twitterCard: metadata.twitterCard || 'summary_large_image',
        twitterSite: metadata.twitterSite,
        twitterCreator: metadata.twitterCreator,
        canonical: metadata.canonical
            ? getFullUrl(metadata.canonical, baseUrl)
            : getFullUrl(currentUrl, baseUrl),
        robots: metadata.robots,
        additionalMeta: metadata.additionalMeta,
    };
}
