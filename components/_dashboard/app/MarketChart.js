import { useState } from "react";
import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  TableHead,
  Box,
} from "@mui/material";

const TABLE_HEAD = [
  { id: "pair_name", label: "PAIR NAME" },
  { id: "last_value", label: "VALUE" },
  { id: "change_percent_val", label: "CHANGE %" },
  { id: "change_val", label: "CHANGE VALUE" },
];

export default function MarketChart(props) {
  const data = props.marketData?.data[0].screen_data.pairs_data;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {data && (
        <Container>
          <Box mb="1rem">
            <Typography variant="h4">Market</Typography>
          </Box>
          <Card>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {TABLE_HEAD.map((headCell) => (
                      <TableCell key={headCell.id} align={"left"}>
                        {headCell.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        pair_ID,
                        pair_name,
                        change_percent_val,
                        localized_last_step_arrow,
                        last,
                        change_val,
                      } = row;

                      return (
                        <TableRow hover key={pair_ID} tabIndex={-1}>
                          <TableCell component="th" scope="row" padding="none">
                            <Box p="0.5rem" ml="0.5rem">
                              <Typography variant="subtitle2" noWrap>
                                {pair_name}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align="left">{last}&nbsp;$</TableCell>
                          <TableCell align="left">
                            {change_percent_val}
                          </TableCell>
                          <TableCell align="left">
                            {change_val}&nbsp;$
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Container>
      )}
      {!data && <div></div>}
    </>
  );
}
