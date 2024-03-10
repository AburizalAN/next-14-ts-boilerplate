import generalLangs from "@app/features/general/langs"

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">{generalLangs["id"].helloWorld}</h1>
    </main>
  )
}