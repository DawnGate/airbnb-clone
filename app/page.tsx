import styles from "./HomePage.module.scss";

import Button from "components/Button";

const Page = () => {
  return (
    <h1
      style={{
        color: styles.primaryColor,
      }}
    >
      Hello, Next.js!
      <Button variant="primary" label="Button" />
    </h1>
  );
};

export default Page;
