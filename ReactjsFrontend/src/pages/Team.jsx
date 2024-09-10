import TeamDetails from "../data/TeamDetails";

console.log("TeamDetails: ", TeamDetails);

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Our Team</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Meet the Experts Behind the AI-Enhanced Career Guidance System
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TeamDetails.map((details) => (
              <div
                key={details.name}
                className="bg-gray-200 p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <img
                    src={details.image}
                    className="w-32 h-32 rounded-full"
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {details.name}
                </h3>
                <div>
                  <span className="text-gray-900">Position: </span>
                  <span className="text-gray-700">{details.position}</span>
                </div>
                <div>
                  <span className="text-gray-900">LinkedIn: </span>

                  <span className="text-gray-700">
                    <a href={details.linkedin} target="_blank">
                      {details.linkedin}
                    </a>
                  </span>
                </div>
                <div>
                  <span className="text-gray-900">Description: </span>

                  <span className="text-gray-700">{details.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
