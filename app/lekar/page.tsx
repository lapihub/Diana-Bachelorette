import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import Games from "@/components/Games";

export const metadata: Metadata = { title: "Lekar" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Lekarna"
        title={
          <>
            Hemligheter <em>&amp; lite kaos</em>
          </>
        }
        intro="Alla i gruppen får se lekarna i förväg, så att vi kan förbereda dem tillsammans. Tryck på en lek för att läsa mer."
      />
      <Games />
      <NextPage current="/lekar" />
    </>
  );
}
