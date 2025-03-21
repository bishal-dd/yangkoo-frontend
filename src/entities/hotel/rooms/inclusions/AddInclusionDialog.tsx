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

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleAddInclusion: (inclusion: string) => Promise<void>;
};

export function AddInclusionDialog({
  isModalOpen,
  setIsModalOpen,
  handleAddInclusion,
}: Props) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const inclusion = (e.target as HTMLFormElement).elements.namedItem(
      "inclusion"
    ) as HTMLInputElement;

    if (!inclusion.value) {
      toast.error("Please enter a inclusion");
      return;
    }
    await handleAddInclusion(inclusion.value);
    toast.success("Inclusion added successfully");
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Inclusion</DialogTitle>
          <DialogDescription>Enter the policy</DialogDescription>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  gap-4 p-4">
              <div>
                <label htmlFor="inclusion">Inclusion</label>
                <Input required name="inclusion" id="inclusion" />
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <Button type="submit">Add Inclusion</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
