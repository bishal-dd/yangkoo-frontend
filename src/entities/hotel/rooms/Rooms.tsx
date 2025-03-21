"use client";
import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import { AddRoomDialog } from "./ui";
import { Button } from "@/components/ui/button";
import { RoomFormData } from "./forms";
import {
  useCreateHotelRoom,
  useDeleteHotelRoom,
  useHotelRoomsByHotelId,
} from "./hooks";
import { PriceTypeEnum } from "./types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { useHotelRoomsStore } from "./store";
import { toast } from "sonner";
import Link from "next/link";

export const Rooms = () => {
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { createHotelRoomAsync } = useCreateHotelRoom();
  const { deleteHotelRoom } = useDeleteHotelRoom();
  const { isLoading } = useHotelRoomsByHotelId(orgId);
  const { hotelRooms } = useHotelRoomsStore();
  const handleAddRoom = async (data: RoomFormData) => {
    await createHotelRoomAsync({
      hotel_id: orgId,
      room_type: data.roomType,
      quantity: data.quantity,
      size: data.size,
      bed_type: data.bedType,
      capacity: data.capacity,
      price_type: PriceTypeEnum.Fixed,
    });
  };

  const handleDeleteRoom = (id: string) => {
    deleteHotelRoom(id);
    toast.success("Room deleted successfully!");
  };
  if (!orgLoaded || isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 bg-gray-100 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Hotel Rooms</h1>
      <Button onClick={() => setIsModalOpen(true)}>Add Rooms</Button>
      <div className="w-full md:w-[70%] mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Inclusions</TableHead>
              <TableHead>Pricing</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hotelRooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.room_type}</TableCell>
                <TableCell>{room.bed_type}</TableCell>
                <TableCell>{room.capacity}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => console.log(room)}
                    asChild
                  >
                    <Link href={"/hotel/rooms/" + room.id + "/inclusions"}>
                      <Pencil className="h-4 w-4" />
                      Edit Inclusions
                    </Link>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => console.log(room)}
                    asChild
                  >
                    <Link href={"/hotel/rooms/" + room.id + "/pricing"}>
                      <Pencil className="h-4 w-4" />
                      Edit Pricing
                    </Link>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => console.log(room)}
                    asChild
                  >
                    <Link href={"/hotel/rooms/" + room.id}>
                      <Pencil className="h-4 w-4" />
                      Edit Details
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteRoom(room.id!)}
                  >
                    <Trash2 className="h-4 w-4" color="red" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AddRoomDialog
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddRoom={handleAddRoom}
      />
    </div>
  );
};
