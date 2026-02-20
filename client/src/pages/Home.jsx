export default function Home() {
  return (
    <main className="flex-1 bg-neutral-100 py-10">
      <div className="mx-auto max-w-7xl px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-3xl shadow-md h-64"></div>
            <div className="bg-white rounded-3xl shadow-md h-64"></div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-white rounded-3xl shadow-md min-h-[550px]"></div>
          </div>

        </div>

      </div>
    </main>
  );
}