import PropTypes from "prop-types";
export default function CardPerso({ title, section, mission, content }) {
  return (
    <div className="card-perso m-5 w-10/12 h-full flex p-6 items-stretch">
      <div className="header-content w-2/4 bg-gray-50 p-6">
        <h3 className="text-bold text-gray-900/90 "> {title}Our mission 2</h3>
        <h2 className="py-8 text-gray-500">{section}#PILLAR 2</h2>
        <h1 className="py-2 text-bold text-gray-700">
          {mission}
          My mission in the 2nd position
        </h1>
      </div>
      <div className="content w-2/4 bg-gray-50 p-6 text-gray-700">
        <p className="tracking-wide leading-relaxed text-clip">
          {content}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint iste et
          excepturi, quidem dolorum doloremque iure quod itaque. Eum ullam
          veritatis earum inventore cumque vero, numquam rem quaerat facilis
          recusandae. Blanditiis omnis eos recusandae id soluta eveniet, dolores
          saepe, alias reprehenderit laboriosam dolore quam, ex obcaecati ullam
          maxime aperiam nihil dicta fuga assumenda mollitia quisquam libero
          itaque possimus. Fugiat, at?laboriosam dolore quam, ex obcaecati ullam
          maxime aperiam nihil dicta fuga assumenda mollitia quisquam libero
          itaque possimus. Fugiat, at?
        </p>
      </div>
    </div>
  );
}

CardPerso.propTypes = {
  section: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  mission: PropTypes.string,
};
