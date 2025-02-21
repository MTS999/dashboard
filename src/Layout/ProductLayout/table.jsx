import React, { useState, useEffect } from "react";
import ReactTable from "@meta-dev-zone/react-table";
const mts= [
    {
        "id": 6,
        "title": "Classic Comfort Fit Joggers",
        "slug": "classic-comfort-fit-joggers",
        "price": 25,
        "description": "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
        "category": {
            "id": 1,
            "name": "NuevaCcategoria",
            "slug": "nuevaccategoria",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-02-20T14:40:12.000Z",
            "updatedAt": "2025-02-20T20:47:01.000Z"
        },
        "images": [
            "https://i.imgur.com/ZKGofuB.jpeg",
            "https://i.imgur.com/GJi73H0.jpeg",
            "https://i.imgur.com/633Fqrz.jpeg"
        ],
        "creationAt": "2025-02-20T14:40:12.000Z",
        "updatedAt": "2025-02-20T14:40:12.000Z"
    },
    {
        "id": 7,
        "title": "Classic Comfort Drawstring Joggers",
        "slug": "classic-comfort-drawstring-joggers",
        "price": 79,
        "description": "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
        "category": {
            "id": 1,
            "name": "NuevaCcategoria",
            "slug": "nuevaccategoria",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-02-20T14:40:12.000Z",
            "updatedAt": "2025-02-20T20:47:01.000Z"
        },
        "images": [
            "https://i.imgur.com/mp3rUty.jpeg",
            "https://i.imgur.com/JQRGIc2.jpeg"
        ],
        "creationAt": "2025-02-20T14:40:12.000Z",
        "updatedAt": "2025-02-20T14:40:12.000Z"
    },
    {
        "id": 9,
        "title": "Classic Navy Blue Baseball Cap",
        "slug": "classic-navy-blue-baseball-cap",
        "price": 61,
        "description": "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
        "category": {
            "id": 1,
            "name": "NuevaCcategoria",
            "slug": "nuevaccategoria",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-02-20T14:40:12.000Z",
            "updatedAt": "2025-02-20T20:47:01.000Z"
        },
        "images": [
            "https://i.imgur.com/R3iobJA.jpeg",
            "https://i.imgur.com/Wv2KTsf.jpeg",
            "https://i.imgur.com/76HAxcA.jpeg"
        ],
        "creationAt": "2025-02-20T14:40:12.000Z",
        "updatedAt": "2025-02-20T14:40:12.000Z"
    },
    {
        "id": 10,
        "title": "Classic Blue Baseball Cap",
        "slug": "classic-blue-baseball-cap",
        "price": 86,
        "description": "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.",
        "category": {
            "id": 1,
            "name": "NuevaCcategoria",
            "slug": "nuevaccategoria",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-02-20T14:40:12.000Z",
            "updatedAt": "2025-02-20T20:47:01.000Z"
        },
        "images": [
            "https://i.imgur.com/wXuQ7bm.jpeg",
            "https://i.imgur.com/BZrIEmb.jpeg",
            "https://i.imgur.com/KcT6BE0.jpeg"
        ],
        "creationAt": "2025-02-20T14:40:12.000Z",
        "updatedAt": "2025-02-20T14:40:12.000Z"
    },
    {
        "id": 11,
        "title": "Classic Red Baseball Cap",
        "slug": "classic-red-baseball-cap",
        "price": 35,
        "description": "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
        "category": {
            "id": 1,
            "name": "NuevaCcategoria",
            "slug": "nuevaccategoria",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-02-20T14:40:12.000Z",
            "updatedAt": "2025-02-20T20:47:01.000Z"
        },
        "images": [
            "https://i.imgur.com/cBuLvBi.jpeg",
            "https://i.imgur.com/N1GkCIR.jpeg",
            "https://i.imgur.com/kKc9A5p.jpeg"
        ],
        "creationAt": "2025-02-20T14:40:12.000Z",
        "updatedAt": "2025-02-20T14:40:12.000Z"
    },
    {
        "id": 12,
        "title": "Classic Black Baseball Cap",
        "slug": "classic-black-baseball-cap",
        "price": 58,
        "description": "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
        "category": {
            "id": 1,
            "name": "NuevaCcategoria",
            "slug": "nuevaccategoria",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-02-20T14:40:12.000Z",
            "updatedAt": "2025-02-20T20:47:01.000Z"
        },
        "images": [
            "https://i.imgur.com/KeqG6r4.jpeg",
            "https://i.imgur.com/xGQOw3p.jpeg",
            "https://i.imgur.com/oO5OUjb.jpeg"
        ],
        "creationAt": "2025-02-20T14:40:12.000Z",
        "updatedAt": "2025-02-20T14:40:12.000Z"
    },
    {
        "id": 13,
        "title": "Classic Olive Chino Shorts",
        "slug": "classic-olive-chino-shorts",
        "price": 84,
        "description": "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
        "category": {
            "id": 1,
            "name": "NuevaCcategoria",
            "slug": "nuevaccategoria",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-02-20T14:40:12.000Z",
            "updatedAt": "2025-02-20T20:47:01.000Z"
        },
        "images": [
            "https://i.imgur.com/UsFIvYs.jpeg",
            "https://i.imgur.com/YIq57b6.jpeg"
        ],
        "creationAt": "2025-02-20T14:40:12.000Z",
        "updatedAt": "2025-02-20T14:40:12.000Z"
    },
    {
        "id": 15,
        "title": "Classic White Crew Neck T-Shirt",
        "slug": "classic-white-crew-neck-t-shirt",
        "price": 39,
        "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
        "category": {
            "id": 1,
            "name": "NuevaCcategoria",
            "slug": "nuevaccategoria",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-02-20T14:40:12.000Z",
            "updatedAt": "2025-02-20T20:47:01.000Z"
        },
        "images": [
            "https://i.imgur.com/axsyGpD.jpeg",
            "https://i.imgur.com/T8oq9X2.jpeg",
            "https://i.imgur.com/J6MinJn.jpeg"
        ],
        "creationAt": "2025-02-20T14:40:12.000Z",
        "updatedAt": "2025-02-20T14:40:12.000Z"
    }
]
const members = [
  {
    _id: 1,
    email: "johndoe@example.com",
    name: "John Doe",
    phoneNumber: "+44 1233 123456",
    status: true,
    profileImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    address: "123 Main St London WC2N 5DU UK",
    jobTitle: "Software Engineer",
    company: "Meta Logix Tech",
    bio: "John is a skilled software engineer with over 10 years of experience in full-stack development. He enjoys working with the latest technologies and building innovative Tablelications.",
  },
  {
    _id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phoneNumber: "+1 555 123 4567",
    status: false,
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    address: "456 Oak Ave New York 10001 USA",
    jobTitle: "Product Manager",
    company: "Dynamite Lifestyle",
    bio: "Jane is a seasoned product manager with a passion for bringing ideas to life. She excels at leading cross-functional teams and delivering high-quality products.",
  },
  {
    _id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+44 1233 123456",
    status: true,
    profileImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    address: "123 Main St London WC2N 5DU UK",
    jobTitle: "Software Engineer",
    company: "Meta Logix Tech",
    bio: "John is a skilled software engineer with over 10 years of experience in full-stack development. He enjoys working with the latest technologies and building innovative Tablelications.",
  },
  {
    _id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phoneNumber: "+1 555 123 4567",
    status: false,
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    address: "456 Oak Ave New York 10001 USA",
    jobTitle: "Product Manager",
    company: "Dynamite Lifestyle",
    bio: "Jane is a seasoned product manager with a passion for bringing ideas to life. She excels at leading cross-functional teams and delivering high-quality products.",
  },
  // ... more data
];

function Table() {
  const [selected, setSelected] = useState([]);
  const [users, setUsers] = useState([]);
  // const [searchText, setSearchText] = useState("");
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(1);
  // const [totalCount, setTotalCount] = useState(0);
  // const [totalPages, setTotalPages] = useState(2);

  // const handleChangePage = (newPage) => {
  //   if (newPage == 1) {
  //     setUsers([members[1]]);
  //   } else {
  //     setUsers([members[0]]);
  //   }
  //   setPage(newPage);
  // };

  const handleEdit = (value) => {
    console.log(value, "---value");
  };

  const handleDelete = (value) => {
    console.log(value, "---value");
  };

  const getData = () => {
    const data = members.map((item) => {
      return {
        ...item,
        is_show_celendar: true,
        link: {
          to: "https://www.google.com/",
          target: "_blank",
          show_text: "Preview",
        },
        thumbnail: {
          src: item.profileImage,
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
                <h4>Name :</h4>
                <p>{row.name}</p>
              </div>
              <div className="user-info">
                <h4>Email :</h4>
                <p>{row.email}</p>
              </div>
              <div className="user-info">
                <h4>Phone Number :</h4>
                <p>{row.phoneNumber}</p>
              </div>
              <div className="user-info">
                <h4>Address :</h4>
                <p>{row.address}</p>
              </div>
              <div className="user-info">
                <h4>Job Title :</h4>
                <p>{row.jobTitle}</p>
              </div>
              <div className="user-info">
                <h4>Company :</h4>
                <p>{row.company}</p>
              </div>
            </div>
          ),
        };
      },
    },
    {
      id: "thumbnail",
      label: "Profile Image",
      type: "thumbnail",
    },
    { id: "name", label: "User Name" },
    { id: "email", label: "Email" },
    { id: "phoneNumber", label: "Phone Number" },
    {
      id: "any",
      label: "Job Title",
      renderData: (row) => {
        return <div>{row.jobTitle}</div>;
      },
    },
    { id: "status", label: "Status", type: "row_status" },
  ];

  // const searchFunction = () => {};

  useEffect(() => {
    getData();
  }, []);

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
        //   total_count: totalCount,
        //   rows_per_page: rowsPerPage,
        //   page: page,
        //   total_pages: totalPages,
        //   handleChangePage: handleChangePage,
        // }}
        class_name=""
        theme_config={{
          background: "#1d1c1d",
          color: "#fff",
          iconColor: "#f6bd4b",
        }}
        is_sticky_header={false}
        is_hide_footer_pagination={false}
        is_hide_header_pagination={false}
        is_hide_search={false}
      />
    </div>
  );
}

export default Table;
