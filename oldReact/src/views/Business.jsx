import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

export default function Business() {
const [businesses, setBusinesses] = useState([]);
const [loading, setLoading] = useState();
const {setNotification} = useStateContext();

  // useEffect to fetch data from API
  useEffect(() => {
    getBusinesses();
  }, []);

  const getBusinesses = ()=> {
    setLoading(true);
    axiosClient.get('/businesses')
    .then(({data}) => {
        console.log(data.data);
        setLoading(false);
        setBusinesses(data.data);
         
    }).catch(err => {
        setLoading(false);
        console.log(err);
    });
  }

  const onDeleteClick = (business) => {

    if(!window.confirm('Are you sure you want to delete this business?')){
      return 
    }
    console.log(`this is a business${business.id}`);
    
    axiosClient.delete(`/businesses/${business.id}`)
    .then(()=> {
      setNotification('Business is succesfully deleted')
      console.log('sucess on delete');
      getBusinesses()
      
    })
    
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!businesses) {
    return <div>No businesses found.</div>
  }

  // map through businesses and render them
//   return (
//     <div>
//       {businesses.map(business => (
//         <div key={business.id}>
//           <h2>{business.name}</h2>
//           <p>{business.description}</p>
//         </div>
//       ))}
//     </div>
//   )
return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Businesses</h1>
        <Link className="btn-add" to="/businesses/new">Add New Business</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Address</th>
              <th>Type</th>
              <th>Owner Name</th>
              <th>Founded Date</th>
              <th>Number of Employees</th>
              <th>Business Hours</th>
              <th>Services</th>
              <th>Products</th>
              <th>Logo</th>
              <th>Mission Statement</th>
              <th>Vision Statement</th>
              {/* <th>Partners</th> */}
              <th>Customer Support Contact</th>
              <th>Terms of Service</th>
              <th>Actions</th>
            </tr>
          </thead>
          {loading &&
            <tbody>
              <tr>
                <td colSpan="19" className="text-center">
                  Loading...
                </td>
              </tr>
            </tbody>
          }
          {!loading &&
            <tbody>
              {businesses.map(business => (
                <tr key={business.id}>
                  <td>{business.id}</td>
                  <td>{business.name}</td>
                  {/* <td>{business.description}</td> */}
                  <td>desc</td>
                  <td>{business.address}</td>
                  <td>{business.type}</td>
                  <td>{business.ownerName}</td>
                  <td>{business.foundedDate}</td>
                  <td>{business.numberOfEmployees}</td>
                  <td>{business.businessHours}</td>
                  <td>{business.services}</td>
                  <td>{business.products}</td>
                  <td><img src={business.logo} alt="Business Logo" style={{ maxWidth: '50px' }} /></td>
                  <td>{business.missionStatement}</td>
                  <td>{business.visionStatement}</td>
                  {/* <td>{business.partners.join(', ')}</td> */}
                  <td>{business.customerSupportContact}</td>
                  <td>{business.termsOfService}</td>
                  <td>
                    <Link className="btn-edit" to={'/businesses/' + business.id}>Edit</Link>
                    &nbsp;
                    <button className="btn-delete" onClick={(ev) => onDeleteClick(business)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          }
        </table>
      </div>
    </div>
  );

}
