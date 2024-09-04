import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectRegiao = () => {
  return (
    <Select>
      <SelectTrigger className="sm:w-[42%] w-[60%] border border-blue-500 text-blue-500 outline-none">
        <SelectValue placeholder="Região do cliente" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectRegiao;
