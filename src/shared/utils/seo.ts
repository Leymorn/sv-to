import type { SeoMetadata } from '../model/SeoMetadata';

const DEFAULT_TITLE = '"СВ" Торговое оборудование';
const DEFAULT_DESCRIPTION =
    'Производство и продажа торгового оборудования: манекены, витрины, стеллажи, экономпанели, системы труб и стоек. Качественное торговое оборудование для магазинов.';
const DEFAULT_KEYWORDS =
    'торговое оборудование, манекены, витрины, стеллажи, экономпанели, торговое оборудование для магазинов';
const DEFAULT_SITE_NAME = '"СВ" Торговое оборудование';
const DEFAULT_LOCALE = 'ru_RU';
const DEFAULT_TYPE = 'website' as const;
const DEFAULT_OG_IMAGE = '/og-images/og-logo.png';

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

    const resolvedTitle = metadata.title || DEFAULT_TITLE;
    const resolvedDescription = metadata.description || DEFAULT_DESCRIPTION;
    const resolvedKeywords = metadata.keywords || DEFAULT_KEYWORDS;
    const resolvedImagePath = DEFAULT_OG_IMAGE;
    const resolvedImageAlt = metadata.imageAlt || resolvedTitle;
    const resolvedCanonical = metadata.canonical || currentUrl;
    const resolvedType = metadata.type || DEFAULT_TYPE;

    return {
        title: resolvedTitle,
        description: resolvedDescription,
        image: getImageUrl(resolvedImagePath, baseUrl),
        imageAlt: resolvedImageAlt,
        type: resolvedType,
        url: getFullUrl(currentUrl, baseUrl),
        locale: metadata.locale || DEFAULT_LOCALE,
        siteName: metadata.siteName || DEFAULT_SITE_NAME,
        keywords: resolvedKeywords,
        author: metadata.author,
        publishedTime: metadata.publishedTime,
        modifiedTime: metadata.modifiedTime,
        twitterCard: metadata.twitterCard || 'summary_large_image',
        twitterSite: metadata.twitterSite,
        twitterCreator: metadata.twitterCreator,
        canonical: getFullUrl(resolvedCanonical, baseUrl),
        robots: metadata.robots,
        additionalMeta: metadata.additionalMeta,
    };
}
