import {Card, CardContent, CardHeader} from './ui/card';
import {Badge} from './ui/badge';
import type {NameVariations} from '@/types/names';
import {GenderBadge} from './GenderBadge';

interface NameCardProps {
  formal: string;
  data: NameVariations;
}

export function NameCard({formal, data}: NameCardProps) {
  return (<Card className="h-full">
    <CardHeader className="pb-3">
      <div className="flex items-center">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground">{formal}</h3>
        <GenderBadge gender={data.gender}/>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {data.diminutives.length > 0 ? (data.diminutives.map((diminutive: string) => (
          <Badge key={diminutive} variant="secondary" className="text-xs sm:text-sm">
            {diminutive}
          </Badge>))) : (<p className="text-sm text-muted-foreground">No diminutives available.</p>)}
      </div>
    </CardContent>
  </Card>);
}
