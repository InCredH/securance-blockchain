import React from 'react';
function Footer() {
    return (
      <footer style={{ textAlign: "center", backgroundColor: "red", color: "white", paddingTop: "5px", paddingBottom: "10px" }}>
        &copy; {new Date().getFullYear()} Cyber Attack Insurance. All rights reserved.
      </footer>
    );
  }
  
  
export default Footer;