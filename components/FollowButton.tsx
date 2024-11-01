"use client";

import { followUser } from "@/lib/actions";
import SubmitButton from "./SubmitButton";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { FormEvent } from "react";

function FollowButton({
  profileId,
  isFollowing,
  className,
  buttonClassName,
}: {
  profileId: string;
  isFollowing?: boolean;
  className?: string;
  buttonClassName?: string;
}) {
  // Client-side form submission handler
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", profileId);

    try {
      const response = await followUser(formData);
      console.log(response.message); // Handle or display the message here
    } catch (error) {
      console.error("Failed to follow/unfollow user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input type="hidden" value={profileId} name="id" />
      <SubmitButton
        className={buttonVariants({
          variant: isFollowing ? "secondary" : "default",
          className: cn("!font-bold w-full", buttonClassName),
          size: "sm",
        })}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </SubmitButton>
    </form>
  );
}

export default FollowButton;
