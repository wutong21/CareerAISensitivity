"use client"

import React, { useState } from "react"
import { TreemapChart } from "@/components/TreemapChart"
import { Sidebar } from "@/components/Sidebar"

export default function Home() {
  const [minScore, setMinScore] = useState(0)
  const [maxScore, setMaxScore] = useState(100)
  const [currentLevel, setCurrentLevel] = useState<"category" | "occupation">("category")
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined)

  const handleNodeClick = (category: string) => {
    setSelectedCategory(category)
    setCurrentLevel("occupation")
  }

  const handleBackToCategories = () => {
    setCurrentLevel("category")
    setSelectedCategory(undefined)
  }

  const handleRangeChange = (min: number, max: number) => {
    setMinScore(min)
    setMaxScore(max)
    setCurrentLevel("category")
    setSelectedCategory(undefined)
  }

  return (
    <>
      <Sidebar
        minScore={minScore}
        maxScore={maxScore}
        onRangeChange={handleRangeChange}
      />
      <div id="main-content">
        <TreemapChart
          minScore={minScore}
          maxScore={maxScore}
          onNodeClick={handleNodeClick}
          currentLevel={currentLevel}
          selectedCategory={selectedCategory}
          onBackToCategories={handleBackToCategories}
        />
      </div>
    </>
  )
}
