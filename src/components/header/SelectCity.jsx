import React from 'react';

const SelectCity = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
      <div style={{ border: '1px solid #000', borderRadius: '10%', padding: 10 }}>Vadodara</div>
      <div style={{ border: '1px solid #000', borderRadius: '10%', padding: 10 }}>Ahmedabad</div>
      <div style={{ border: '1px solid #000', borderRadius: '10%', padding: 10 }}>Mumbai</div>
      <div style={{ border: '1px solid #000', borderRadius: '10%', padding: 10 }}>Pune</div>
    </div>
  );
}
 
export default SelectCity;