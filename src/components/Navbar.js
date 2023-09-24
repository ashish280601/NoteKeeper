import styles from "../styling/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        src="data:image/png;base64,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"
        alt="note-keeper-icon"
        width={40}
        height={50}
        className={styles.img}
      />
      <p className={styles.heading}>Note Keeper</p>
    </div>
  );
};

export default Navbar;
