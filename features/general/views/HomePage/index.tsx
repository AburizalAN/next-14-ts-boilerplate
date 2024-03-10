export default function Home({
  lang = null
}: { lang?: string | null }) {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">Hello World</h1>
    </main>
  )
}