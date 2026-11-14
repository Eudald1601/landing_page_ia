import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  alternates: { languages: { ca: "/", es: "/es" } },
};

export default function HomeEs() {
  return <Landing lang="es" />;
}
