import { useState } from 'react'

function ExportResults({ countData, setCountData, onNext, onBack }) {
  const [emailSent, setEmailSent] = useState(false)
  const [email, setEmail] = useState('your@email.com')

  const acceptedItems = countData.acceptedItems || []
  const skippedItems = countData.skippedItems || []
  const totalCost = acceptedItems.reduce((sum, item) => sum + parseFloat(item.cost), 0).toFixed(2)
  const totalRetail = acceptedItems.reduce((sum, item) => sum + parseFloat(item.retail), 0).toFixed(2)

  const handleDownload = () => {
    // Generate CSV content
    const headers = ['SKU', 'Description', 'Brand', 'Size', 'Buy Date', 'Cost', 'Retail', 'Category', 'Reason Code', 'Notes']
    const rows = acceptedItems.map(item => [
      item.sku,
      item.description,
      item.brand,
      item.size,
      item.buyDate,
      item.cost,
      item.retail,
      item.category,
      'C-Cycl',
      'Physical count'
    ])

    const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `adjustments_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleEmail = () => {
    setEmailSent(true)
    // In real app, this would trigger backend email
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
        <button onClick={onBack} className="hover:text-primary">← Back</button>
        <span>|</span>
        <span>Step 5 of 5: Export Results</span>
      </div>

      {/* Review Summary */}
      <div className="card">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Review Summary
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-slate-800">{acceptedItems.length + skippedItems.length}</div>
            <div className="text-sm text-slate-600">Items Reviewed</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-success">{acceptedItems.length}</div>
            <div className="text-sm text-slate-600">Accepted</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-slate-600">${totalCost}</div>
            <div className="text-sm text-slate-600">Total Cost</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-slate-600">${totalRetail}</div>
            <div className="text-sm text-slate-600">Total Retail</div>
          </div>
        </div>
      </div>

      {/* Download Options */}
      <div className="card">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Download Options
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📄</span>
              <div>
                <div className="font-semibold text-slate-800">Write-Off List (DRS-ready)</div>
                <div className="text-sm text-slate-600">adjustments_YYYY-MM-DD.csv</div>
              </div>
            </div>
            <button onClick={handleDownload} className="btn-primary">
              Download
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🖨️</span>
              <div>
                <div className="font-semibold text-slate-800">Barcode Sheet</div>
                <div className="text-sm text-slate-600">barcodes_YYYY-MM-DD.csv</div>
              </div>
            </div>
            <button className="btn-secondary">
              Download
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <div className="font-semibold text-slate-800">Combined Report</div>
                <div className="text-sm text-slate-600">Full report with all columns</div>
              </div>
            </div>
            <button className="btn-secondary">
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Email Option */}
      <div className="card">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Email to Me
        </h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Send to</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
            <input
              type="text"
              value={`Cycle Count Results - ${countData.storeName || 'Store'} - ${new Date().toLocaleDateString()}`}
              readOnly
              className="input-field bg-slate-50"
            />
          </div>
          <button 
            onClick={handleEmail}
            className="btn-primary w-full"
          >
            {emailSent ? '✓ Email Sent!' : '📧 Email Me These Files'}
          </button>
        </div>
      </div>

      {/* Additional Processing */}
      <div className="card bg-blue-50 border border-blue-200">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Want to go further?
        </h2>
        <p className="text-slate-600 mb-4">
          Your basic write-off list is ready. I can also:
        </p>
        <ul className="space-y-2 text-slate-700 mb-4">
          <li>• Deduplicate SKUs (combine qty for same SKU)</li>
          <li>• Add reason codes (C-Cycl, S-Loss, etc.)</li>
          <li>• Group by category for organized DRS entry</li>
          <li>• Generate printable barcode sheet</li>
        </ul>
        <div className="flex gap-3">
          <button onClick={onNext} className="btn-primary">
            Continue Processing
          </button>
          <button className="btn-secondary">
            No Thanks — Use Current List
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="btn-secondary">
          ← Back
        </button>
        <button onClick={onNext} className="btn-primary">
          Continue →
        </button>
      </div>
    </div>
  )
}

export default ExportResults
