"use client";

import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { AddInclusionDialog } from "./AddInclusionDialog";
import {
  useCreateHotelRoomInclusion,
  useDeleteHotelRoomInclusion,
  useHotelRoomInclusionsByHotelRoomId,
} from "../hooks";
import { useHotelRoomInclusionsStore } from "../store";
import { Trash2, CircleHelp } from "lucide-react";

export const Inclusions = () => {
  const params = useParams();
  const roomId = String(params?.roomId);
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { createHotelRoomInclusionAsync } = useCreateHotelRoomInclusion();
  const { deleteHotelRoomInclusion } = useDeleteHotelRoomInclusion();
  const { isLoading } = useHotelRoomInclusionsByHotelRoomId(roomId);
  const {
    deleteHotelRoomInclusion: deleteHotelRoomInclusionState,
    hotelRoomInclusions,
  } = useHotelRoomInclusionsStore();

  const handleAddInclusion = async (inclusion: string) => {
    createHotelRoomInclusionAsync({
      inclusion,
      hotel_room_id: roomId,
    });
  };
  const handleDeleteInclusion = (id: string) => {
    deleteHotelRoomInclusionState(id);
    deleteHotelRoomInclusion(id);
  };
  if (!orgLoaded || isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Room Inclusions</h1>
      <Button onClick={() => setIsModalOpen(true)}>Add Inclusion</Button>
      <div className="space-y-2 mt-4">
        {hotelRoomInclusions.map((inclusion) => (
          <div className=" flex flex-row space-x-4" key={inclusion.id}>
            <CircleHelp />
            <p className="text-lg">{inclusion.inclusion}</p>
            <Button
              variant={"ghost"}
              onClick={() => handleDeleteInclusion(inclusion.id)}
            >
              <Trash2 color="red" />
            </Button>
          </div>
        ))}
      </div>
      <AddInclusionDialog
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        handleAddInclusion={handleAddInclusion}
      />
    </div>
  );
};
