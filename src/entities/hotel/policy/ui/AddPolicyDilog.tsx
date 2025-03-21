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
import { Textarea } from "@/components/ui/textarea";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleAddPolicy: (policy_name: string, policy: string) => Promise<void>;
};

export function AddPolicyDialog({
  isModalOpen,
  setIsModalOpen,
  handleAddPolicy,
}: Props) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const policyName = (e.target as HTMLFormElement).elements.namedItem(
      "policyName"
    ) as HTMLInputElement;
    const policy = (e.target as HTMLFormElement).elements.namedItem(
      "policy"
    ) as HTMLInputElement;
    if (!policyName.value || !policy.value) {
      toast.error("Please enter a policy name and policy");
      return;
    }
    await handleAddPolicy(policyName.value, policy.value);
    toast.success("Policy added successfully");
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Policy</DialogTitle>
          <DialogDescription>Enter the policy</DialogDescription>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  gap-4 p-4">
              <div>
                <label htmlFor="policyName">Policy Name</label>
                <Input required name="policyName" id="policyName" />
              </div>
              <div>
                <label htmlFor="policy">Policy</label>
                <Textarea name="policy" id="policy" rows={4} required />
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <Button type="submit">Add Policy</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
