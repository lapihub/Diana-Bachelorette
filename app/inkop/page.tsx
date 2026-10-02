import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import Shopping from "@/components/Shopping";

export const metadata: Metadata = { title: "Inköp" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Ingår i budgeten"
        title={
          <>
            Det vi <em>köper in</em>
          </>
        }
      />
      <Shopping />
      <NextPage current="/inkop" />
    </>
  );
}
