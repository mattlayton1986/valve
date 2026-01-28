export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Valve</h1>
      <p className="mt-2 text-sm text-muted-foreground">Dashboard scaffold - flags and feature notes will live here.</p>

      <div className="mt-8 rounded-lg border p-4">
        <h2 className="text-base font-medium">Next steps</h2>
        <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
          <li>Baseline layout + navigation</li>
          <li>Auth UI (deferred until auth runtime wiring)</li>
          <li>Flags + releases CRUD</li>
        </ul>
      </div>
    </main>
  );
}