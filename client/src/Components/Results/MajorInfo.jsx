import React from "react";

function TableComponent({ data }) {
  return (
    <div className="">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sıra
            </th>

            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Major
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Major Category
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Median Income (US$)
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Full Time Employment Rate (%)
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Unemployment Rate (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((major, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {major.Major}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {major["Major Category"]}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {major["Median Income (US$)"].toFixed(1)}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {major["Full Time Employment Rate (%)"].toFixed(1)}
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {major["Unemployment Rate (%)"].toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
