import "./AboutUs.css";
import CardPerso from "./Card/CardPerso";
export default function AboutUs() {
  return (
    <div className="about-us w-full mt-20">
      <h1 className="text-5xl text-grey-200">About us</h1>
      <div className="about-us-intro p-8">
        <p className="text-black/50">
          Tamalà does not put you first.{" "}
          <strong className="text-bold text-black-800">
            Tamalà puts the artisans first, so they can better serve you and the
            environment
          </strong>
          . In a world where KPIs are focused on speed-to-market and
          bottom-line, Tamalà provides space for artisanship to shine. We are
          slamming on the production brakes. Shifting focus from quantity back
          to quality and individuality. Artisanship is about humanity first and
          foremost.{" "}
          <strong className="text-bold">
            {" "}
            KPIs are focused around connection and creativity
          </strong>
          . A world where production is not based on demand, but rather the
          availability of resources and talent.
        </p>
      </div>
      <div className="about-us-content">
        <div className="item-about-us flex px-4 py-4">
          <div className="header-content bg-gray-50 py-4 px-4">
            <h3 className="text-bold text-gray-900/90 ">Our mission 1</h3>
            <h2 className="py-8 text-gray-500">#PILLAR 1</h2>
            <h1 className="py-2 text-bold text-gray-700 font-medium">
              Valorize the artisanal
            </h1>
          </div>
          <div className="content bg-gray-50 px-4 py-4 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              iste et excepturi, quidem dolorum doloremque iure quod itaque. Eum
              ullam veritatis earum inventore cumque vero, numquam rem quaerat
              facilis recusandae. Blanditiis omnis eos recusandae id soluta
              eveniet, dolores saepe, alias reprehenderit laboriosam dolore
              quam, ex obcaecati ullam maxime aperiam nihil dicta fuga assumenda
              mollitia quisquam libero itaque possimus. Fugiat, at?
            </p>
          </div>
        </div>
        <CardPerso />
      </div>
    </div>
  );
}
