import React, {useMemo, useState} from 'react';
import {polishNames} from '../data/polishNames';
import {SearchInput} from './SearchInput';
import {NameCard} from './NameCard';

export function NameFinder() {
  const [searchTerm, setSearchTerm] = useState('');

  const matchingNames = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return Object.entries(polishNames).filter(([formal, data]) => {
      return formal.toLowerCase().includes(term) || data.diminutives.some(dim => dim.toLowerCase().includes(term));
    });
  }, [searchTerm]);

  return (<div className="container px-4 sm:px-6 py-6 sm:py-8 max-w-7xl mx-auto">
    <div className="space-y-2 mb-6 sm:mb-8 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Polish Name Variations</h1>
      <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
        Discover formal and diminutive versions of Polish names
      </p>
    </div>

    <div className="mb-6 sm:mb-8 max-w-md mx-auto">
      <SearchInput value={searchTerm} onChange={setSearchTerm}/>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {matchingNames.length === 0 ? (<div className="text-center py-8 text-muted-foreground col-span-full">
        No names found. Try a different search term.
      </div>) : (matchingNames.map(([formal, data]) => (<NameCard key={formal} formal={formal} data={data}/>)))}
    </div>
  </div>);
}
