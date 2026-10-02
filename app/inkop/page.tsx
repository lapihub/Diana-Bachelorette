import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = { title: "Inköp" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Inköpslista"
        title={
          <>
            Det vi <em>behöver</em>
          </>
        }
        intro="Allt här ska köpas om inget annat står. Det som redan är köpt är överstruket."
      />
      <Checklist />
      <NextPage current="/inkop" />
    </>
  );
}
