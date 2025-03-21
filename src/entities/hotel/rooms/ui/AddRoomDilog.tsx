import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useRoomForm, RoomFormData } from "../forms";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleAddRoom: (data: RoomFormData) => Promise<void>;
};

export function AddRoomDialog({
  isModalOpen,
  setIsModalOpen,
  handleAddRoom,
}: Props) {
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const { roomForm, control, handleSubmit, reset } = useRoomForm();

  const handleFormSubmit = async (data: RoomFormData) => {
    await handleAddRoom(data);
    toast.success("Room added successfully!");
    reset();
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Room</DialogTitle>
          <DialogDescription>Enter the rooms</DialogDescription>
        </DialogHeader>
        <div>
          <Form {...roomForm}>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="w-full max-w-3xl space-y-5"
            >
              <div>
                <FormField
                  control={control}
                  name="roomType"
                  render={({ field, fieldState: { error } }) => (
                    <FormItem>
                      <FormLabel>Room Type</FormLabel>
                      <FormControl>
                        <Input placeholder="Room Type" {...field} />
                      </FormControl>
                      <FormDescription>Room Type is Required</FormDescription>
                      <FormMessage>{error?.message}</FormMessage>{" "}
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row space-x-14">
                <div>
                  <FormField
                    control={control}
                    name="size"
                    render={({ field, fieldState: { error } }) => (
                      <FormItem>
                        <FormLabel>Size</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Size"
                            {...field}
                            value={field.value || ""}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value === ""
                                  ? ""
                                  : Number(e.target.value)
                              )
                            }
                          />
                        </FormControl>
                        <FormDescription>Room Size is Required</FormDescription>
                        <FormMessage>{error?.message}</FormMessage>{" "}
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={control}
                    name="quantity"
                    render={({ field, fieldState: { error } }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Quantity"
                            {...field}
                            value={field.value || ""}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value === ""
                                  ? ""
                                  : Number(e.target.value)
                              )
                            }
                          />
                        </FormControl>
                        <FormDescription>Quantity is Required</FormDescription>
                        <FormMessage>{error?.message}</FormMessage>{" "}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-14">
                <div>
                  <FormField
                    control={control}
                    name="bedType"
                    render={({ field, fieldState: { error } }) => (
                      <FormItem>
                        <FormLabel>Bed Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Bed Type" {...field} />
                        </FormControl>
                        <FormDescription>Bed Type is Required</FormDescription>
                        <FormMessage>{error?.message}</FormMessage>{" "}
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={control}
                    name="capacity"
                    render={({ field, fieldState: { error } }) => (
                      <FormItem>
                        <FormLabel>Capacity</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Capacity"
                            {...field}
                            value={field.value || ""}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value === ""
                                  ? ""
                                  : Number(e.target.value)
                              )
                            }
                          />
                        </FormControl>
                        <FormDescription>Capacity is Required</FormDescription>
                        <FormMessage>{error?.message}</FormMessage>{" "}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <Button type="submit">Add</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
