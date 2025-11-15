import { Button } from "@koi/ui/components/button";
import { Maximize, Minimize, X } from "lucide-react";

export function AppCaptionButtons() {
  return (
    <div className="flex items-center space-x-1">
      <Button variant="ghost" size="icon" className="size-8">
        <Minimize />
      </Button>
      <Button variant="ghost" size="icon" className="size-8">
        <Maximize />
      </Button>
      <Button variant="ghost" size="icon" className="size-8">
        <X />
      </Button>
    </div>
  );
}
