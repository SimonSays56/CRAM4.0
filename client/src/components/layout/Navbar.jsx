export default function Navbar() {
  return (
    <header className="w-full bg-[#c7ad7f] border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-14 items-center justify-between">
          
          {/* Left Section */}
          <div className="text-lg font-medium">
            LOGO PLACEMENT
          </div>

          {/* Right Section */}
          <div className="text-sm text-neutral-600">
            SEARCH
          </div>

        </div>
      </div>
    </header>
  );
}
