import AirplaneIcon from "../../icons/components/AirplaneIcon";
import BuyIcon from "../../icons/components/BuyIcon";
import PageIcon from "../../icons/components/PageIcon";
import DetailsLayout from "../../layouts/DetailsLayout";

import MainPageLayout from "../../layouts/MainPageLayout";
import OverflowLayout from "../../layouts/OverflowLayout";
import DetailItems from "../DetailItems";
import IconLinkBox from "../IconLinkBox";
import { ReactComponent as Image1 } from "../../assets/unsplash_tE6th1h6Bfk.svg";
import { ReactComponent as Image2 } from "../../assets/unsplash_Xn5FbEM9564.svg";
import FlexLayout from "../../layouts/FlexLayout";

export default function MainBox() {
  return (
    <MainPageLayout>
      <DetailItems
        title={"Buy anything you ever imagine"}
        text={
          "The easiest way to use your cryptocurrencies for everyday purchases."
        }
      />
      <OverflowLayout>
        <IconLinkBox
          icon={<AirplaneIcon />}
          text={
            <p>
              You can <a href="#">book</a> tickets
            </p>
          }
        />
        <IconLinkBox
          icon={<BuyIcon />}
          text={
            <p>
              You can <a href="#">buy</a> groceries
            </p>
          }
        />
        <IconLinkBox
          icon={<PageIcon />}
          text={
            <p>
              You can <a href="#">pay</a> your bills
            </p>
          }
        />
      </OverflowLayout>
      <FlexLayout>
        <div className="responsive-flex">
          <Image1 />

          <div className="responsive-text">
            <DetailItems
              title={"Shop anywhere"}
              text={
                "The easiest way to use your cryptocurrencies for everyday purchases."
              }
            />
          </div>
        </div>
      </FlexLayout>
      <FlexLayout>
        <div className="responsive-reversed">
          <div className="responsive-text">
            <DetailItems
              title={"Zero fees"}
              text={
                "The easiest way to use your cryptocurrencies for everyday purchases."
              }
            />
          </div>
          <Image2 />
        </div>
      </FlexLayout>
    </MainPageLayout>
  );
}
