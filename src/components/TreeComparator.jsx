'use client';

import { useState } from 'react';
import * as d3 from 'd3';
import TreeDiagram from './TreeDiagram.jsx';

/**
 * A component for comparing two tree structures
 * @param {Object} props - Component props
 * @param {Object} [props.currentData] - Current tree data
 * @param {Object} [props.targetData] - Target tree data
 */
const TreeComparator = ({ currentData, targetData }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlightDifferences, setHighlightDifferences] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(1);
  const [targetZoom, setTargetZoom] = useState(1);

  const handleZoom = (tree, zoom) => {
    if (tree === 'current') {
      setCurrentZoom(zoom);
    } else {
      setTargetZoom(zoom);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className="border-b p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cluster Tree Comparator</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-4 py-2 rounded-lg border"
          >
            {isDarkMode ? '🌞 Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {/* Comparison Toolbar */}
        <div className="flex gap-4 mb-4 p-4 border rounded-lg">
          <button
            onClick={() => setHighlightDifferences(!highlightDifferences)}
            className={`px-4 py-2 rounded-lg border ${
              highlightDifferences ? 'bg-blue-500 text-white' : ''
            }`}
          >
            Highlight Differences
          </button>
        </div>

        {/* Tree Panels */}
        <div className="grid grid-cols-2 gap-4">
          {/* Current State Panel */}
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Current State</h2>
            <div className="relative">
              {currentData ? (
                <TreeDiagram
                  data={currentData}
                  width={800}
                  highlightDifferences={highlightDifferences}
                  zoom={currentZoom}
                  onZoomChange={(zoom) => handleZoom('current', zoom)}
                  isTarget={false}
                  targetData={targetData}
                />
              ) : (
                <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                  <p>Upload current state data</p>
                </div>
              )}
            </div>
          </div>

          {/* Target State Panel */}
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Target State</h2>
            <div className="relative">
              {targetData ? (
                <TreeDiagram
                  data={targetData}
                  width={800}
                  highlightDifferences={highlightDifferences}
                  zoom={targetZoom}
                  onZoomChange={(zoom) => handleZoom('target', zoom)}
                  isTarget={true}
                  targetData={currentData}
                />
              ) : (
                <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                  <p>Upload target state data</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t p-4 text-center text-sm">
        Powered by Next.js & D3.js
      </footer>
    </div>
  );
};

export default TreeComparator; 