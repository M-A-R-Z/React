// Layout.js
import React, { useEffect } from 'react';

function Layout({ children, bodyClass }) {
  useEffect(() => {
    // Add the specific class to body on mount
    document.body.classList.add(bodyClass);

    // Remove the class on unmount to avoid affecting other pages
    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [bodyClass]);

  return <>{children}</>;
}

export default Layout;
