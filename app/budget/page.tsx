import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import Budget from "@/components/Budget";

export const metadata: Metadata = { title: "Budget" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Per person"
        title={
          <>
            Budget, <em>i detalj</em>
          </>
        }
        intro="En uppskattning. Priserna uppdateras här när allt är bokat."
      />
      <Budget />
      <NextPage current="/budget" />
    </>
  );
}
