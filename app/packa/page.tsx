import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import DressAndPacking from "@/components/DressAndPacking";

export const metadata: Metadata = { title: "Packlista" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Dresscode & packlista"
        title={
          <>
            Vad du <em>tar med dig</em>
          </>
        }
      />
      <DressAndPacking />
      <NextPage current="/packa" />
    </>
  );
}
