import PropTypes from "prop-types";
export default function CardPerso({
  title,
  section,
  mission,
  content,
  isForArtisant,
  imageurl,
}) {
  return (
    <div className="card-perso m-5 w-10/12 h-full flex justify-center p-6 items-stretch">
      {isForArtisant ? (
        <div className="image-container rounded-xl overflow-hidden ">
          <img
            src={imageurl}
            alt="chapeau"
            className="object-cover"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      ) : (
        <div className="header-content w-2/4 bg-gray-50 p-6">
          <h3 className="text-bold text-gray-900/90"> {title}</h3>
          <h2 className="py-8 text-gray-500">{section}</h2>
          <h1 className="py-2 text-bold text-gray-700">{mission}</h1>
        </div>
      )}
      <div className="content w-2/4 bg-gray-50 p-6 text-gray-700">
        <p className="tracking-wide leading-relaxed text-clip">{content}</p>
      </div>
    </div>
  );
}

CardPerso.propTypes = {
  section: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  mission: PropTypes.string,
  isForArtisant: PropTypes.bool,
  imageurl: PropTypes.string,
};
