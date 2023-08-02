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
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Buttons } from '../../../component';
import { FilePdfOutlined } from "@ant-design/icons";

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

  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    const title0 = "UNIVERSITAS TERBUKA";
    const title1 = "BIRO KEUANGAN, UMUM DAN KERJASAMA";
    const title2 = "Jl. Cabe Raya, Pondok Cabe, Pamulang, Tangerang Selatan 15437";
    const title3 = "Telepon: 021-7490941 ext. 1301, Faksimile: 021-7490147";
    const title4 = "Email: kabauk@ecampus.ut.ac.id, Laman: www.ut.ac.id";

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const textWidth0 = doc.getStringUnitWidth(title0) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textX0 = (pageWidth - textWidth0) / 2;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title0, textX0, 25);
    
    const textWidth1 = doc.getStringUnitWidth(title1) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textX1 = (pageWidth - textWidth1) / 2;
    doc.text(title1, textX1, 32);
    
    doc.setFont('helvetica', 'normal');

    const textWidth2 = doc.getStringUnitWidth(title2) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textX2 = (pageWidth - textWidth2) / 2;
    doc.text(title2, textX2, 39);

    const textWidth3 = doc.getStringUnitWidth(title3) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textX3 = (pageWidth - textWidth3) / 2;
    doc.text(title3, textX3, 46);

    const textWidth4 = doc.getStringUnitWidth(title4) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textX4 = (pageWidth - textWidth4) / 2;
    doc.text(title4, textX4, 53);

    const lineY = 60; // Set the Y-coordinate for the horizontal line
    doc.line(20, lineY, pageWidth - 20, lineY); // Reduce the margins before and after the line

    let yOffset = 70;
    const tableData = [];

    dataSource.data.forEach((section) => {
      Object.keys(section).forEach((sectionName) => {
        const subSections = section[sectionName];

        tableData.push([{ content: sectionName, colSpan: 3, styles: { fontStyle: 'bold' } }]);
        tableData.push(['', 'Sebelum', 'Sesudah']);

        subSections.forEach((subSection) => {
          const pendapatanRows = subSection['Pendapatan'].map((item) => [
            item.name,
            item.sebelum.toString(),
            item.setelah.toString(),
          ]);

          const bebanRows = subSection['Beban'].map((item) => [
            item.name,
            item.sebelum.toString(),
            item.setelah.toString(),
          ]);

          tableData.push(
            [{ content: 'Pendapatan', colSpan: 3, styles: { fontStyle: 'bold' } }],
            ...pendapatanRows,
            [{ content: 'Total Pendapatan', colSpan: 1, styles: { fontStyle: 'bold' } }, '', calculateTotal(subSection['Pendapatan'], 'sebelum').toString(), calculateTotal(subSection['Pendapatan'], 'setelah').toString()],
            [{ content: 'Beban', colSpan: 3, styles: { fontStyle: 'bold' } }],
            ...bebanRows
          );

          const totalBeban = calculateTotal(subSection['Beban'], 'sebelum');
          const totalSetelahBeban = calculateTotal(subSection['Beban'], 'setelah');
          tableData.push([{ content: 'Total Beban', colSpan: 1, styles: { fontStyle: 'bold' } }, '', totalBeban.toString(), totalSetelahBeban.toString()]);

          tableData.push(['', '', '', '']);
        });
      });
    });

    doc.autoTable({
      headStyles: { fillColor: '#f5f5f5' },
      body: tableData,
      startY: yOffset,
    });

    doc.save('data_table.pdf');
  };

  return (
    <div>
      <div className='flex justify-end m-2'>
        <Buttons
          labelButton={"Download Laporan Penghasilan Komprehensif"}
          borderColor={"maroon"}
          backgroundColor={"maroon"}
          borderRadius={10}
          icon={<FilePdfOutlined/>}
          color={"white"}
          marginLeft={5}
          onClick={handleGeneratePDF}
          />
      </div>
      
      {/* <button onClick={handleGeneratePDF}>PDF</button> */}
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
    
    </div>
  );
};

export default DataTable;
