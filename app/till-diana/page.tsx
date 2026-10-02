import type { Metadata } from "next";
import NextPage from "@/components/NextPage";
import PageHeader from "@/components/PageHeader";
import ForDiana from "@/components/ForDiana";

export const metadata: Metadata = { title: "Till Diana" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Överraskningarna"
        title={
          <>
            Till Diana, <em>med kärlek</em>
          </>
        }
      />
      <ForDiana />
      <NextPage current="/till-diana" />
    </>
  );
}
