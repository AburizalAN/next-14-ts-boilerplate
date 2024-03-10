import { Locale } from "@app/i18n.config";

import Home from "@app/features/general/views/HomePage";

export default function Index({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <Home />
  );
}
