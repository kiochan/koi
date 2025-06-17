import { Minimize, Maximize, X } from 'lucide-react';
import { Button } from '../ui/button';

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
