import React from "react";
import { useSelector } from "react-redux";
import s from "./DisplayData.module.css";
import { getUsers } from "../../../../Store/Selectors/User";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const DisplayData = () => {
  const user = useSelector(getUsers);
  
  return (
    <div className={s.diplay_data}>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table
          border="1"
          style={{ width: "70%", justifyContent: "center" }}
          size="small"
          arial-label="caption table"
        >
          <TableHead>
            <TableRow
              style={{ backgroundColor: "burlywood", color: "aliceblue" }}
            >
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>District</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Landmark</TableCell>
              <TableCell>PostCode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((d) => {
              return (
                <TableRow key={d.email}>
                  <TableCell>{d.firstName}</TableCell>
                  <TableCell>{d.lastName}</TableCell>
                  <TableCell>{d.contact}</TableCell>
                  <TableCell>{d.email}</TableCell>
                  <TableCell>{d.country}</TableCell>
                  <TableCell>{d.district}</TableCell>
                  <TableCell>{d.city}</TableCell>
                  <TableCell>{d.landmark}</TableCell>
                  <TableCell>{d.postCode}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DisplayData;
