import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { roomSchema, RoomFormData } from "./roomSchem";

export function useRoomForm() {
  const roomForm = useForm<RoomFormData>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      roomType: "",
      quantity: 0,
      size: 0,
      bedType: "",
      capacity: 0,
    },
  });
  const { control, handleSubmit, reset, setValue } = roomForm;

  return {
    roomForm,
    handleSubmit,
    reset,
    setValue,
    control,
  };
}
