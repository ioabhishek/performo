"use client"
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAccess } from "@/context/accessContext";

function Wait() {
  const session = useSession();
  const { accessStatus, checkAccess } = useAccess();

  useEffect(() => {
    if (session.status === "authenticated" && accessStatus === "checking") {
      const userEmail = session.data.user.email;
      checkAccess(userEmail);
    }
  }, [session, accessStatus, checkAccess]);

  useEffect(() => {
    if (accessStatus === "authenticated") {
      window.location.href = "/";
    } else if (accessStatus === "unauthenticated") {
      window.location.href = "/access";
    }
  }, [accessStatus]);

  return (
    <div>
      <div>
        <h1>Hold on checking for access....</h1>
      </div>
    </div>
  );
}

export default Wait;
