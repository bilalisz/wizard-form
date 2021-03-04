import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card,Table } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";

const CustomeTable = () => {
  const [userData, setUserData] = useState([]);
  const [posts,setPosts]=useState([])
  // const [currentPage, setCurrentPage] = useState(1);
  // const [userPerPage, setUserParPage] = useState(10);

  // const indexOfLastuser = currentPage * userPerPage;
  // const indexOfFirstUser = indexOfLastuser * userPerPage;
  // const currentUser = posts.slice(indexOfFirstUser, indexOfLastuser);

  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "get",
    })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setUserData]);
  
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "get",
    })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setPosts]);

  const columnsUsers = [
    { dataField: "name", text: "Name" },
    { dataField: "username", text: "User Name" },
    { dataField: "email", text: "E-mail" },
    { dataField: "phone", text: "Phone" },
  ];
  const columnsPost = [
    { dataField: "id", text: "ID" },
    { dataField: "userId", text: "User ID" },
    { dataField: "title", text: "Title" },
    
  ];

  return (
    <div className="mt-3">
      {/* <Container> */}
      <Card>
        <Card.Header class="text-info">Wizard Table</Card.Header>
        <Card.Body>

{/* you can show any of this 👇 uncomment below tag (BootstrapTable) and comment the next one */}

          {/* <BootstrapTable
            keyField="name"
            data={userData}
            columns={columnsUsers}
            pagination={paginationFactory()}
          /> */}
          
          <BootstrapTable
            keyField="name"
            data={posts}
            columns={columnsPost}
            pagination={paginationFactory()}
          />
         
        </Card.Body>
      </Card>
      {/* </Container> */}
    </div>
  );
};

export default CustomeTable;
