import { Eye } from 'lucide-react';
import { usePageViews } from '../hooks/usePageViews';

export default function ViewCounter() {
  const views = usePageViews();
  if (views == null) return null;

  return (
    <div className="view-counter" aria-label={`${views.toLocaleString()} total views`}>
      <Eye size={14} className="view-counter__icon" />
      <span className="view-counter__count">{views.toLocaleString()}</span>
      <span className="view-counter__label">views</span>
    </div>
  );
}
