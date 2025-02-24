import React from "react";
import { useState, useEffect } from "react";
import { TextField, MenuItem, IconButton } from "@mui/material";
import attendanceData from "../../utils/attendence.json";
import RotateLeftSharpIcon from "@mui/icons-material/RotateLeftSharp";
import Table from "./Table";
import { useCallback } from "react";

const AttendenceTable = () => {
  const [status, setStatus] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [filteredData, setFilteredData] = useState(attendanceData);
  // const [page, setPage] = useState(0);
  const [page, setPage] = useState(0);

  // const setInitialDates = () => {
  //   const today = new Date();

  //   // Calculate the first day of the current month
  //   const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  //   // Calculate the last day of the current month
  //   const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  //   // Format dates to YYYY-MM-DD
  //   const formatDate = (date) => {
  //     const offsetDate = new Date(
  //       date.getTime() - date.getTimezoneOffset() * 60000
  //     );
  //     return offsetDate.toISOString().split("T")[0];
  //   };

  //   // Set the formatted dates
  //   setDateFrom(formatDate(firstDay));
  //   setDateTo(formatDate(lastDay));
  // };


  const setInitialDates = useCallback(() => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
    const formatDate = (date) => {
      const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
      return offsetDate.toISOString().split("T")[0];
    };
  
    setDateFrom(formatDate(firstDay));
    setDateTo(formatDate(lastDay));
  }, []); // No dependencies
  
  // const handleFilter = () => {
  //   console.log({ status, dateFrom, dateTo });

  //   const start = new Date(dateFrom);
  //   const end = new Date(dateTo);

  //   const filtered = attendanceData.filter((item) => {
  //     const itemDate = new Date(item.date);

  //     return itemDate >= start && itemDate <= end;
  //   });

  //   setFilteredData(filtered);
  // };


  const handleFilter = useCallback(() => {
  console.log({ status, dateFrom, dateTo });

  const start = new Date(dateFrom);
  const end = new Date(dateTo);

  const filtered = attendanceData.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= start && itemDate <= end;
  });

  setFilteredData(filtered);
}, [status, dateFrom, dateTo]); // Dependencies

  useEffect(() => {
    setInitialDates();
  }, [setInitialDates]);
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
            <button className="theme--button py-2" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </div>
        <div className="row">
          <div>
            <Table filteredData={filteredData} page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendenceTable;
