import dictionaries from "@app/features/general/dictionaries"
import TestComponent from "./TestComponent"
import { Button } from "@app/components/ui/button"

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">{dictionaries.helloWorld}</h1>
      <div><Button>Test Button</Button></div>
      <TestComponent />
    </main>
  )
}