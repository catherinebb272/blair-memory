function SplashPage({ onNext }) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero with Plato's Closet branding */}
      <div className="text-center py-6">
        {/* Plato's Closet Logo - Crimson on Black */}
        <div className="inline-block bg-black px-6 py-3 rounded-lg mb-6">
          <div className="text-4xl font-bold tracking-wider">
            <span className="text-red-600">PLATO'S</span>
            <span className="text-white">CLOSET</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          AI Powered Cycle Count Program
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Targeted inventory counts that fit your schedule — not your budget
        </p>
      </div>

      {/* How It Works */}
      <div className="card">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl mb-2">📄</div>
            <div className="font-semibold text-slate-800">1. Export</div>
            <div className="text-sm text-slate-600">Pull 3 files from DRS</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl mb-2">📱</div>
            <div className="font-semibold text-slate-800">2. Scan</div>
            <div className="text-sm text-slate-600">Walk the floor with a scanner</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl mb-2">✅</div>
            <div className="font-semibold text-slate-800">3. Review</div>
            <div className="text-sm text-slate-600">Approve items for write-off</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl mb-2">📤</div>
            <div className="font-semibold text-slate-800">4. Export</div>
            <div className="text-sm text-slate-600">Send results to DRS</div>
          </div>
        </div>
      </div>

      {/* Files Needed from DRS */}
      <div className="card">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          What You Need from DRS
        </h2>
        <p className="text-slate-600 mb-4">
          You'll export three reports from DRS to get started:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-l-4 border-primary">
            <span className="text-xl">📋</span>
            <div>
              <div className="font-semibold text-slate-800">1. Item Buy Detail</div>
              <div className="text-sm text-slate-600">Your master inventory list — SKU, description, cost, retail, buy date</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-l-4 border-primary">
            <span className="text-xl">📊</span>
            <div>
              <div className="font-semibold text-slate-800">2. Inventory On Hand Report</div>
              <div className="text-sm text-slate-600">Shows what's currently in the system — we compare this against what you scan</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-l-4 border-primary">
            <span className="text-xl">🏷️</span>
            <div>
              <div className="font-semibold text-slate-800">3. Pre-Count Report (Optional)</div>
              <div className="text-sm text-slate-600">If you've done a partial precount, upload it to cross-check results</div>
            </div>
          </div>
        </div>
      </div>

      {/* Barcode Sheets */}
      <div className="card bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <h2 className="text-xl font-semibold mb-4">
          Need to Scan Items Fast?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-slate-200 mb-4">
              Generate a printable barcode sheet from your target items. Print it out, walk the floor, 
              and scan items directly off the sheet — no digging through racks needed.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>• Print barcode sheets for specific categories</li>
              <li>• Focus on high-value or high-turn items</li>
              <li>• Works with any USB or Bluetooth scanner</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-2">🖨️</div>
            <div className="font-semibold">Barcode Sheet Generator</div>
            <div className="text-sm text-slate-400">Available in export step</div>
          </div>
        </div>
      </div>

      {/* Important Caveats */}
      <div className="card border-2 border-amber-300 bg-amber-50">
        <h2 className="text-xl font-semibold text-amber-800 mb-3">
          ⚠️ Important
        </h2>
        <ul className="space-y-2 text-amber-900">
          <li>• <strong>Not a substitute for full physical inventory</strong> — This tool helps you catch drift and manage shrinkage between counts, but it won't replace a proper RGIS or Datascan full count.</li>
          <li>• <strong>Use results cautiously</strong> — Always verify high-value items before writing off. When in doubt, skip it and investigate manually.</li>
          <li>• <strong>Best for targeted counts</strong> — Ideal for monthly category checks, pre-clearance verification, or tracking specific bins.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button onClick={onNext} className="btn-primary text-lg px-10 py-4">
          Let's Get Started →
        </button>
      </div>
    </div>
  )
}

export default SplashPage