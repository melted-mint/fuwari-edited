import i18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export function pathsEqual(path1: string, path2: string) {
  const normalizedPath1 = path1.replace(/^\/|\/$/g, '').toLowerCase()
  const normalizedPath2 = path2.replace(/^\/|\/$/g, '').toLowerCase()
  return normalizedPath1 === normalizedPath2
}

function joinUrl(...parts: string[]): string {
  const joined = parts.join('/')
  return joined.replace(/\/+/g, '/')
}

export function getPostUrlBySlug(slug: string): string {
  return url(`/posts/${slug}/`)
}

export function getCategoryUrl(category: string): string {
  if (category === i18n(i18nKey.uncategorized))
    return url('/archive/category/uncategorized/')
  return url(`/archive/category/${category}/`)
}

export function getDir(path: string): string {
  const lastSlashIndex = path.lastIndexOf('/')
  if (lastSlashIndex < 0) {
    return '/'
  }
  return path.substring(0, lastSlashIndex + 1)
}

export function url(path: string) {
  return joinUrl('', import.meta.env.BASE_URL, path)
}

/* For Novels Below */
export function getNovelPostUrlBySlug(slug: string): string {
  return url(`/novel/${slug}/`)
}

export function getNovelCategoryUrl(category: string): string {
  if (category === i18n(i18nKey.uncategorized))
    return url('/novel/archive/category/uncategorized/')
  return url(`/novel/archive/category/${category}/`)
}

export function getNovelArchiveCategoryUrl(category: string): string {
  if (category === i18n(i18nKey.uncategorized))
    return url('/novel/archive/category/uncategorized/')
  return url(`/novel/archive/category/${category}/`)
}

/* For Spinoff Below */
export function getSpinoffPostUrlBySlug(slug: string): string {
  return url(`/spinoff/${slug}/`)
}

export function getSpinoffCategoryUrl(category: string): string {
  if (category === i18n(i18nKey.uncategorized))
    return url('/spinoff/archive/category/uncategorized/')
  return url(`/spinoff/archive/category/${category}/`)
}

export function getSpinoffArchiveCategoryUrl(category: string): string {
  if (category === i18n(i18nKey.uncategorized))
    return url('/spinoff/archive/category/uncategorized/')
  return url(`/spinoff/archive/category/${category}/`)
}
