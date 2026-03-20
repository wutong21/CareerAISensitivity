"use client"

import React from "react"
import { Slider } from "@/components/ui/slider"

interface ScoreFilterProps {
  minScore: number
  maxScore: number
  onRangeChange: (min: number, max: number) => void
}

export function ScoreFilter({ minScore, maxScore, onRangeChange }: ScoreFilterProps) {
  const [values, setValues] = React.useState([minScore, maxScore])

  const handleValueChange = (newValues: number[]) => {
    setValues(newValues)
    onRangeChange(newValues[0], newValues[1])
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">AI 评分筛选</h3>
      
      <div className="mb-6">
        <Slider
          value={values}
          onValueChange={handleValueChange}
          min={0}
          max={100}
          step={5}
          className="mb-4"
        />
        
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-sm text-gray-500">最低分</p>
            <p className="text-2xl font-bold text-blue-600">{values[0]}分</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">最高分</p>
            <p className="text-2xl font-bold text-red-600">{values[1]}分</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700 mb-2">风险等级说明：</p>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "#22c55e" }}></div>
          <span className="text-xs text-gray-600">0-20: 极低风险</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "#84cc16" }}></div>
          <span className="text-xs text-gray-600">20-40: 低风险</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "#eab308" }}></div>
          <span className="text-xs text-gray-600">40-60: 中等风险</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "#f97316" }}></div>
          <span className="text-xs text-gray-600">60-80: 高风险</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "#ef4444" }}></div>
          <span className="text-xs text-gray-600">80-100: 极高风险</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={() => {
            setValues([0, 100])
            onRangeChange(0, 100)
          }}
          className="w-full px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
        >
          重置筛选
        </button>
      </div>
    </div>
  )
}
