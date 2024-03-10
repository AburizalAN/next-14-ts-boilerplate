import { Locale } from "@app/i18n.config";
import Image from "next/image";

export default function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">Hello World</h1>
    </main>
  );
}
