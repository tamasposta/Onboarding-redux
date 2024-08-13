import YourName from "../components/YourName/YourName";
import YourEmail from "../components/YourEmail/YourEmail";
import YourHobbies from "../components/YourHobbies/YourHobbies";
import YourBirthday from "../components/YourBirthday/YourBirthday";
import { useState } from "react";

export default function ProfileCreation() {
  const [currentComponent, setCurrentComponent] = useState<string>("yourName");

  const renderComponent = () => {
    switch (currentComponent) {
      case "yourName":
        return <YourName setCurrentComponent={setCurrentComponent} />;
      case "yourEmail":
        return <YourEmail setCurrentComponent={setCurrentComponent} />;
      case "yourHobbies":
        return <YourHobbies setCurrentComponent={setCurrentComponent} />;
      case "yourBirthday":
        return <YourBirthday />;
      default:
        return <YourName setCurrentComponent={setCurrentComponent} />;
    }
  };

  return <>{renderComponent()}</>;
}
