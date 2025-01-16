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
          <Button variant="default" />
        </FirmFactCard>

        <FirmFactCard>
          <Button variant="icon" />
        </FirmFactCard>

        <FirmFactCard secondRow={true}>
          <Button variant="icon" />
        </FirmFactCard>

        <FirmFactCard secondRow={true} disabled>
          <Button variant="icon" disabled={true} />
        </FirmFactCard>

        <FirmFactCard secondRow={true}>
          <Button variant="icon" />
        </FirmFactCard>
      </div>
    </div>
  );
};

export default FirmFacts;
