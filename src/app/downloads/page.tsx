// pages/downloads.js
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const downloadsPath = path.join(process.cwd(), "public/downloads");
  const files = fs.readdirSync(downloadsPath); // Read the files in the folder

  return {
    props: {
      files, // Pass the file names as props
    },
  };
}

const DownloadsPage = ({ files }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Download Section</h1>
      <p className="mb-4 text-gray-600">
        Below is the list of available files for download:
      </p>
      <ul className="space-y-4">
        {files.map((file, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">{file}</span>
              <a
                href={`/downloads/${file}`}
                download
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadsPage;
