import React, { useState, useEffect } from "react";
import ReactTable from "@meta-dev-zone/react-table";

function Table({ filteredData ,setPage, page}) {
  const [selected, setSelected] = useState([]);
  const [users, setUsers] = useState([]);
//   console.log(filteredData, "i am filter");

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleEdit = (value) => {
    console.log(value, "---value");
  };

  const handleDelete = (value) => {
    console.log(value, "---value");
  };

  const getData = () => {
    const data = filteredData.map((item) => {
      return {
        ...item,
        is_show_celendar: true,
        link: {
          to: "https://www.google.com/",
          target: "_blank",
          show_text: "Preview",
        },
        // Picture: {
        //   // src: item.images[0],
        //   src: item.images[0],
        //   alt: "Profile Image",
        // },
        html: "<div>html text </div>",
      };
    });
    setUsers(data);
  };

  const MENU_OPTIONS = [
    {
      label: "Edit",
      icon: "📄",
      handleClick: handleEdit,
    },
    {
      label: "Delete",
      icon: "📄",
      handleClick: handleDelete,
      // child_options: [
      //   {
      //     label: "Setting",
      //      icon: "📄",
      //     handleClick: handleEdit,
      //   },
      // ],
    },
  ];

  const TABLE_HEAD = [
   
 
    { id: "id", label: "ID" },
    { id: "workingDays", label: "WorkingDays" },
    { id: "date", label: "Date" },
  
    { id: "checkIn", label: "Check In",  },
    { id: "checkOut", label: "Check Out",  },
    { id: "late", label: "Late",  },
    { id: "earlyLeave", label: "Early Leave",  },
    { id: "status", label: "Status", type: "row_status" },
  ];

  useEffect(() => {
    getData();
  }, [filteredData]);

  return (
    <div className="Table">
      <ReactTable
        data={users} // required
        TABLE_HEAD={TABLE_HEAD} // required
        MENU_OPTIONS={MENU_OPTIONS} // required
        checkbox_selection={{
          selected: selected,
          setSelected: setSelected,
          // selected_by: "",
        }}
        // custom_search={{
        //   searchText: searchText,
        //   setSearchText: setSearchText,
        //   handleSubmit: searchFunction,
        // }}
        // custom_pagination={{
        //   total_count: 80,
        //   rows_per_page: 10,
        //   page: page,
        //   total_pages: 80,
        //   handleChangePage: handleChangePage,
        // }}
        class_name=""
        theme_config={{
          background: "white",
          color: "#black",
          iconColor: "#f6bd4b",
        }}
        is_sticky_header={false}
        is_hide_footer_pagination={true}
        is_hide_header_pagination={false}
        is_hide_search={false}
      />
    </div>
  );
}

export default Table;
