import UserInputGroup from "./UserInputGroup";

const CONSTANTS = {
  InitialInvestment: "Initial Investment",
  AnnualInvestment: "Annual Investment",
  ExpectedReturn: "Expected Return",
  Duration: "Duration",
};

export default function UserInput({ onChange, input }) {
  function handleValueChange(inputName, value) {
    onChange(inputName, value);
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInputGroup
          label={CONSTANTS.InitialInvestment}
          onValueChange={handleValueChange}
          value={input.initialInvestment}
          inputName={"initialInvestment"}
        />
        <UserInputGroup
          label={CONSTANTS.AnnualInvestment}
          onValueChange={handleValueChange}
          value={input.annualInvestment}
          inputName={"annualInvestment"}
        />
      </div>
      <div className="input-group">
        <UserInputGroup
          label={CONSTANTS.ExpectedReturn}
          onValueChange={handleValueChange}
          value={input.expectedReturn}
          inputName={"expectedReturn"}
        />
        <UserInputGroup
          label={CONSTANTS.Duration}
          onValueChange={handleValueChange}
          value={input.duration}
          inputName={"duration"}
        />
      </div>
    </section>
  );
}
