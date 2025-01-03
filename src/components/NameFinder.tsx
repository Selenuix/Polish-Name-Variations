import {useMemo, useState} from 'react';
import {polishNames} from '@/data/polishNames';
import {SearchInput} from './SearchInput';
import {NameCard} from './NameCard.tsx';
import {FilterBar} from './FilterBar';
import {filterNames, sortNames} from '@/lib/nameUtils';
import type {NameVariations} from "@/types/names.ts";

export function NameFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const matchingNames: [string, NameVariations][] = useMemo(() => {
    const filtered: [string, NameVariations][] = filterNames(polishNames, searchTerm, genderFilter);
    return sortNames(filtered, sortBy);
  }, [searchTerm, genderFilter, sortBy]);

  return (<>
    <div className="mb-6 sm:mb-8 max-w-md mx-auto">
      <SearchInput value={searchTerm} onChange={setSearchTerm}/>
    </div>
    <FilterBar
      genderFilter={genderFilter}
      onGenderChange={setGenderFilter}
      sortBy={sortBy}
      onSortChange={setSortBy}
      totalCount={matchingNames.length}/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {matchingNames.length === 0 ? (<div className="text-center py-8 text-muted-foreground col-span-full">
        No names found. Try a different search term.
      </div>) : (matchingNames.map(([formal, data]) => (<NameCard key={formal} formal={formal} data={data}/>)))}
    </div>
  </>);
}
