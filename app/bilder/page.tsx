import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import Photos from "@/components/Photos";

export const metadata: Metadata = { title: "Skicka bilder" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Till scrapbooken, museet & lekarna"
        title={
          <>
            Skicka <em>bilder</em>
          </>
        }
        intro="Har du bilder med Diana eller på Diana? Ladda upp så många du vill."
      />
      <Photos />
      <NextPage current="/bilder" />
    </>
  );
}
