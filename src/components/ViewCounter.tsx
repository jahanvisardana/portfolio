import { Eye } from 'lucide-react';
import { usePageViews } from '../hooks/usePageViews';

export default function ViewCounter() {
  const views = usePageViews();

  return (
    <div className="view-counter" aria-label={views != null ? `${views.toLocaleString()} total views` : 'Loading views'}>
      <Eye size={14} className="view-counter__icon" />
      <span className="view-counter__count">
        {views != null ? views.toLocaleString() : '—'}
      </span>
      <span className="view-counter__label">views</span>
    </div>
  );
}
