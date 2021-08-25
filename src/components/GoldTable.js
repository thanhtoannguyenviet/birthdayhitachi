import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
export default function GoldTable(props){
  const { listRank } = props;
    return(
        <React.Fragment>
      <Typography component="h1" variant="h6" color="primary" gutterBottom>
            Bảng vàng
    </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Prize</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRank?.data?.map((row,index) => (
              <TableRow key={index}>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.prizeName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <div className={classes.seeMore}>
          <Link color="primary" href="#" onClick={preventDefault}>
            See more orders
          </Link>
        </div> */}
      </React.Fragment>
    )
}

// Generate Prize User
function createData(id, date, name, prize) {
    return { id, date, name, prize};
  }
const rows = [
    createData(0, '19 Aug, 2021', 'Lucky Man', 'Iphone X'),
    createData(1, '19 Aug, 2021', 'Lucky Woman', 'Iphone X'),
    createData(2, '19 Aug, 2021', 'Lucky Girl', 'Iphone X'),
    createData(3, '19 Aug, 2021', 'Lucky Boy', 'Iphone X'),
    createData(4, '19 Aug, 2021', 'Lucky Canada', 'Iphone X'),
  ];