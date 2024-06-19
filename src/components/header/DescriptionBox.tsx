import DetailsLayout from "../../layouts/DetailsLayout";
import FlexLayout from "../../layouts/FlexLayout";
import Button from "../Button";
import DetailItems from "../DetailItems";

export default function DescriptionBox() {
  return (
    <div style={{ padding: "100px 14px" }}>
      <DetailsLayout>
        <DetailItems
          title={"You can buy anything with"}
          text={
            "The easiest way to use your cryptocurrencies for everyday purchases."
          }
          hasLogo={true}
        />
        <FlexLayout>
          <div style={{ padding: "10px" }}>
            <Button label={"Download now for free"} />
          </div>
        </FlexLayout>
      </DetailsLayout>
    </div>
  );
}
