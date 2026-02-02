import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './tailwind.css'
// import './tailwind_out.css';
import App from './App.tsx'

// import posthog from 'posthog-js'
import { PostHogProvider } from '@posthog/react'
import { ConsentProvider } from './context/ConsentContext.tsx'

// posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
//   api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
//   defaults: '2025-11-30',
//   autocapture: false
// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={{
      defaults: '2025-11-30',
      api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
      // autocapture: false,
      opt_out_capturing_by_default: true,
      cookieless_mode: 'on_reject',
    }}>
      <ConsentProvider>
        <App />
      </ConsentProvider>
    </PostHogProvider>
  </StrictMode>,
)
