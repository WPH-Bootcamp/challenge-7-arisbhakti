import type { MetricItem } from "../../constants/siteData";

type MetricCardProps = {
  item: MetricItem;
};

export default function MetricCard({ item }: MetricCardProps) {
  return (
    <div className="metric-card">
      <span className="metric-value">{item.value}</span>
      <span className="metric-label mt-2">{item.label}</span>
    </div>
  );
}
