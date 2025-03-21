"use client";
import { CreateOrganization, useAuth } from "@clerk/nextjs";
import { useEffect, useCallback } from "react";

export default function CreateHotelPage() {
  const { userId } = useAuth();

  const handleCreateOrganization = useCallback(async () => {
    if (!userId) return; // Prevent unnecessary API call

    try {
      const response = await fetch("/api/clerk/update-public-metadata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entity: "hotel", userId }),
      });

      if (!response.ok) {
        throw new Error(
          `Update failed: ${response.status} ${response.statusText}`
        );
      }

      console.log("Metadata updated successfully");
    } catch (error) {
      console.error("Error updating metadata:", error);
    }
  }, [userId]);

  useEffect(() => {
    handleCreateOrganization();
  }, [handleCreateOrganization]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <CreateOrganization
        skipInvitationScreen
        afterCreateOrganizationUrl="/hotel"
      />
    </div>
  );
}
