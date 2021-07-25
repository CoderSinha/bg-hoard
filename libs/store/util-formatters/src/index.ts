export * from './lib/store-util-formatters.module';
export function formatRating(rating: number) {
    return `${Math.round(rating * 100) / 10} / 10`;
  }