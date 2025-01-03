import {cn} from '@/lib/utils';

interface GenderBadgeProps {
  gender: 'male' | 'female';
}

export function GenderBadge({gender}: GenderBadgeProps) {
  return (<span
    className={cn("ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", gender === 'male' ? "bg-blue-100 text-blue-800" : "bg-pink-100 text-pink-800")}>
      {gender === 'male' ? 'Male' : 'Female'}
    </span>);
}
