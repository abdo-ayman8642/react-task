import React from "react";
import { Button, Tooltip } from "@mui/material";
import ExcelJS from "exceljs";
import GetAppIcon from "@mui/icons-material/GetApp";

const ExportToExcelButton = ({ filters }) => {
  function exportToExcel() {
    if (!filters) return;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data");

    worksheet.columns = [
      { header: "ID", key: "id" },
      { header: "Start Date", key: "start_date" },
      { header: "Status", key: "status" },
      { header: "Price", key: "price" },
    ];

    // Add the data to the worksheet
    worksheet.addRows(filters);

    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "data.xlsx";
      a.click();

      // Clean up
      URL.revokeObjectURL(url);
    });
  }

  return (
    <Tooltip title="Export To Excel Sheet" placement="top">
      <Button
        color="inherit"
        onClick={exportToExcel}
        startIcon={<GetAppIcon />}
      ></Button>
    </Tooltip>
  );
};

export default ExportToExcelButton;
