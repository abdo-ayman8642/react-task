import React from "react";
import { Button, Tooltip } from "@mui/material";
import ExcelJS from "exceljs";
import GetAppIcon from "@mui/icons-material/GetApp";

const ExportToExcelButton = ({ filters }) => {
  function exportToExcel() {
    if (!filters) return;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data");

    // we here define the column headers manually cause we know and we sure about the structure of the data
    worksheet.columns = [
      { header: "ID", key: "id" },
      { header: "Start Date", key: "start_date" },
      { header: "Status", key: "status" },
      { header: "Price", key: "price" },
    ];

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
