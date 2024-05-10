import FundForm from "../FundForm";
import { Funds } from "../FundStyle";
import styles from "../../Style.module.css";
import {Link} from 'react-router-dom'

function Fform({handleFirst}) {
  return (
    <div className={styles.fund_container}>
      <Funds>
        <div>
          <div>
            <Link to = '/'>
              <img
                src="https://cdn.dribbble.com/users/5631996/screenshots/20519631/media/cc9ce7ccb1665d6226269aa8452b0ea8.jpg"
                alt=""
                height="40"
                width="40"
              />
            </Link>
          </div>
          <h4>Welcome to Betterfund,</h4>
          <p>India’s largest crowdfunding site</p>
        </div>
        <div>
          <p>Start a Fundraiser now!</p>
          <FundForm handleFirst= {(i)=>handleFirst(i)} />
        </div>
      </Funds>
    </div>
  );
}

export default Fform;
