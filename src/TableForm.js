import React from 'react';

function TableForm() {
  return (
    <div>
      <table>
        <tr>
          <td> First Name:</td>
          <td>
            <input type="text" name="firstName" value="" />
          </td>
        </tr>

        <tr>
          <td> LastName: </td>
          <td>
            {' '}
            <input type="text" name="LastName" value="" />{' '}
          </td>
        </tr>

        <tr>
          <td> Age: </td>
          <td>
            {' '}
            <input type="text" name="Age" value=" " />{' '}
          </td>
        </tr>

        <tr>
          <td> Address: </td>
          <td>
            {' '}
            <input type="text" name="Address" value=" " />{' '}
          </td>
        </tr>

        <tr>
          <td> Course: </td>
          <td>
            <input type="text" name="Course" value=" " />{' '}
          </td>
        </tr>
        <tr>
          <td>
            <button>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default TableForm;
