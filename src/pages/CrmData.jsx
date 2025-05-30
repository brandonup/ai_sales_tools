import Section from '../components/Section';

const CrmData = () => {
  return (
    <Section title="CRM Data">
      <p>
        Click the link below to download the CRM data file.
      </p>
      <a href="/cadence_sales_data.csv" download="cadence_sales_data.csv">
        Download cadence_sales_data.csv
      </a>
    </Section>
  );
};

export default CrmData;
