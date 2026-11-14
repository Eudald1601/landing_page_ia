import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
  title: copy.ca.meta.title,
  description: copy.ca.meta.description,
  alternates: { languages: { ca: "/", es: "/es" } },
};

export default function Home() {
  return <Landing lang="ca" />;
}
