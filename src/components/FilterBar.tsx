import {Button} from './ui/button';

interface FilterBarProps {
  genderFilter: string;
  onGenderChange: (gender: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount: number;
}

export function FilterBar({
                            genderFilter, onGenderChange, sortBy, onSortChange, totalCount
                          }: FilterBarProps) {
  return (<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Filter:</span>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant={genderFilter === 'all' ? 'default' : 'outline'}
          onClick={() => onGenderChange('all')}
        >
          All
        </Button>
        <Button
          size="sm"
          variant={genderFilter === 'male' ? 'default' : 'outline'}
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 border-blue-200"
          onClick={() => onGenderChange('male')}
        >
          Male
        </Button>
        <Button
          size="sm"
          variant={genderFilter === 'female' ? 'default' : 'outline'}
          className="bg-pink-100 hover:bg-pink-200 text-pink-800 border-pink-200"
          onClick={() => onGenderChange('female')}
        >
          Female
        </Button>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sort by:</span>
        <select
          className="text-sm border rounded-md px-2 py-1"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="name">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="diminutives">Most Diminutives</option>
        </select>
      </div>

      <div className="text-sm text-muted-foreground">
        Total: <span className="font-medium text-foreground">{totalCount}</span>
      </div>
    </div>
  </div>);
}
