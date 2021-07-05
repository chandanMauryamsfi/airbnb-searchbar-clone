import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });

const Stutable = (props) => {
const classes = useStyles();
  if (props.loading) {
    return <h1>loading..</h1>;
  } else {
    return (
      <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell>ROLL</TableCell>
                  <TableCell>CITY</TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.mydata.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.roll}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => props.deletedata(row.id)}
                      >
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </>
    );
  }
};

export default Stutable;
