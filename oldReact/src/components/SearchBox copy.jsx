export default function SearchBox() {



    const styles = {
      
        container: {
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          borderRadius: '15px', // Rounded corners
        },
        input: {
          marginRight: '10px',
          padding: '10px',
          borderRadius: '50px',
          border: '2px solid #ffd41d',
          color: '#fff',
          // backgroundColor: 'rgba(20, 130, 200, 0.3)', // Faded background color
          backgroundColor: '#156eba38',
        },
        searchInput: {
          flex: 1,
        },
        locationInput: {
          flex: 1,
        },
        button: {
          marginTop: '-15px',
          padding: '10px 20px',
          
          borderRadius: '50px',
          border: '2px solid #ffd41d',
          backgroundColor: '#156eba38',
          color: '#fff',
          cursor: 'pointer',
        },
      };
  return (

    <div style={styles.container}>
      <input className="animate__animated animate__fadeInUp"
        type="text" 
        placeholder="Search" 
        style={{ ...styles.input, ...styles.searchInput  , '::placeholder': {
            color: 'rgba(255, 255, 255, 1) !important' // White color with 70% opacity
          }}} 
      />
      <input className="animate__animated animate__fadeInUp"
        type="text" 
        placeholder="Location" 
        style={{ ...styles.input, ...styles.locationInput }} 
      />
      <button className="animate__animated animate__fadeInUp" style={styles.button}>Search</button>
    </div>
  );
}