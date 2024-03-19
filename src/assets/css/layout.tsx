// import React from 'react';
// import Navbar from './Navbar'; // Import the Navbar component.

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <>
//       <Navbar /> {/* The Navbar will always be rendered at the top */}
//       <main>{children}</main> {/* This is where the page-specific content will go */}
//     </>
//   );
// };

// export default Layout;



// An example usage of this layout.tsx container is shown below as HomePage.tsx

// HomePage.tsx
// import React from 'react';
// import Layout from './Layout'; // Import the Layout component

// const HomePage = () => {
//   return (
//     <Layout>
//       {/* Everything here will be passed as children to the Layout */}
//       <h1>Welcome to the Home Page</h1>
//       <p>This is some introductory text on the home page.</p>
//       {/* More content can follow */}
//     </Layout>
//   );
// };

// export default HomePage;