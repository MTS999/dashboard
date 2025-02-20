import React from "react";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid2";
import {
  TextField,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  TablePagination,
  Card,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import attendanceData from "../../utils/attendence.json";
import RotateLeftSharpIcon from "@mui/icons-material/RotateLeftSharp";
const columns = [
  { id: "workingDays", label: "Working Days", minWidth: 140, align: "left" },
  { id: "date", label: "Date", minWidth: 170, align: "left" },
  { id: "checkIn", label: "Check In", minWidth: 170, align: "left" },
  { id: "checkOut", label: "Check Out", minWidth: 170, align: "left" },
  { id: "late", label: "Late (min)", minWidth: 170, align: "left" },
  { id: "status", label: "Status", minWidth: 170, align: "center" },
];

const AttendenceTable = () => {
  const [status, setStatus] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [filteredData, setFilteredData] = useState(attendanceData);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    console.log({ status, dateFrom, dateTo });

    const start = new Date(dateFrom);
    const end = new Date(dateTo);

    const filtered = attendanceData.filter((item) => {
      const itemDate = new Date(item.date);

      return itemDate >= start && itemDate <= end;
    });

    setFilteredData(filtered);
  };
  const setInitialDates = () => {
    const today = new Date();

    // Calculate the first day of the current month
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    // Calculate the last day of the current month
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    // Format dates to YYYY-MM-DD
    const formatDate = (date) => {
      const offsetDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
      );
      return offsetDate.toISOString().split("T")[0];
    };

    // Set the formatted dates
    setDateFrom(formatDate(firstDay));
    setDateTo(formatDate(lastDay));
  };
  useEffect(() => {
    setInitialDates();
  }, []);
  return (
    <>
      <div className="container-fluid box-shadow mt-3 rounded-3">
        <div className="row mb-3 mt-3">
          <div className="mt-4">
            <h4> Taimoor Shahid Attendence</h4>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4 g-4">
          <div className="col">
            <TextField
              select
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              fullWidth
              color="primary"
              variant="outlined"
            >
              <MenuItem value="Present">Present</MenuItem>
              <MenuItem value="Absent">Absent</MenuItem>
              <MenuItem value="Late">Late</MenuItem>
            </TextField>
          </div>
          <div className="col">
            <TextField
              label="From"
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              fullWidth
            />
          </div>
          <div className="col">
            <div className="center gap flex-center">
              <TextField
                label="To"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                fullWidth
              />
              <div onClick={setInitialDates}>
                <IconButton>
                  <RotateLeftSharpIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-end">
            <button
              className="theme--button py-2"
              type="submit"
              variant="contained"
            >
              Filter
            </button>
          </div>
        </div>
        <div className="row">
          <div>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                overflow: "hidden",
                mt: "10px",
                maxWidth: "100%",
              }}
            >
              <TableContainer
                sx={{
                  display: "flex",
                  maxHeight: 360,
                  overflowX: "auto",
                  width: "100%",
                }}
              >
                <Box mb={3} textAlign={"center"}></Box>

                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          <Typography variant="bold" color="initial">
                            {column.label}
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.id === "status" ? (
                                    <Chip
                                      label={value}
                                      variant="outlined"
                                      color={
                                        value === "Present"
                                          ? "success"
                                          : "danger"
                                      }
                                    />
                                  ) : (
                                    <Typography variant="body2" color="initial">
                                      {value}
                                    </Typography>
                                  )}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendenceTable;
