// Components
import Button from "../components/Button";
import FirmFactCard from "../components/FirmFactCard";

// Styles
import "./FirmFacts.scss";

const FirmFacts = () => {
  return (
    <div className="firm-facts">
      <h1>Firm Facts</h1>
      <hr></hr>

      <div className="firm-facts__grid">
        <FirmFactCard>
          <Button variant="icon" />
        </FirmFactCard>

        <FirmFactCard>
          <Button variant="icon" />
        </FirmFactCard>

        <FirmFactCard oneLiner={true}>
          <Button />
        </FirmFactCard>

        <FirmFactCard>
          <Button variant="icon" />
        </FirmFactCard>

        <FirmFactCard variant="border">
          <Button variant="icon" />
        </FirmFactCard>

        <FirmFactCard variant="border" disabled>
          <Button variant="icon" disabled />
        </FirmFactCard>

        <FirmFactCard variant="border">
          <Button variant="icon" />
        </FirmFactCard>
      </div>
    </div>
  );
};

export default FirmFacts;
