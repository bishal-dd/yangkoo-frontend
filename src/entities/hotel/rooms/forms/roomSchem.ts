import { z } from "zod";

export const roomSchema = z.object({
  roomType: z.string().min(1, "Room type is required."),
  quantity: z.number().min(1, "Quantity is required."),
  size: z.number().min(1, "Size is required."),
  bedType: z.string().min(1, "Bed type is required."),
  capacity: z.number().min(1, "Capacity is required."),
});

export type RoomFormData = z.infer<typeof roomSchema>;
