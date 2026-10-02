import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import Photos from "@/components/Photos";

export const metadata: Metadata = { title: "Bilder & minnen" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Till scrapbooken & lekarna"
        title={
          <>
            Bilder <em>&amp; minnen</em>
          </>
        }
        intro="Skicka allt ni har med Diana, och skriv ett minne till leken Gissa minnet."
      />
      <Photos />
      <NextPage current="/bilder" />
    </>
  );
}
