import { useState } from "react";

export default function RescueHuskyFriendsSite() {
  const [selectedDog, setSelectedDog] = useState(null);

  const dogs = [
    {
      name: "Basco",
      age: "Nato a giugno 2025",
      status: "In adozione",
      note: "Incrocio Siberian Husky, maschio, taglia grande, microchippato e vaccinato.",
      description:
        "Questo giovanissimo incrocio Siberian Husky dagli occhi dolci si chiama Basco ed è un cucciolone di circa 8/9 mesi. Arrivato insieme alla sorellina Bora, inizialmente è un po' riservato ma con un approccio rispettoso si apre in modo sincero e affettuoso. Ama il gioco comunicativo e quando entra in fiducia diventa molto partecipe e affettuoso. È attento, rispettoso e sensibile alle emozioni umane. Cane giovane, dolce ed equilibrato con grande potenziale di crescita.",
      family:
        "Adatto sia ad appartamento con giusti sfoghi quotidiani sia a casa con giardino sicuro. Cerchiamo una famiglia consapevole che sappia che un cucciolo non è un peluche ma un compagno di avventure.",
      compatibility:
        "Socializzato positivamente con cagnolone femmine. Da valutare con maschi e gatti.",
    },
    {
      name: "Thor",
      age: "5 anni",
      status: "In valutazione",
      note: "Ha bisogno di una famiglia paziente e consapevole.",
      description: "Informazioni complete disponibili contattando il rescue.",
    },
    {
      name: "Maya",
      age: "2 anni",
      status: "In adozione",
      note: "Dolce e affettuosa, perfetta per chi vuole iniziare un percorso serio.",
      description: "Informazioni complete disponibili contattando il rescue.",
    },
  ];

  const emergencyCases = [
    {
      title: "Cure veterinarie",
      text: "Visite, esami clinici, interventi e terapie.",
    },
    {
      title: "Stalli",
      text: "Strutture e pensioni dove i cani recuperano sicurezza.",
    },
    {
      title: "Recupero comportamentale",
      text: "Educazione e percorsi di fiducia.",
    },
  ];

  return (
    <div
      className="min-h-screen text-slate-200"
      style={{
        background:
          "radial-gradient(circle at top, rgba(34,211,238,0.08), transparent 22%), radial-gradient(circle at bottom right, rgba(148,163,184,0.12), transparent 28%), linear-gradient(180deg, #0a0c10 0%, #0d1117 45%, #111827 100%)",
      }}
    >
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/80 text-lg">
              🐺
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">ODV</p>
              <h1 className="font-semibold">Rescue Husky & Friends</h1>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-400 md:flex">
            <a href="#missione" className="hover:text-white">Missione</a>
            <a href="#cani" className="hover:text-white">Cani</a>
            <a href="#emergenze" className="hover:text-white">Emergenze</a>
            <a href="#sostienici" className="hover:text-white">Sostienici</a>
            <a href="#contatti" className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black">Contattaci</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative min-h-[680px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=1600&q=80"
            alt="Husky nella neve"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 32%" }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,12,16,0.94) 0%, rgba(10,12,16,0.72) 34%, rgba(15,23,42,0.45) 58%, rgba(255,255,255,0.06) 100%)",
            }}
          />

          <div className="relative mx-auto flex min-h-[680px] max-w-6xl flex-col justify-center px-6 py-20">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">Husky rescue</p>

            <h2 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
              Una seconda possibilità per ogni cane.
            </h2>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Recuperiamo husky e cani nordici in difficoltà e li accompagniamo verso una nuova vita
              attraverso cure, recupero e adozioni responsabili.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#cani" className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black">
                Cani in adozione
              </a>
              <a href="#sostienici" className="rounded-2xl border border-white/20 px-6 py-3 text-slate-200">
                Sostieni il rescue
              </a>
            </div>
          </div>
        </section>

        {/* CANI */}
        <section
          id="cani"
          className="py-28"
          style={{ background: "linear-gradient(180deg, rgba(17,24,39,0.58) 0%, rgba(15,23,42,0.72) 100%)" }}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Cani</p>
              <h2 className="text-3xl font-bold md:text-4xl">In cerca di casa</h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {dogs.map((dog) => (
                <div key={dog.name} className="overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=1200&q=80"
                      alt={`Placeholder cane per ${dog.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{dog.name}</h3>
                    <p className="text-sm text-slate-400">{dog.age}</p>
                    <p className="mt-4 text-slate-300">{dog.note}</p>

                    <button
                      onClick={() => setSelectedDog(dog)}
                      className="mt-6 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-black"
                    >
                      Leggi scheda
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMERGENZE */}
        <section id="emergenze" className="mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Emergenze</p>
            <h2 className="text-3xl font-bold md:text-4xl">Dove vanno le donazioni</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {emergencyCases.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-4 text-2xl">🚑</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL SCHEDA CANE */}
      {selectedDog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="max-w-3xl rounded-2xl bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">{selectedDog.name}</h2>
            <p className="text-slate-400 mt-2">{selectedDog.age}</p>

            <p className="mt-6 text-slate-300">{selectedDog.description}</p>

            {selectedDog.family && (
              <p className="mt-4 text-slate-300"><strong>Famiglia ideale:</strong> {selectedDog.family}</p>
            )}

            {selectedDog.compatibility && (
              <p className="mt-4 text-slate-300"><strong>Compatibilità:</strong> {selectedDog.compatibility}</p>
            )}

            <button
              onClick={() => setSelectedDog(null)}
              className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

      <footer className="border-t border-white/5 bg-black/10 py-6 text-center text-sm text-slate-500">
        © 2026 Rescue Husky & Friends ODV
      </footer>
    </div>
  );
}
