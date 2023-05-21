import React from 'react';
import FormInput from "../reusable/formInput";
import FormButton from "../reusable/formButton";
import FormHeader from "../reusable/formHeader";
import MedicationPage from './MedicationPage';

const App = () => {
  const medicationData = {
    Medication: [
      { name: 'Syphylls', data: '150 mg' },
      { name: 'Dolo', data: '500 mg' }
    ],
    Symptoms: [
      { name: 'Hepatitis B', data: 'Positive' },
      { name: 'Covid', data: 'Negative' }
    ],
    Problems: [
      { name: 'Headache', data: 'Frequent' },
      { name: 'Fever', data: 'High' }
    ],
    Vaccine: [
      { name: 'CoviShield', data: '2 Doses' },
      { name: 'Covaxin', data: '3 Doses' }
    ],
    Reports: [
      { name: 'Lab Test', data: 'Negative' },
      { name: 'X Ray', data: 'Pending' }
    ],
    Visits: [
      { name: 'Apollo', data: '4 days ago' },
      { name: 'Max', data: '2 months ago' }
    ]
  };

  return <MedicationPage data={medicationData} />;
};

export default App;
