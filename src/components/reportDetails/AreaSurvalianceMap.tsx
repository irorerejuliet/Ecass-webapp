
import { dashboardCards } from '../constant/dashboardCards';
import { navItems } from '../constant/navItems';

const AreaSurvalianceMap = () => {
  return (
    <div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {dashboardCards.map((card, index) => {
          return (
            <div key={index} className={card.className}>
              
              {card.type === "map" && (
                <>
                  <card.icon size={40} />
                  <p className="mt-4 font-bold">{card.title}</p>
                  <span className="text-sm text-gray-600">{card.subtitle}</span>
                </>
              )}

            
              {card.type === "metric" && (
                <>
                  <h2 className="text-4xl font-extrabold">{card.value}</h2>
                  <p className="text-sm mt-2">{card.title}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
     
      <div className="mt-10 border-t-2 border-black">
        <div className="grid grid-cols-4 text-center">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`py-4 flex flex-col items-center gap-1
                ${item.active ? "bg-primary border-x-2 border-black" : ""}
              `}
              >
                <Icon size={22} />
                <span className={`text-xs ${item.active ? "font-bold" : ""}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AreaSurvalianceMap
