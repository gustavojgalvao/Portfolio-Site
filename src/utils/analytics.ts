export const initGA4 = (trackingId: string) => {
  if (typeof window === 'undefined') return;
  // Prevent multiple injections
  if (document.getElementById('ga-script')) return;

  // 1. Inject the external script
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // 2. Inject the configuration script
  const inlineScript = document.createElement('script');
  inlineScript.id = 'ga-inline';
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingId}', {
      page_path: window.location.pathname,
    });
  `;
  document.head.appendChild(inlineScript);
};

export const pageViewGA4 = (trackingId: string, path: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', trackingId, {
      page_path: path,
    });
  }
};
