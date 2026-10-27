import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import Villa from "@/components/Villa";
import { villa } from "@/content/weekend";

export const metadata: Metadata = {
  title: "Vårt hem",
  description: "Vårt hem för natten: en nyrenoverad, historisk lägenhet i en villa från 1878 på Karlbergs strand i Huvudsta, Solna. Bilder, adress och information om boendet.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Övernattningen"
        title={
          <>
            Vårt hem <em>för natten</em>
          </>
        }
        intro={villa.description}
      />
      <Villa />
      <NextPage current="/villan" />
    </>
  );
}
