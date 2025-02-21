import React, { useState, useEffect } from "react";
import ReactTable from "@meta-dev-zone/react-table";

function Table({ filerproduct ,setPage, page}) {
  const [selected, setSelected] = useState([]);
  const [users, setUsers] = useState([]);
  console.log(filerproduct, "i am filter");

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
    const data = filerproduct.map((item) => {
      return {
        ...item,
        is_show_celendar: true,
        link: {
          to: "https://www.google.com/",
          target: "_blank",
          show_text: "Preview",
        },
        Picture: {
          // src: item.images[0],
          src: item.images[0],
          alt: "Profile Image",
        },
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
    { id: "action", label: "Action", type: "action" },
    {
      id: "number",
      label: "#",
      type: "number",
      show_history: (row) => {
        return {
          is_show_history: true,
          icon: "",
          component: (
            <div className="user">
              <h3>User Info</h3>
              <div className="user-info">
                <h4>title :</h4>
                <p>{row.title}</p>
              </div>
              <div className="user-info">
                <h4>Price :</h4>
                <p>{row.price}</p>
              </div>
            </div>
          ),
        };
      },
    },
    {
      id: "Picture",
      label: "Profile Image",
      type: "thumbnail",
    },
    { id: "id", label: "ID" },
    { id: "title", label: "Title" },
    { id: "price", label: "Price" },
    {
      id: "any",
      label: "Job Title",
      renderData: (row) => {
        return <div>{row.jobTitle}</div>;
      },
    },
    { id: "status", label: "Status", type: "row_status" },
  ];

  useEffect(() => {
    getData();
  }, [filerproduct]);

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
        custom_pagination={{
          total_count: 80,
          rows_per_page: 10,
          page: page,
          total_pages: 80,
          handleChangePage: handleChangePage,
        }}
        class_name=""
        theme_config={{
          background: "#1d1c1d",
          color: "#fff",
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
