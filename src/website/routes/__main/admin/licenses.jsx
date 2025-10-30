import DataTable from "../../../components/admin/data-table.jsx";

import { Button } from "../../../components/ui/button.jsx";

export const columns = [
  {
    accessorKey: "licenseId",
    header: "ID",
  },
  {
    accessorKey: "license",
    header: "License",
  },
  {
    accessorKey: "createdBy",
    header: "Created by",
  },
  {
    accessorKey: "usedBy",
    header: "Used by",
  },
];

const mockData = [
  {
    licenseId: 1,
    license: "fpksdfpok123",
    createdBy: "admin",
    usedBy: "Cozmo",
  },
  {
    licenseId: 1,
    license: "yeahlicense0923098",
    createdBy: "admin",
    usedBy: "arad",
  },
  {
    licenseId: 1,
    license: "sdfsdfsdfsdfsdf",
    createdBy: "admin",
    usedBy: "Samuel",
  },
];

export default function Licenses() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-black dark:text-white flex flex-row space-x-4">
        <h1 className="text-2xl font-semibold">Licenses</h1>
        <Button variant="default" size="sm">
          Create
        </Button>
      </div>

      <DataTable columns={columns} data={mockData} />
    </div>
  );
}
