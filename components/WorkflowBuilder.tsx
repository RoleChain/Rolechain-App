"use client";

import React from "react";

const WorkflowBuilder = () => {
  return (
    <section className="relative mx-auto w-full max-w-screen-xl py-16 bg-primary">
      {/* Agent Workflow Builder Section */}
      <div className="px-4">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
              workflow
            </span>{" "}
            <span className="text-white">builder</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
            Design complex multi-agent workflows with drag-and-drop simplicity. Connect agents, set conditions, and automate your entire Web3 strategy.
          </p>
        </div>

        {/* Interactive Workflow Canvas */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Main Workflow Canvas */}
          <div className="relative bg-primary/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 min-h-[700px] overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 via-[#F700F7]/5 to-[#0078F6]/5"></div>
              <div className="absolute inset-0 opacity-30">
                <svg width="100%" height="100%" className="animate-pulse">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>

            {/* Workflow Title Bar */}
            <div className="relative z-20 flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-white font-bold text-xl">DeFi Yield Optimization Workflow</h3>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all duration-300">
                  Deploy
                </button>
                <button className="p-2 bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] hover:opacity-90 rounded-full transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Workflow Nodes - SIMPLIFIED CLEAN LAYOUT */}
            <div className="relative z-10">
              
              {/* Market Monitor - Top Left */}
              <div className="absolute top-40 left-20">
                <div className="group animate-float-slow">
                  <div className="bg-gradient-to-r from-[#FF6600]/20 to-[#FF6600]/10 border border-[#FF6600]/40 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#FF6600]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#FF6600] to-[#FF8800] rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM15 17V7a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h9z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[#FF6600] font-bold text-lg">Market Monitor</div>
                        <div className="text-orange-200 text-sm">Track yield rates</div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">Compound: 4.2%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">Aave: 3.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central AI Orchestrator - Center */}
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
                <div className="group animate-float-medium">
                  <div className="bg-gradient-to-r from-[#F700F7]/30 to-[#F700F7]/15 border-2 border-[#F700F7]/50 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-[#F700F7]/40 relative overflow-hidden">
                    <div className="text-center relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#F700F7] to-[#FF00FF] rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl animate-spin-slow relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F700F7] to-[#FF00FF] rounded-full animate-ping opacity-30"></div>
                        <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-xl">AI Decision Engine</div>
                      <div className="text-gray-300 text-base">Analyzing optimal moves...</div>
                      <div className="mt-4 bg-white/10 rounded-full h-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#F700F7] to-[#FF00FF] h-full animate-progress rounded-full"></div>
                      </div>
                      <div className="mt-3 text-sm text-gray-400">Processing 47 strategies/sec</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yield Optimizer - Top Right */}
              <div className="absolute top-40 right-20">
                <div className="group animate-float-slow">
                  <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 border border-emerald-500/40 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-emerald-400 font-bold text-lg">Yield Optimizer</div>
                        <div className="text-emerald-200 text-sm">Maximize returns</div>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="text-emerald-300 text-2xl font-bold">+12.4%</div>
                      <div className="text-sm text-gray-400">APY boost active</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Hub - Bottom Left */}
              <div className="absolute top-280 left-40">
                <div className="group animate-float-medium">
                  <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/10 border border-purple-500/40 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-purple-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-purple-400 font-bold text-lg">Analytics Hub</div>
                        <div className="text-purple-200 text-sm">Track performance</div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">ROI:</span>
                        <span className="text-green-400 font-bold">+284%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white">Volume:</span>
                        <span className="text-blue-400 font-bold">$12.4K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liquidity Manager - Bottom Center */}
              <div className="absolute top-280 left-1/2 transform -translate-x-1/2">
                <div className="group animate-float-fast">
                  <div className="bg-gradient-to-r from-amber-500/20 to-amber-500/10 border border-amber-500/40 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-amber-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-amber-400 font-bold text-lg">Liquidity Manager</div>
                        <div className="text-amber-200 text-sm">Pool optimization</div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">TVL:</span>
                        <span className="text-green-400 font-bold">$847K</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white">APR:</span>
                        <span className="text-blue-400 font-bold">18.7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Management - Bottom Right */}
              <div className="absolute top-280 right-40">
                <div className="group animate-float-fast">
                  <div className="bg-gradient-to-r from-red-500/20 to-red-500/10 border border-red-500/40 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-red-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-400 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-red-400 font-bold text-lg">Risk Guard</div>
                        <div className="text-red-200 text-sm">Monitor safety</div>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="text-green-400 text-xl font-bold">SAFE</div>
                      <div className="text-sm text-gray-400">Risk: Low</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                <defs>
                  <linearGradient id="clean-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6600" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#F700F7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0078F6" stopOpacity="0.6" />
                  </linearGradient>
                  <marker id="clean-arrow" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto">
                    <polygon points="0 0, 10 4, 0 8" fill="url(#clean-flow)" />
                  </marker>
                </defs>
                
                {/* Market Monitor to AI Engine */}
                <path d="M 300 120 Q 400 100 480 140" stroke="url(#clean-flow)" strokeWidth="3" fill="none" markerEnd="url(#clean-arrow)" strokeDasharray="10,5" style={{ animation: 'dash 2s linear infinite' }} />
                
                {/* Yield Optimizer to AI Engine */}
                <path d="M 700 120 Q 600 100 560 140" stroke="url(#clean-flow)" strokeWidth="3" fill="none" markerEnd="url(#clean-arrow)" strokeDasharray="10,5" style={{ animation: 'dash 2s linear infinite', animationDelay: '0.5s' }} />
                
                {/* AI Engine to Analytics */}
                <path d="M 480 220 Q 420 280 320 340" stroke="url(#clean-flow)" strokeWidth="3" fill="none" markerEnd="url(#clean-arrow)" strokeDasharray="10,5" style={{ animation: 'dash 2s linear infinite', animationDelay: '1s' }} />
                
                {/* AI Engine to Liquidity Manager */}
                <path d="M 520 220 Q 520 250 520 340" stroke="url(#clean-flow)" strokeWidth="3" fill="none" markerEnd="url(#clean-arrow)" strokeDasharray="10,5" style={{ animation: 'dash 2s linear infinite', animationDelay: '1.5s' }} />
                
                {/* AI Engine to Risk Guard */}
                <path d="M 560 220 Q 620 280 700 340" stroke="url(#clean-flow)" strokeWidth="3" fill="none" markerEnd="url(#clean-arrow)" strokeDasharray="10,5" style={{ animation: 'dash 2s linear infinite', animationDelay: '2s' }} />
              </svg>
            </div>

            {/* Real-time Status Panel */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10 min-w-[280px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-bold text-lg">Live Workflow</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Active Agents</span>
                  <span className="text-green-400 font-bold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Executions Today</span>
                  <span className="text-blue-400 font-bold">47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Total Value</span>
                  <span className="text-purple-400 font-bold">$12.4K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Profit Today</span>
                  <span className="text-green-400 font-bold">+$284</span>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-gray-300 text-xs mb-2">Current Action</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F700F7] rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">Analyzing yield rates...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Workflow Templates */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-[#FF6600]/10 via-[#FF6600]/5 to-transparent border border-[#FF6600]/20 rounded-3xl p-8 hover:scale-105 hover:border-[#FF6600]/40 transition-all duration-500 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6600] to-[#FF8800] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#FF6600]/30 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">DeFi Yield Hunter</h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">Automatically scan and move funds to the highest yielding protocols across all chains</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#FF6600]/20 text-[#FF6600] text-sm rounded-full border border-[#FF6600]/30">Compound</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Aave</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">Yearn</span>
                </div>
                <div className="text-gray-400 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>234 users deployed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Avg. 12.4% APY boost</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-[#F700F7]/10 via-[#F700F7]/5 to-transparent border border-[#F700F7]/20 rounded-3xl p-8 hover:scale-105 hover:border-[#F700F7]/40 transition-all duration-500 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F700F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#F700F7] to-[#FF00FF] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#F700F7]/30 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Cross-Chain Arbitrage</h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">Detect price differences across chains and execute profitable arbitrage trades automatically</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">Ethereum</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">Polygon</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Arbitrum</span>
                </div>
                <div className="text-gray-400 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>89 users deployed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>$2.3M volume today</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-[#0078F6]/10 via-[#0078F6]/5 to-transparent border border-[#0078F6]/20 rounded-3xl p-8 hover:scale-105 hover:border-[#0078F6]/40 transition-all duration-500 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0078F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0078F6] to-[#00A6FF] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#0078F6]/30 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Risk Guardian</h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">Monitor portfolio health and execute emergency protocols to protect your assets</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30">Stop-Loss</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">Alerts</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Auto-Exit</span>
                </div>
                <div className="text-gray-400 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>567 users protected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>$8.7M losses prevented</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-8 px-4 mt-16">
        {/* Learn more section */}
        <div className="mt-12 pt-8">
          <button className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 mx-auto group">
            <span>Learn how Workflow Builder works</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 78%;
          }
        }
        
        .animate-progress {
          animation: progress 3s ease-in-out infinite alternate;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        
        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WorkflowBuilder; 