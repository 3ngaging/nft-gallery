'use client';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#F2ECC8 1px, transparent 1px), linear-gradient(90deg, #F2ECC8 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Additional subtle dots at intersections */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #F2ECC8 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}
