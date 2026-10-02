import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import Villa from "@/components/Villa";
import { villa } from "@/content/weekend";

export const metadata: Metadata = { title: "Villan" };

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
