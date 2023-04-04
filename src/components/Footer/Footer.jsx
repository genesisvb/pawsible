import "./Footer.scss";
import { ReactComponent as HomeIcon } from "../../assets/images/icons/home.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/images/icons/schedule.svg";
import { ReactComponent as ChatIcon } from "../../assets/images/icons/chat.svg";
import { ReactComponent as ProfileIc } from "../../assets/images/icons/profile.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <HomeIcon className="footer__icon footer__icon--active" />
        <ScheduleIcon className="footer__icon" />
        <ChatIcon className="footer__icon" />
        <ProfileIc className="footer__icon" />
      </div>
    </footer>
  );
}

export default Footer;
