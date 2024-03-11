import langs from "@app/features/general/langs"
import { useAppSelector } from "@app/redux_utils/hooks"

export default function Home() {
  const locale = useAppSelector((state) => state.general.locale)
  langs.setLanguage(locale)

  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">{langs.helloWorld}</h1>
    </main>
  )
}