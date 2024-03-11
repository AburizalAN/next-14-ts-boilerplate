import dictionaries from "@app/features/general/dictionaries"
import { useAppSelector } from "@app/utils/redux_utils/hooks"

export default function Home() {
  const locale = useAppSelector((state) => state.general.locale)
  dictionaries.setLanguage(locale)

  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">{dictionaries.helloWorld}</h1>
    </main>
  )
}