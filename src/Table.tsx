import React, { forwardRef } from "react";
import MaterialTable, { Column, Icons } from "@material-table/core";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { Person } from "./type";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import './App.css';

const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

type Props = {
  data: Person[];
};

const columns: Array<Column<Person>> = [
  { title: "Name", field: "first" },
  { title: "Surname", field: "last" },
  { title: "Email", field: "email" },
  { title: "Address", field: "address"}
];

const options = {
  paging: true,
  pageSize: 9,
  emptyRowsWhenPaging: false,
  pageSizeOptions: [9, 20, 50]
};

export const Table = ({ data }: Props) => {

  const [open, setOpen] = React.useState(false);

  const [dataName, setDataName] = React.useState([]);
  const [dataSurname, setDataSurname] = React.useState([]);
  const [dataEmail, setDataEmail] = React.useState([]);
  const [dataAddress, setDataAddress] = React.useState([]);
  const [dataCreated, setDataCreated] = React.useState([]);
  const [dataBalance, setDataBalance] = React.useState([]);

  const handleClickOpen = (selectedData: any) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <Container>   
      <MaterialTable
        columns={columns}
        data={data}
        icons={tableIcons}
        options={options}
        title="People list"
        onRowClick={(event, rowData) => {
          handleClickOpen(rowData);

          setDataName(rowData.first);
          setDataSurname(rowData.last);
          setDataEmail(rowData.email);
          setDataAddress(rowData.address);
          setDataCreated(rowData.created);
          setDataBalance(rowData.balance);
        }}
      />

      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth= {false}>

        <DialogTitle className="popUp"> Profile </DialogTitle>
        <br></br>
        <DialogContent>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4}>
                <span> <b>Name</b> <br></br> {dataName} </span>
              </Grid>
              <Grid item xs={4}>
                <span> <b>Surname</b> <br></br> {dataSurname} </span> 
              </Grid>
              <Grid item xs={4}>
                <span> <b>Email</b> <br></br> {dataEmail} </span>
              </Grid>
              <Grid item xs={4}>
                <span> <b>Address</b> <br></br> {dataAddress} </span>
              </Grid>
              <Grid item xs={4}>
                <span> <b>Created</b> <br></br> {dataCreated} </span>
              </Grid>
              <Grid item xs={4}>
                <span> <b>Balance</b> <br></br> {dataBalance} </span>
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Close</Button>
        </DialogActions>

      </Dialog>
  </Container>   
  );
};
