import dictionaries from "@app/features/general/dictionaries"
import { useAppSelector } from "@app/utils/redux_utils/hooks"
import TestComponent from "./TestComponent"

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">{dictionaries.helloWorld}</h1>
      <TestComponent />
    </main>
  )
}