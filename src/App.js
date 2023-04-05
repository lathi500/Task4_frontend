import { useEffect, useState } from "react";
import THolderData from "./components/tHolderData";

const API = "http://localhost:3000/TokenHolderData";

const App = () => {

  const [tHolders, setTHolders] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Data Length: ", data.responce.tHolder.length);
      console.log("Data: ", data.responce.tHolder);
      if (data.responce.tHolder.length > 0) {
        setTHolders(data.responce.tHolder);
      }

      // console.log(Tholders);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers(API);
  }, [])

  return <>
   <h1  >USDC Account Holder Data</h1>
    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th>Balance</th>
        </tr>

      </thead>
      <tbody>
        <THolderData tholders={tHolders} />
      </tbody>
    </table>
  </>
}

export default App; 