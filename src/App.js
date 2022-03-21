
import React, { useState } from 'react';

function App() {
  const [userDetails, setuserDetails] = useState([]);

  fetch("http://dummy.restapiexample.com/api/v1/employees").then((res) => {
    res.json().then((data) => {
      if (data.data.length > 0) {
        data.data.forEach((itemData) => {
          setuserDetails(...userDetails, ...itemData)
        });
      }
    });
  });

  return (
    <div className="container bg-gradient">
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Salary</th>
          </tr>
          {userDetails?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;