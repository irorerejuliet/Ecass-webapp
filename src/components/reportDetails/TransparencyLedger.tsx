

import { ledgerExpensesData } from "../constant/ledgerExpensesData";
import Image from "next/image";

const TransparencyLedger = () => {
  return (
    <section className="bg-gray-100 p-6 md:p-10 text-black ">
      <div className="wrapper">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-7xl md:text-5xl font-bold w-[491px] leading-tight">
              TRANSPARENCY  LEDGER
            </h1>

            <p className="mt-4 text-xl font-bold max-w-xl border-l-4 border-yellow-500 pl-4">
              Real-time financial accountability for the Ekpoma Sector 4
              security operations. Every Naira tracked. Every patrol logged.
            </p>
          </div>

          {/* CTA */}
          <button className="bg-primary hover:bg-yellow-500 transition px-6 py-3 font-bold text-black shadow-[4px_4px_0px_#000] border-2 border-black flex items-center gap-2">
            DONATE NOW
            <span>💳</span>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-300 my-8" />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ledgerExpensesData.map((item, index) => (
            <div
              key={index}
              className={`border-2 border-black ${item.bg} shadow-[4px_4px_0px_#000] p-5`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className={`text-xs font-bold px-2 py-1 ${item.textBg}`}>
                  {item.label}
                </span>
                <Image src={item.image} alt={item.label} width={32} height={24}/>
                
              </div>

              <p className="text-lg font-bold">{item.title}</p>
              <h2 className="text-4xl font-bold mt-1">{item.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencyLedger;
