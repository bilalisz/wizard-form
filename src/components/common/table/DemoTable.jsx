import React from 'react'
import {Table} from 'react-bootstrap'

const DemoTable = (props) => {
    const {posts} =props
    return (
        <div>
             <Table striped bordered hover>
            <thead className="bg-info text-white">
              <tr>
                <th>Id</th>
                <th>User ID</th>
                <th>Title</th>
               
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => {
                console.log(post);
                return (
                  <tr key={index}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                   
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
    )
}

export default DemoTable
