import RegisterForm from "../RegisterForm";
import { Register } from "../RegisterStyle";
import { Link } from "react-router-dom";
import styles from "../../Style.module.css";

function Rform() {
  return (
    <div className={styles.container}>
      <Register>
        <div>
          <div>
            <a href="/">
              <img
                src="https://cdn.dribbble.com/users/5631996/screenshots/20519631/media/cc9ce7ccb1665d6226269aa8452b0ea8.jpg"
                alt=""
                height="30"
                width="30"
              />
            </a>
          </div>
          <h4>Welcome to Betterfund,</h4>
          <p>India’s largest crowdfunding site</p>
        </div>
        <div>
          <p>Sign up & manage fundraisers, donations & more</p>
          <RegisterForm />
          <div>
            <p>Already signed up with Betterfund?</p>
            <Link to="/Login">
              <button className={styles.main_button}>Login</button>
            </Link>
          </div>
        </div>
      </Register>
    </div>
  );
}

export default Rform;
