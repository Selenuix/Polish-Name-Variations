import type {NameVariations} from '@/types/names';

export function filterNames(names: Record<string, NameVariations>, searchTerm: string, genderFilter: string): [string, NameVariations][] {
  const term = searchTerm.toLowerCase();
  return Object.entries(names).filter(([formal, data]) => {
    const matchesSearch = formal.toLowerCase().includes(term) || data.diminutives.some(dim => dim.toLowerCase().includes(term));
    const matchesGender = genderFilter === 'all' || data.gender === genderFilter;
    return matchesSearch && matchesGender;
  });
}

export function sortNames(names: [string, NameVariations][], sortBy: string): [string, NameVariations][] {
  return [...names].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a[0].localeCompare(b[0]);
      case 'name-desc':
        return b[0].localeCompare(a[0]);
      case 'diminutives':
        return b[1].diminutives.length - a[1].diminutives.length;
      default:
        return 0;
    }
  });
}
