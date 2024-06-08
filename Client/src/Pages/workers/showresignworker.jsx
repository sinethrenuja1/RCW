// import { Link } from "react-router-dom";
// import ShopHeader from "../../Components/shopheader";
// import axios from "axios";
// import { useEffect, useState } from "react";

// function ShowResignWorkers() {
//     const [workerData, setWorkerData] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");

//     const fetchResignWorkerData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/workerRoutes/resignworker_table');
//             setWorkerData(response.data);
//         } catch (error) {
//             console.error('Error fetching resign worker data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchResignWorkerData();
//     }, []);

//     const filteredWorkers = workerData.filter(worker => 
//         worker.worker_id.includes(searchTerm) || 
//         worker.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <ShopHeader pageName="Resign Workers" />
//             <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-5">
//                 <div className="ml-5 text-3xl">Resign Workers</div>
//                 <div className="px-6 py-4">
//                     {/* <div className="flex justify-between items-center">
//                         <input
//                             type="text"
//                             placeholder="Search by Employee ID or Name"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
//                         />
//                         <div>
//                             <Link to="/Add_workers" className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
//                                 + Add Worker
//                             </Link>
//                         </div>
//                     </div> */}

//                     <table className="table-auto w-full mt-8">
//                         <thead>
//                             <tr>
//                                 <th className="px-4 py-2 text-left">Employee ID</th>
//                                 <th className="px-4 py-2 text-left">Name</th>
//                                 <th className="px-4 py-2 text-left">Address</th>
//                                 <th className="px-4 py-2 text-left">Tel_no</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredWorkers.map((worker) => (
//                                 <tr key={worker.worker_id}>
//                                     <td className="border px-4 py-2">{worker.worker_id}</td>
//                                     <td className="border px-4 py-2">{worker.name}</td>
//                                     <td className="border px-4 py-2">{worker.address}</td>
//                                     <td className="border px-4 py-2">{worker.tel_no}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ShowResignWorkers;




import  { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import ShopHeader from '../../Components/shopheader';

const columns = [
  { id: 'worker_id', label: 'Employee ID', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'nic_no', label: 'NIC No', minWidth: 170 },
  { id: 'birthday', label: 'Birthday', minWidth: 170 },
  { id: 'address', label: 'Address', minWidth: 170 },
  { id: 'tel_no', label: 'Telephone Number', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'main_area', label: 'Main Area', minWidth: 170 },
  { id: 'sub_area', label: 'Sub Area', minWidth: 170 },
];

export default function ShowResignWorkers() {
  const [workerData, setWorkerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchResignWorkerData = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/workerRoutes/resignworker_table');
      setWorkerData(response.data);
    } catch (error) {
      console.error('Error fetching resign worker data:', error);
    }
  };

  useEffect(() => {
    fetchResignWorkerData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredWorkers = workerData.filter(worker =>
    worker.worker_id.includes(searchTerm) ||
    worker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ShopHeader pageName="Resign Workers" />
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-5">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search by Employee ID or Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-1/4"
            />
          </div>
          <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '20px' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredWorkers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((worker) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={worker.worker_id}>
                          {columns.map((column) => {
                            const value = worker[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : column.id === 'birthday'
                                  ? new Date(value).toLocaleDateString()
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={filteredWorkers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
}
