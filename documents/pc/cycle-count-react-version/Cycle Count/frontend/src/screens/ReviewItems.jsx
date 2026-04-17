import { useState, useEffect, useCallback } from 'react'

// Convert Excel serial date to formatted date string
function formatBuyDate(dateValue) {
  if (!dateValue) return ''
  
  if (typeof dateValue === 'string') {
    const num = parseInt(dateValue, 10)
    if (!isNaN(num) && num > 30000) {
      const excelEpoch = new Date(1899, 11, 30)
      const date = new Date(excelEpoch.getTime() + num * 24 * 60 * 60 * 1000)
      return date.toISOString().split('T')[0]
    }
    return dateValue
  }
  
  if (typeof dateValue === 'number' && dateValue > 30000) {
    const excelEpoch = new Date(1899, 11, 30)
    const date = new Date(excelEpoch.getTime() + dateValue * 24 * 60 * 60 * 1000)
    return date.toISOString().split('T')[0]
  }
  
  return String(dateValue)
}

function ReviewItems({ countData, setCountData, onNext, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [acceptedItems, setAcceptedItems] = useState(countData.acceptedItems || [])
  const [skippedItems, setSkippedItems] = useState(countData.skippedItems || [])
  const [showMode, setShowMode] = useState('missing') // missing, scanned, notInFile

  const items = countData.missingItems || []
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleAccept()
      } else if (e.key === 'ArrowLeft') {
        handleSkip()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (currentIndex < items.length - 1) {
          setCurrentIndex(currentIndex + 1)
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, items.length])

  const handleAccept = () => {
    const item = items[currentIndex]
    setAcceptedItems(prev => [...prev, { ...item, status: 'accepted' }])
    setCountData(prev => ({ 
      ...prev, 
      acceptedItems: [...prev.acceptedItems, { ...item, status: 'accepted' }]
    }))
    moveToNext()
  }

  const handleSkip = () => {
    const item = items[currentIndex]
    setSkippedItems(prev => [...prev, { ...item, status: 'skipped' }])
    setCountData(prev => ({ 
      ...prev, 
      skippedItems: [...prev.skippedItems, { ...item, status: 'skipped' }]
    }))
    moveToNext()
  }

  const moveToNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleAcceptAll = () => {
    const remaining = items.slice(currentIndex)
    const allAccepted = [...acceptedItems, ...remaining.map(item => ({ ...item, status: 'accepted' }))]
    setAcceptedItems(allAccepted)
    setCountData(prev => ({ ...prev, acceptedItems: allAccepted }))
    setCurrentIndex(items.length)
  }

  const handleSkipAll = () => {
    const remaining = items.slice(currentIndex)
    const allSkipped = [...skippedItems, ...remaining.map(item => ({ ...item, status: 'skipped' }))]
    setSkippedItems(allSkipped)
    setCountData(prev => ({ ...prev, skippedItems: allSkipped }))
    setCurrentIndex(items.length)
  }

  const currentItem = items[currentIndex]
  const allReviewed = currentIndex >= items.length - 1 && acceptedItems.length + skippedItems.length >= items.length - 1
  const progress = currentIndex + 1

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
        <button onClick={onBack} className="hover:text-primary">← Back</button>
        <span>|</span>
        <span>Step 4 of 5: Review Items ({progress} of {items.length})</span>
      </div>

      {/* Summary */}
      <div className="card">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Summary
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-slate-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-slate-800">{items.length}</div>
            <div className="text-xs text-slate-600">Total in File</div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-primary">{acceptedItems.length + skippedItems.length}</div>
            <div className="text-xs text-slate-600">Reviewed</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-success">{acceptedItems.length}</div>
            <div className="text-xs text-slate-600">Accepted</div>
          </div>
          <div className="bg-slate-100 p-3 rounded-lg">
            <div className="text-2xl font-bold text-slate-600">{skippedItems.length}</div>
            <div className="text-xs text-slate-600">Skipped</div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setShowMode('missing')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              showMode === 'missing' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            Missing ({items.length})
          </button>
          <button
            onClick={() => setShowMode('scanned')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              showMode === 'scanned' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            Scanned
          </button>
        </div>
      </div>

      {/* Current Item Card */}
      {currentItem && (
        <div className="card border-2 border-primary animate-fade-in">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-sm text-slate-500">Item #{currentIndex + 1}</span>
              <h3 className="text-xl font-bold text-slate-800">
                {currentItem.brand} · {currentItem.category}
              </h3>
            </div>
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
              MISSING
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-sm text-slate-500">SKU</div>
              <div className="font-mono text-lg">{currentItem.sku}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Description</div>
              <div className="text-lg">{currentItem.description}/{currentItem.brand}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Size</div>
              <div className="text-lg">{currentItem.size}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Buy Date</div>
              <div className="text-lg">{formatBuyDate(currentItem.buyDate)}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Cost</div>
              <div className="text-lg font-semibold">${currentItem.cost}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Retail</div>
              <div className="text-lg font-semibold">${currentItem.retail}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button 
              onClick={handleAccept}
              className="flex-1 btn-success text-lg py-4 flex items-center justify-center gap-2"
            >
              ✓ Accept Write-Off
            </button>
            <button 
              onClick={handleSkip}
              className="flex-1 btn-ghost border border-slate-300 text-lg py-4"
            >
              ✗ Skip
            </button>
          </div>

          <div className="text-center mt-3">
            <span className="text-sm text-slate-500">
              Keyboard: → Accept | ← Skip | ↓ Next
            </span>
          </div>
        </div>
      )}

      {/* Batch Actions */}
      <div className="card bg-slate-50">
        <h3 className="font-semibold text-slate-700 mb-3">Batch Actions</h3>
        <div className="flex gap-3">
          <button onClick={handleAcceptAll} className="btn-success">
            Accept All Remaining ({items.length - currentIndex})
          </button>
          <button onClick={handleSkipAll} className="btn-secondary">
            Skip All Remaining
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-slate-200 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-primary h-full transition-all duration-300"
          style={{ width: `${(progress / items.length) * 100}%` }}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="btn-secondary">
          ← Back
        </button>
        <button 
          onClick={onNext} 
          className="btn-primary"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}

export default ReviewItems
