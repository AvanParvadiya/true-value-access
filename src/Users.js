import Pagination from "./Pagination";
import { Table } from "./Table";

export const Users = ({
  startSearch,
  currentTableData,
  lastNameSort,
  emailAddressSort,
  webSorting,
  ageSorting,
  currentPage,
  data,
  firtNameSort,
  setCurrentPage,
  PageSize,
}) => {
  return (
    <>
      <div className="main-container">
        <h2>Users</h2>
        <input type="search" onChange={(e) => startSearch(e)} />
        <Table
          currentTableData={currentTableData}
          firtNameSort={firtNameSort}
          lastNameSort={lastNameSort}
          ageSort={ageSorting}
          emailAddressSorting={emailAddressSort}
          webSorting={webSorting}
        />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          firtNameSort={firtNameSort}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};
