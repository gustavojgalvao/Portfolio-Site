import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  noIndex?: boolean;
}

const SITE_NAME = 'Gustavo Galvão';
const DEFAULT_OG_IMAGE = 'https://gustavogalvao.dev/og-image.png';
const DEFAULT_URL = 'https://gustavogalvao.dev';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl = DEFAULT_URL,
  noIndex = false,
}) => {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Desenvolvimento Web, Automação com IA & Marketing de Crescimento`;
  const metaDesc = description ?? 'Um plano mensal que cobre seu site em React, SEO/GEO, Google Meu Negócio, tráfego pago e um CRM com IA exclusivo — gerenciado diretamente por Gustavo Galvão.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default SEOHead;
