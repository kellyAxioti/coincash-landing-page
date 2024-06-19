import LogoIcon from "../icons/components/LogoIcon";
import FlexLayout from "../layouts/FlexLayout";

export default function DetailItems({
  title,
  text,
  hasLogo,
}: {
  title: string;
  text: string;
  hasLogo?: boolean;
}) {
  return (
    <div className="detail-items">
      <FlexLayout>
        <h3 className="header">
          {title}
          {hasLogo && (
            <div style={{ padding: "5px" }}>
              <LogoIcon />
            </div>
          )}
        </h3>
      </FlexLayout>
      <FlexLayout>
        <p className="paragraph">{text}</p>
      </FlexLayout>
    </div>
  );
}
