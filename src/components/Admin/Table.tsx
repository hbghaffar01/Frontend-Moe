import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { TableType } from "@/utils/types";
import { Button } from "@/components/ui/button";
import SimpleDrawer from "./SimpleDrawer ";
import { statuses } from "@/constants";
import { useState, useRef, useEffect } from "react";

const DataTable: React.FC<{ tableData: TableType[] }> = ({ tableData }) => {
  const [openDrawerIndex, setOpenDrawerIndex] = useState<number | null>(null);
  const [updatedTableData, setUpdatedTableData] = useState<TableType[]>(tableData);
  const drawerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleDrawer = (index: number) => {
    setOpenDrawerIndex((prev) => (prev === index ? null : index));
  };

  const updateStatus = (index: number, newStatus: string) => {
    const updatedData = [...updatedTableData];
    updatedData[index].status = newStatus;
    setUpdatedTableData(updatedData);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node)
        )
      ) {
        setOpenDrawerIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="overflow-x-auto rounded">
      <Table className="w-full bg-white">
        <TableHeader className="bg-primary">
          <TableRow className="h-10">
            <TableCell className="text-left font-medium">Date</TableCell>
            <TableCell className="text-left font-medium">Employee</TableCell>
            <TableCell className="text-left font-medium">Role</TableCell>
            <TableCell className="text-left font-medium">Status</TableCell>
            <TableCell className="text-left font-medium">Check-In</TableCell>
            <TableCell className="text-left font-medium">Check-Out</TableCell>
            <TableCell className="text-left font-medium">Overtime</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {updatedTableData.map((row, index) => (
            <TableRow key={index} className="h-10 hover:shadow relative">
              <TableCell className="whitespace-nowrap">{row.date}</TableCell>
              <TableCell className="whitespace-nowrap">
                {row.employee}
              </TableCell>
              <TableCell className="whitespace-nowrap">{row.role}</TableCell>
              <TableCell className="whitespace-nowrap">
                <div className="w-full h-full relative">
                  <Button
                    onClick={() => toggleDrawer(index)}
                    className={`${
                      row.status === "present"
                        ? "w-28 text-green-500 bg-white border border-grey-200 rounded hover:bg-white"
                        : row.status === "Absent"
                        ? "w-28 text-red-500 bg-white border border-grey-200 rounded hover:bg-white"
                        : "w-28 text-secondary-color bg-white border border-grey-200 rounded hover:bg-white"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      {row.status}
                      <img src={row.icon} alt={row.icon} className="size-2" />
                    </span>
                  </Button>
                  {openDrawerIndex === index && (
                    <div ref={(el) => (drawerRefs.current[index] = el)}>
                      <SimpleDrawer
                        menuItem={statuses}
                        id={`drawer-${index}`}
                        position={{ top: "38", right: "75" }}
                        width="w-30"
                        route={false}
                        onStatusChange={(newStatus: string) =>
                          updateStatus(index, newStatus)
                        }
                      />
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap">{row.checkIn}</TableCell>
              <TableCell className="whitespace-nowrap">
                {row.checkOut}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {row.overtime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
