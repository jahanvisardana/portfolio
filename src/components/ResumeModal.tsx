import { useState, useRef, useEffect } from 'react';
import { X, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface Props {
  onClose: () => void;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ResumeModal({ onClose }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  async function handleSend() {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        {
          to_email: email,
          resume_url: `${window.location.origin}${import.meta.env.BASE_URL}Jahanvi_2026.pdf`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Send resume">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={16} /></button>

        {status === 'success' ? (
          <div className="modal-state">
            <CheckCircle size={36} style={{ color: 'var(--emerald)' }} />
            <h3>Resume sent!</h3>
            <p>Check your inbox at <strong>{email}</strong></p>
            <button className="btn btn-secondary" style={{ marginTop: 8 }} onClick={onClose}>Done</button>
          </div>
        ) : status === 'error' ? (
          <div className="modal-state">
            <AlertCircle size={36} style={{ color: 'var(--rose)' }} />
            <h3>Something went wrong</h3>
            <p>Try again or download directly.</p>
            <button className="btn btn-secondary" style={{ marginTop: 8 }} onClick={() => setStatus('idle')}>Try again</button>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Get my resume</h3>
            <p className="modal-sub">Enter your email and I'll send it right over.</p>
            <div className="modal-field">
              <input
                ref={inputRef}
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                className="modal-input"
                disabled={status === 'sending'}
              />
              <button
                className="btn btn-primary"
                onClick={handleSend}
                disabled={status === 'sending' || !email}
              >
                {status === 'sending' ? <Loader size={15} className="spin" /> : <Send size={15} />}
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
