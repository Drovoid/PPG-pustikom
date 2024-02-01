import React from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";

const DeleteButtonAction = () => {
  return (
    <Button variant="outline" className="bg-red-200">
      <Icons.trash className="text-red-900" />
    </Button>
  );
};

export default DeleteButtonAction;
