import { transactions } from "../constant/transactionData";
import AreaSurvalianceMap from "./AreaSurvalianceMap";



const TransactionsSection = () => {
  return (
    <section className="p-6 bg-gray-100 text-black">
      <div className="wrapper">
        <div className="mb-10">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold text-gray-800">
              RECENT TRANSACTIONS
            </h3>
            <div className="flex-1 border-t-4 border-black" />
          </div>
        </div>{" "}
        {/* TABLE */}
        <div className="border-2 border-black shadow-[6px_6px_0px_#000] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-900 text-white text-sm">
              <tr>
                <th className="p-4">DATE</th>
                <th className="p-4">TYPE</th>
                <th className="p-4">AMOUNT (#)</th>
                <th className="p-4">DESCRIPTION</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} className="border-t-2 border-black">
                  <td className="p-4 font-semibold">{tx.date}</td>

                  <td className="p-4">
                    <span
                      className={`text-xs font-bold px-2 py-1 border border-black ${
                        tx.type === "donation"
                          ? "bg-yellow-400"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {tx.type === "donation" ? "DONATION" : "EXPENSE"}
                    </span>
                  </td>

                  <td
                    className={`p-4 font-bold ${
                      tx.type === "expense" ? "text-red-600" : ""
                    }`}
                  >
                    {tx.amount}
                  </td>

                  <td className="p-4">{tx.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
        <div className="flex justify-end mt-4">
          <button className="text-sm font-bold underline">
            DOWNLOAD FULL AUDIT REPORT (PDF)
          </button>
        </div>
       <AreaSurvalianceMap/>
      </div>
    </section>
  );
};

export default TransactionsSection;
