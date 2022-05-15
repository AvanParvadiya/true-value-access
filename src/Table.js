import { Link } from "react-router-dom";
import { Sort } from "./Sort";

export const Table = ({
  currentTableData,
  firtNameSort,
  lastNameSort,
  ageSort,
  emailAddressSorting,
  webSorting,
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th onClick={firtNameSort}><Sort />FIRST NAME</th>
            <th onClick={lastNameSort}><Sort />LAST NAME</th>
            <th onClick={ageSort}><Sort />AGE</th>
            <th onClick={emailAddressSorting}><Sort />EMAIL</th>
            <th onClick={webSorting}><Sort />WEBSITE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <Link to={"" + item.id}>{item.first_name}</Link>
                </td>
                <td>
                  <Link to={"" + item.id}>{item.last_name}</Link>
                </td>
                <td>
                  <Link to={"" + item.id}>{item.age}</Link>
                </td>
                <td>
                  <Link to={"" + item.id}>{item.email}</Link>
                </td>
                <td>
                  <a href={item.web}>{item.web}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
