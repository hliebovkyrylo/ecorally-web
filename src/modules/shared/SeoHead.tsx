import Head from "next/head";
import { useTranslations } from "next-intl";

type SeoHeadProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export const SeoHead = ({
  title,
  description,
  image = "https://ecorally.vercel.app/og.png",
  url = "https://ecorally.vercel.app/",
}: SeoHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
