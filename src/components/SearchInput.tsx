import React from 'react';
import {Search} from 'lucide-react';
import {Input} from './ui/input';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({value, onChange}: SearchInputProps) {
  return (<div className="relative w-full">
    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type a name..."
      className="pl-9 w-full"
    />
  </div>);
}
