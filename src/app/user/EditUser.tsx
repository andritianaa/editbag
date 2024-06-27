"use client";
import { editPassword, editUserName } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLoadingStore } from "@/store/loading";
import { User } from "@prisma/client";
import { useState } from "react";
import { toast } from "sonner";

export type editUserProps = {
  user: User;
};

export const EditUser = (props: User) => {
  const [userName, setUserName] = useState<string>(props.name || "");
  const [currentPass, setCurrentPass] = useState<string | null>("");
  const [newPass, setNewPass] = useState<string>("");
  const { startLoading, stopLoading } = useLoadingStore();
  const handleNameChange = async (e) => {
    e.preventDefault();
    if (userName.length > 5) {
      startLoading();
      await editUserName(userName)
        .then(() => toast("Name updated successfuly"))
        .catch((e) => toast.error(e));
    } else {
      toast.error("Name too short");
    }
    stopLoading();
  };

  const handleEditPassword = async (e) => {
    e.preventDefault();
    if (newPass.length > 8) {
      startLoading();
      if (currentPass == null || currentPass.length == 0) {
        setCurrentPass(null);
      }
      await editPassword(currentPass, newPass)
        .then(() => toast("Password edited successfuly"))
        .catch((e) => toast.error(e));
    } else {
      toast.error("Password too short");
    }
    stopLoading();
  };
  return (
    <div className="space-y-8">
      <Card className="border bg-background">
        <form onSubmit={handleNameChange} className="flex flex-col gap-4 p-4">
          <p className="text-xl">Change my name</p>
          <Input
            label="Name"
            placeholder="Name..."
            className="w-full"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button type="submit" className="w-fit">
            Change name
          </Button>
        </form>
      </Card>

      <Card className="border bg-background">
        <form onSubmit={handleEditPassword} className="flex flex-col gap-4 p-4">
          <div>
            <p className="text-xl">Edit password</p>
            <p className="text-sm text-muted-foreground">
              If you subscribed with google account and did not set password
              yet, leave the current password field as blank
            </p>
          </div>
          <Input
            label="Current password"
            placeholder="Current password..."
            className="w-full"
            type="password"
            value={currentPass ?? ""}
            onChange={(e) => setCurrentPass(e.target.value)}
          />
          <Input
            label="New password"
            placeholder="New password..."
            className="w-full"
            type="password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />

          <Button type="submit" className="w-fit">
            Edit password
          </Button>
        </form>
      </Card>
    </div>
  );
};
