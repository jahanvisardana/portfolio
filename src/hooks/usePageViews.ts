import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const SESSION_KEY = 'pv-counted';

export function usePageViews() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      supabase
        .rpc('get_views')
        .then(({ data }) => { if (data != null) setCount(data as number); });
    } else {
      sessionStorage.setItem(SESSION_KEY, '1');
      supabase
        .rpc('increment_views')
        .then(({ data }) => { if (data != null) setCount(data as number); });
    }
  }, []);

  return count;
}
