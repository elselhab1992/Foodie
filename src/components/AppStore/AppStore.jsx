import img from "../../assets/mobile_bike.gif";
import apple from "../../assets/app_store.png";
import android from "../../assets/play_store.png";
import { Section, Heading } from "./AppStoreStyles";

const AppStore = () => {
  return (
    <Section>
      <div>
        <Heading>Foodly is Available for Android and IOS</Heading>
        <div>
          <img src={apple} alt="app store" width={180} />
          <img src={android} alt="play store" width={180} />
        </div>
      </div>
      <div>
        <img src={img} alt="bike" width={300} />
      </div>
    </Section>
  );
};

export default AppStore;
