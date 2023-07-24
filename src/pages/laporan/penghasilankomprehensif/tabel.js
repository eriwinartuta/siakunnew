// import React from 'react';

// const DataTable = ({ data }) => {
//   const calculateTotal = (categoryData, key) => {
//     let total = 0;
//     categoryData.forEach((item) => {
//       total += parseInt(item[key], 10);
//     });
//     return total;
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th colSpan="2">Tanpa Pembatasan dari Pemberi Sumber Daya</th>
//           <th>Sebelum</th>
//           <th>Setelah</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Object.keys(data).map((category, index) => (
//           <React.Fragment key={index}>
//             <tr>
//               <td colSpan="4">{category}</td>
//             </tr>
//             {data[category].map((item, subIndex) => (
//               <tr key={subIndex}>
//                 <td></td>
//                 <td>{item.name}</td>
//                 <td>{item.sebelum}</td>
//                 <td>{item.setelah}</td>
//               </tr>
//             ))}
//             <tr>
//               <td></td>
//               <td>Total</td>
//               <td>{calculateTotal(data[category], 'sebelum')}</td>
//               <td>{calculateTotal(data[category], 'setelah')}</td>
//             </tr>
//           </React.Fragment>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DataTable;
import React from 'react';

const DataTable = ({ dataSource }) => {
    console.log("DataSource Received:", dataSource);
  if (!dataSource || !dataSource.data || dataSource.data.length === 0) {
    return <div>No data available.</div>;
  }

  const calculateTotal = (categoryData, key) => {
    let total = 0;
    categoryData.forEach((item) => {
      total += parseInt(item[key], 10);
    });
    return total;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Komponen</th>
          <th>Tahun Sebelum</th>
          <th>Tahun Setelah</th>
        </tr>
      </thead>
      <tbody>
        {dataSource.data.map((section, index) => {
          return Object.keys(section).map((sectionName, subIndex) => {
            const subSections = section[sectionName];
            return (
              <React.Fragment key={subIndex}>
                <tr>
                  <td colSpan="3" className="bold-text">{sectionName}</td>
                </tr>
                {subSections.map((subSection, subSectionIndex) => {
                  return (
                    <React.Fragment key={subSectionIndex}>
                      <tr>
                        <td className="bold-text">Pendapatan</td>
                        <td></td>
                        <td></td>
                      </tr>
                      {subSection["Pendapatan"].map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td>    {item.name}</td>
                          <td>{item.sebelum}</td>
                          <td>{item.setelah}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="bold-text">Total</td>
                        <td>
                          {calculateTotal(subSection["Pendapatan"], "sebelum")}
                        </td>
                        <td>
                          {calculateTotal(subSection["Pendapatan"], "setelah")}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3" className="bold-text">Beban</td>
                      </tr>
                      {subSection["Beban"].map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td>    {item.name}</td>
                          <td>{item.sebelum}</td>
                          <td>{item.setelah}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="bold-text">Total</td>
                        <td>{calculateTotal(subSection["Beban"], "sebelum")}</td>
                        <td>{calculateTotal(subSection["Beban"], "setelah")}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            );
          });
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
