// ** React Import
import { useState, useEffect } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { fake_data, formatDate } from "../data";
import { Button, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DomainDetails from "./domanDetails";
import ExportToExcelButton from "./exportButton";
import ConfirmDelete from "./confirm";
import BuyDomain from "./buyDomain";

const useStyles = makeStyles({
  customDataGrid: {
    border: "none !important",
    outline: "none !important",
    boxShadow: "none !important",

    "& .MuiDataGrid": {
      border: "none !important",
      outline: "none !important",
      boxShadow: "none !important",
    },
    "& .MuiDataGrid-cell": {
      border: "none !important",
      outline: "none !important",
      boxShadow: "none !important",
    },
    "& .MuiDataGrid-withBorderColor": {
      border: "none !important",
      outline: "none !important",
      boxShadow: "none !important",
    },
    "& .MuiDataGrid-row": {
      border: "none !important",
      outline: "none !important",
      boxShadow: "none !important",
      backgroundColor: "#Fff",
      borderRadius: "15px",
    },
    "& .MuiDataGrid-colCellWrapper": {
      border: "none !important",
      outline: "none !important",
    },
    "& .MuiDataGrid-columnHeader": {
      border: "none !important",
      outline: "none !important",
      boxShadow: "none !important",
    },
    "& .MuiDataGrid-sortIcon": {
      display: "none !important",
    },
    "& .MuiDataGrid-cell:focus": {
      outline: " none !important",
      border: "none !important",
      boxShadow: "none !important",
    },
  },
});

const TableSelection = () => {
  const classes = useStyles();
  // ** State
  const [rows, setRows] = useState(fake_data);
  const [currentDomian, setCurrentDomains] = useState();
  const [showConfirm, setShowConfirm] = useState(false);

  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Check if the window width is less than a certain threshold (e.g., 768 pixels for mobile)
      const isMobile = window.innerWidth < 800;
      setIsMobile(isMobile);
    }

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Call it initially to set the initial value
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderStatus = () => {
    if (!isMobile) {
      return {
        flex: 0.15,
        minWidth: 140,
        headerName: "Status",
        field: "status",
        renderCell: (params) => (
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <Button
                  variant="outlined"
                  sx={{
                    border: "none",

                    ...(params.row.status === 1
                      ? {
                          backgroundColor: "rgba(0,255,0,0.2)",
                          color: "#3A974C",
                        }
                      : params.row.status === 2
                      ? {
                          backgroundColor: "rgba(255,255,0,0.2)",
                          color: "#F29339",
                        }
                      : {
                          backgroundColor: "rgba(255,0,0,0.2)",
                          color: "#D11A2A",
                        }),
                    borderRadius: "30px",
                    textTransform: "none",
                    "&:hover": {
                      border: "none",
                      ...(params.row.status === 1
                        ? { backgroundColor: "rgba(0,150,0,0.5)" }
                        : params.row.status === 2
                        ? { backgroundColor: "rgba(135,135,0,0.5)" }
                        : { backgroundColor: "rgba(150,0,0,0.5)" }),
                      color: "white",
                    },
                  }}
                  {...bindTrigger(popupState)}
                >
                  {params.row.status === 1
                    ? "Running"
                    : params.row.status === 2
                    ? "Will Expire"
                    : "Expired"}
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Running</MenuItem>
                  <MenuItem onClick={popupState.close}>Will Expire</MenuItem>
                  <MenuItem onClick={popupState.close}>Expired</MenuItem>
                </Menu>
              </>
            )}
          </PopupState>
        ),
      };
    }
    return {};
  };

  const renderCreated = () => {
    if (!isMobile) {
      return {
        flex: 0.15,
        minWidth: 140,
        headerName: "Created At",
        field: "start_date",
        renderCell: (params) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <CalendarMonthIcon sx={{ color: "#4285F4" }} />
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              {formatDate(params.row.start_date)}
            </Typography>
          </Box>
        ),
      };
    }
    return {};
  };
  const columns = [
    {
      flex: 0.1,
      minWidth: 100,
      field: "id",
      headerName: "ID",
      renderCell: (params) => {
        const { row } = params;

        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                noWrap
                variant="body2"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                # {row.id}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    renderStatus(),
    {
      flex: 0.1,
      minWidth: 120,
      field: "price",
      headerName: "Domain Price",
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          ${Number(params.row.price).toFixed(2)}
        </Typography>
      ),
    },

    renderCreated(),

    {
      flex: 0.2,
      field: "action",
      minWidth: 110,
      headerName: "Action",
      renderCell: (params) => (
        <Button
          variant="text"
          startIcon={<VisibilityIcon />}
          sx={{ color: "#55B76E", padding: "10px 20px", textTransform: "none" }}
          onClick={(event) => toggle(event, params.row)}
        >
          {!isMobile ? "Show Details" : null}
        </Button>
      ),
    },
  ];

  const toggle = (event, row) => {
    event.preventDefault();
    if (showDetails) setCurrentDomains(null);
    else setCurrentDomains(row);
    setShowDetails((prev) => !prev);
  };

  const exportData = () => {
    return rows.filter((obj) => rowSelectionModel.includes(obj.id));
  };

  const deleteSelected = () => {
    const filteredObjects = rows.filter(
      (obj) => !rowSelectionModel.includes(obj.id)
    );
    setRows(filteredObjects);
  };

  const onClickDelete = () => {
    toggleConfirm();
  };
  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const refinedColumns = columns.filter((obj) => !isObjectEmpty(obj));
  return (
    <Card
      className={classes.customDataGrid}
      sx={{
        border: "none !important",
        outline: "none !important",
        height: "auto",
        padding: "0 7%",
        backgroundColor: "#F9FAFC",
      }}
    >
      <div style={{ display: "flex", justifyContent: "end" }}>
        {!!rowSelectionModel?.length && (
          <ExportToExcelButton filters={exportData()} />
        )}
        {!!rowSelectionModel?.length && (
          <Tooltip title={isMobile ? "Delete" : null} placement="top">
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              onClick={onClickDelete}
              sx={{
                margin: "0 10px",
                backgroundColor: "#bb0c0c",
                padding: "10px 20px",
                borderRadius: "30px",
                transition: "all 1s",
                "&:hover": {
                  backgroundColor: "#ff0000",
                },
              }}
            >
              {!isMobile ? "Delete" : null}
            </Button>
          </Tooltip>
        )}
        <Tooltip title={isMobile ? "Buy Domain" : null} placement="top">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setShowForm((prev) => !prev)}
            sx={{
              padding: "10px 20px",
              borderRadius: "30px",
              backgroundColor: "#605BFF",
              transition: "all 1s",
            }}
          >
            {!isMobile ? "Buy Domain" : null}
          </Button>
        </Tooltip>
      </div>
      <DataGrid
        sx={{ border: "none !important", outline: "none !important" }}
        getRowSpacing={() => ({ bottom: 20 })}
        disableRowSelectionOnClick
        autoHeight
        rows={rows}
        rowHeight={70}
        columns={refinedColumns}
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
      />
      <DomainDetails open={showDetails} toggle={toggle} data={currentDomian} />
      <BuyDomain open={showForm} toggle={toggleForm} />
      <ConfirmDelete
        open={showConfirm}
        toggle={toggleConfirm}
        confirmationType={""}
        deleteAction={deleteSelected}
      />
    </Card>
  );
};

export default TableSelection;
