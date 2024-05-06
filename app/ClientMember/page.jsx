"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientMember() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Member Client Session</h1>
      {JSON.stringify(session)}
    </div>
  );
}
