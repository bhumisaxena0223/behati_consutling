"use client"

export function BackgroundGraphics() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/15 rounded-lg rotate-45 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-primary/8 rounded-full blur-2xl animate-pulse delay-2000" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(71,19,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(71,19,150,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-secondary rounded-full animate-bounce delay-500" />
      <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-bounce delay-1500" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-secondary/70 rounded-full animate-bounce delay-2500" />

      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl" />
    </div>
  )
}
