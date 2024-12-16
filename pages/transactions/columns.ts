import type { ColumnDef } from "@tanstack/vue-table";
import { ArrowUpDown, ChevronDown } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

interface Transaction {
  id: string;
  amount: number;
  status: string;
  email: string;
}
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: () => h("div", { class: "text-left" }, "ID"),
    cell: ({ row }) => {
      const id = row.getValue("id");
      return h("div", { class: "text-left font-medium" }, id);
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Email", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("email")),
  },
  {
    accessorKey: "status",
    header: () => h("div", { class: "text-left" }, "Status"),
    cell: ({ row }) => {
      const status = row.getValue("status");
      return h("div", { class: "text-left font-medium" }, status);
    },
  },
  {
    accessorKey: "amount",
    header: () => h("div", { class: "text-left" }, "Amount"),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));
      return h("div", { class: "text-left font-medium" }, "$" + amount);
    },
  },
];
