import "./OurServices.css";
import chapeau from "../assets/chapeau.jpg";
import pot from "../assets/gros-plan-femme-peinture-pot-argile.jpg";
import CardComponent from "./Card/Card";
export default function OurServices() {
  const header1 = <img alt="Card" src={chapeau} />;
  const header2 = <img alt="Card" src={pot} />;
  const footer = "";
  return (
    <div className="our-services w-full mt-20">
      <h1 className="text-5xl text-grey-200">Our services</h1>
      <div className="card-container flex space-between mt-10 max-sm:flex max-sm:flex-col max-sm:space-between max-sm:justify-center">
        <CardComponent header={header1} footer={footer} />
        <CardComponent header={header2} footer={footer} />
      </div>
    </div>
  );
}
