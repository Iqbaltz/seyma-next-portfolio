import { getClient } from "@/sanity/lib/client";
import { LiveQueryProvider } from "next-sanity/preview";
import { useMemo } from "react";

export default function PreviewProvider({
  children,
  previewToken,
}: {
  children: React.ReactNode;
  previewToken: string;
}) {
  const client = useMemo(
    () => getClient({ token: previewToken }),
    [previewToken]
  );
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
