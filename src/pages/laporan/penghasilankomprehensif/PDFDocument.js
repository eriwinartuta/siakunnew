import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PDFDocument = ({ dataSource }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const startY = 20;
    let y = startY;

    // Add content to the PDF document
    doc.setFontSize(14);

    dataSource.data.forEach((section) => {
      Object.keys(section).forEach((sectionName) => {
        const subSections = section[sectionName];

        // Add section title
        doc.setFont('helvetica', 'bold');
        doc.text(sectionName, 10, y += 10, null, null, 'left');
        doc.setFont('helvetica', 'normal');

        subSections.forEach((subSection) => {
          // Add table headers for Pendapatan
          doc.autoTable({
            head: [['Komponen', 'Sebelum', 'Setelah']],
            body: [], // Leave body empty for now, we'll add rows later
            startY: y + 5,
            theme: 'grid', // Use 'grid' theme for table borders
            styles: {
              cellPadding: 2,
              fontSize: 10,
              halign: 'left',
              valign: 'middle',
            },
          });

          // Add Pendapatan rows
          subSection["Pendapatan"].forEach((item) => {
            const rowData = [item.name, item.sebelum.toString(), item.setelah.toString()];
            doc.autoTable({
              startY: doc.autoTable.previous.finalY,
              head: [],
              body: [rowData],
              theme: 'grid', // Use 'grid' theme for table borders
              styles: {
                cellPadding: 2,
                fontSize: 10,
                halign: 'left',
                valign: 'middle',
              },
            });
          });

          // Add total for Pendapatan
          const totalPendapatan = calculateTotal(subSection["Pendapatan"]);
          const totalPendapatanRow = ['Total', totalPendapatan.sebelum.toString(), totalPendapatan.setelah.toString()];
          doc.autoTable({
            startY: doc.autoTable.previous.finalY,
            head: [],
            body: [totalPendapatanRow],
            theme: 'grid', // Use 'grid' theme for table borders
            styles: {
              cellPadding: 2,
              fontSize: 10,
              halign: 'left',
              valign: 'middle',
            },
          });

          // Add table headers for Beban
          doc.autoTable({
            head: [['Komponen', 'Sebelum', 'Setelah']],
            body: [], // Leave body empty for now, we'll add rows later
            startY: doc.autoTable.previous.finalY + 10,
            theme: 'grid', // Use 'grid' theme for table borders
            styles: {
              cellPadding: 2,
              fontSize: 10,
              halign: 'left',
              valign: 'middle',
            },
          });

          // Add Beban rows
          subSection["Beban"].forEach((item) => {
            const rowData = [item.name, item.sebelum.toString(), item.setelah.toString()];
            doc.autoTable({
              startY: doc.autoTable.previous.finalY,
              head: [],
              body: [rowData],
              theme: 'grid', // Use 'grid' theme for table borders
              styles: {
                cellPadding: 2,
                fontSize: 10,
                halign: 'left',
                valign: 'middle',
              },
            });
          });

          // Add total for Beban
          const totalBeban = calculateTotal(subSection["Beban"]);
          const totalBebanRow = ['Total', totalBeban.sebelum.toString(), totalBeban.setelah.toString()];
          doc.autoTable({
            startY: doc.autoTable.previous.finalY,
            head: [],
            body: [totalBebanRow],
            theme: 'grid', // Use 'grid' theme for table borders
            styles: {
              cellPadding: 2,
              fontSize: 10,
              halign: 'left',
              valign: 'middle',
            },
          });

          // Add spacing between sections
          y = doc.autoTable.previous.finalY + 20;
        });
      });
    });

    // Save the PDF as "your-table.pdf"
    doc.save('your-table.pdf');
  };

  function calculateTotal(data) {
    let totalSebelum = 0;
    let totalSetelah = 0;

    data.forEach((item) => {
      totalSebelum += parseInt(item.sebelum, 10);
      totalSetelah += parseInt(item.setelah, 10);
    });

    return {
      sebelum: totalSebelum,
      setelah: totalSetelah,
    };
  }

  return (
    <div>
      <h1>Your Table</h1>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default PDFDocument;
