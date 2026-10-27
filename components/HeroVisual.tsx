const nodes: [number, number][] = [[60, 70], [200, 40], [340, 90], [120, 190], [260, 170], [380, 230], [190, 300], [320, 330]];
const edges = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 7]];
export default function HeroVisual() {
  return (
    <svg viewBox="0 0 440 380" role="img" aria-label="Abstract diagram of connected system nodes" className="h-auto w-full max-w-md">
      <rect x="4" y="4" width="432" height="372" rx="16" fill="#F5F8FC" stroke="#E2E8F0" />
      {edges.map(([a, b]) => <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#1769E0" strokeOpacity=".3" strokeWidth="1.5" />)}
      {nodes.map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="16" fill="#fff" stroke="#1769E0" strokeWidth="1.5" /><circle className={i % 3 === 0 ? "node" : ""} cx={x} cy={y} r="6" fill={i === 4 ? "#172B4D" : "#1769E0"} /></g>)}
    </svg>
  );
}
