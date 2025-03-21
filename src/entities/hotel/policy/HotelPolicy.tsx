"use client";

import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import UpdateTextArea from "@/shared/ui/UpdateTextArea";
import { Button } from "@/components/ui/button";
import { AddPolicyDialog } from "./ui";
import {
  useCreateHotelPolicy,
  useUpdateHotelPolicyPolicy,
  useDeleteHotelPolicyPolicy,
  useHotelPoliciesByHotelId,
} from "./hooks";
import { useHotelPoliciesStore } from "./store";

export const HotelPolicy = () => {
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { createHotelPolicyAsync } = useCreateHotelPolicy();
  const { updateHotelPolicy } = useUpdateHotelPolicyPolicy();
  const { deleteHotelPolicy } = useDeleteHotelPolicyPolicy();
  const { isLoading } = useHotelPoliciesByHotelId(orgId);
  const { hotelPolicies } = useHotelPoliciesStore();
  console.log(hotelPolicies);
  const handleAddPolicy = async (policy_name: string, policy: string) => {
    await createHotelPolicyAsync({
      policy_name: policy_name,
      hotel_policy: policy,
      hotel_id: orgId,
    });
  };

  const handleUpdatePolicy = (id: string, policy: string) => {
    updateHotelPolicy({
      id: id,
      hotel_policy: policy,
    });
  };
  const handleDeletePolicy = (id: string) => {
    deleteHotelPolicy(id);
  };
  if (!orgLoaded || isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Hotel Policy</h1>
      <Button onClick={() => setIsModalOpen(true)}>Add Policy</Button>
      <div className="space-y-4  w-2/5">
        {hotelPolicies.map((policy) => (
          <div key={policy.id} className="space-y-4">
            <p className="text-lg">{policy.policy_name}</p>
            <UpdateTextArea
              id="description"
              value={policy.hotel_policy}
              onChange={(newValue) => {
                handleUpdatePolicy(policy.id, newValue);
              }}
              name="description"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
            <Button
              variant={"destructive"}
              onClick={() => handleDeletePolicy(policy.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
      <AddPolicyDialog
        handleAddPolicy={handleAddPolicy}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};
