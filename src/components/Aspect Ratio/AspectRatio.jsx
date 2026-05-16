export function AspectRatio({ ratio, children, className = '' }) {
  return (
    <div className="w-full max-w-sm">
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={{
          aspectRatio: ratio,
        }}
      >
        {children}
      </div>
    </div>
  );
}
