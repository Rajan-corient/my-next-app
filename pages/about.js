import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque
        quas quis qui incidunt hic vel fuga voluptates? Voluptas libero ipsa
        omnis nulla eius in magnam atque incidunt deleniti vitae perspiciatis
        debitis corporis dignissimos, repellat molestias sapiente nemo sit alias
        eos. Possimus voluptatum blanditiis laborum.
      </p>
      <h2>Services Offered</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quas!
        Repellendus, sed cupiditate? Odit, praesentium eius, quod ad laborum
        eveniet sed illum similique sequi, natus aspernatur atque aut itaque
        dolorum.
      </p>
      <p>We offer following services</p>
      <ul>
        <li>Service1</li>
        <li>Service2</li>
        <li>Service3</li>
        <li>Service4</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quas!
        Repellendus, sed cupiditate? Odit, praesentium eius, quod ad laborum
        eveniet sed illum similique sequi, natus aspernatur atque aut itaque
        dolorum.
      </p>
    </div>
  );
};

export default About;
