import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import Schedule from "@/components/Schedule";

export const metadata: Metadata = { title: "Helgen" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Schemat"
        title={
          <>
            Helgen, <em>timme för timme</em>
          </>
        }
        intro="Ett preliminärt schema. Det som är markerat TBC uppdateras när det är klart."
      />
      <Schedule />
      <NextPage current="/helgen" />
    </>
  );
}
