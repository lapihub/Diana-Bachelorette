import { quietStatuses, statusLabel, statusStyle, type Status } from "@/lib/status";

type Props = {
  status: Status;
  /** Show the label even for settled statuses (e.g. BOKAT on the villa). */
  force?: boolean;
  className?: string;
};

export default function StatusPill({ status, force = false, className = "" }: Props) {
  if (!force && quietStatuses.includes(status)) return null;

  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-[3px] font-sans text-[0.6rem] font-medium uppercase leading-none tracking-[0.2em] ${statusStyle[status]} ${className}`}
    >
      {statusLabel[status]}
    </span>
  );
}
