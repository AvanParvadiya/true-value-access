import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import {
  ageASC,
  ageDESC,
  emailASC,
  emailDESC,
  firstNameASC,
  firstNameDESC,
  lastNameASC,
  lastNameDESC,
  webASC,
  webDESC,
} from "./Sortings";
import { UserDetails } from "./UserDetails";
import { Users } from "./Users";

let PageSize = 10;

export default function App() {
  const [urlData, setUrlData] = useState([]);
  const [data, setData] = useState([]);
  const [firstnameSort, setfirstNameSort] = useState(true);
  const [lastnameSort, setLastNameSort] = useState(true);
  const [ageSort, setAgeSort] = useState(true);
  const [emailSort, setEmailSort] = useState(true);
  const [webSort, setWebSort] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTableData, setCurrentTableData] = useState([]);

  
  
  useEffect(() => {
    fetch(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setUrlData(res);
        setData(res);
      });
  }, []);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setCurrentTableData(urlData.slice(firstPageIndex, lastPageIndex));
  }, [currentPage, urlData]);

  const CurrentPageSetup = () => {
    setCurrentTableData(
      data.slice(
        (currentPage - 1) * PageSize,
        (currentPage - 1) * PageSize + PageSize
      )
    );
  };
  const firtNameSort = () => {
    setfirstNameSort((nameSort) => !nameSort);
    firstnameSort ? firstNameASC(data) : firstNameDESC(data);
    CurrentPageSetup();
  };

  const lastNameSort = () => {
    setLastNameSort((nameSort) => !nameSort);
    lastnameSort ? lastNameASC(data) : lastNameDESC(data);
    CurrentPageSetup();
  };

  const ageSorting = () => {
    setAgeSort((ageSort) => !ageSort);
    ageSort ? ageASC(data) : ageDESC(data);
    CurrentPageSetup();
  };

  const emailAddressSort = () => {
    setEmailSort((emailSort) => !emailSort);
    emailSort ? emailASC(data) : emailDESC(data);
    CurrentPageSetup();
  };

  const webSorting = () => {
    setWebSort((webSort) => !webSort);
    webSort ? webASC(data) : webDESC(data);
    CurrentPageSetup();
  };
  const startSearch = (e) => {
    if(e.target.value===''){
      setData(urlData);
    }
    setData(
      urlData.filter(
        (d) =>
          d.first_name.toLowerCase().includes(e.target.value) ||
          d.last_name.toLowerCase().includes(e.target.value) 
          // d.age === parseInt(e.target.value) ||
          // d.email.toLowerCase().includes(e.target.value) ||
          // d.web.toLowerCase().includes(e.target.value)
      )
    );
    CurrentPageSetup();
  };
  return (
    <>
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/users"
              element={
                <Users
                  PageSize={PageSize}
                  startSearch={startSearch}
                  currentTableData={currentTableData}
                  lastNameSort={lastNameSort}
                  emailAddressSort={emailAddressSort}
                  webSorting={webSorting}
                  ageSorting={ageSorting}
                  currentPage={currentPage}
                  data={data}
                  firtNameSort={firtNameSort}
                  setCurrentPage={setCurrentPage}
                />
              }
            />
            
            <Route path="/users/:id" element={<UserDetails data={data}/>}/>
            <Route path="/" element={<Navigate to="/users" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
