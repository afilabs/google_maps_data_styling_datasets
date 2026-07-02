const LEGEND_ITEMS = [
  { label: "Bike rack", kind: "point", color: "#83ABEB", stroke: "#ffffff" },
  { label: "Built cycling path", kind: "line", color: "#1D9E75", weight: 4, opacity: 1.0 },
  { label: "Planned cycling path", kind: "line", color: "#F2A623", weight: 2.5, opacity: 0.7 },
];

function Swatch({ item }) {
  if (item.kind === "point") {
    return (
      <svg width="26" height="14" aria-hidden="true">
        <circle cx="13" cy="7" r="5" fill={item.color} stroke={item.stroke} strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg width="26" height="14" aria-hidden="true">
      <line
        x1="2"
        y1="7"
        x2="24"
        y2="7"
        stroke={item.color}
        strokeWidth={item.weight}
        strokeOpacity={item.opacity}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Legend() {
  return (
    <div style={styles.legend}>
      <div style={styles.title}>Legend</div>
      <ul style={styles.list}>
        {LEGEND_ITEMS.map((item) => (
          <li key={item.label} style={styles.row}>
            <Swatch item={item} />
            <span style={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  legend: {
    position: "absolute",
    bottom: "24px",
    left: "24px",
    zIndex: 10,
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "12px 14px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.12)",
    font: "13px/1.4 system-ui, -apple-system, sans-serif",
    color: "#1f2937",
    userSelect: "none",
  },
  title: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#6b7280",
    marginBottom: "8px",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  label: {
    whiteSpace: "nowrap",
  },
};