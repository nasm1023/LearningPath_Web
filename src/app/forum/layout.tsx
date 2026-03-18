"use client";

import { AppLayout } from "@/components/layout/forum/AppLayout";

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
