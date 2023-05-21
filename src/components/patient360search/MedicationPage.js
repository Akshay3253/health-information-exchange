import React from 'react';

const MedicationPage = ({ data }) => {
  const medicationTypes = Object.keys(data);

  // Divide medication types into groups of three
  const groupedTypes = [];
  for (let i = 0; i < medicationTypes.length; i += 3) {
    groupedTypes.push(medicationTypes.slice(i, i + 3));
  }

  return (
    <div className="medication-page">
      {groupedTypes.map((group, index) => (
        <div key={index} className="table-container">
          {group.map((type) => (
            <div key={type} className="medication-container">
              <h2 className="medication-header">{type}</h2>
              <table className="medication-table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {data[type].map((medication) => (
                    <tr key={medication.name}>
                      <td>{medication.name}</td>
                      <td>{medication.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MedicationPage;
