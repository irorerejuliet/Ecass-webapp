
import { navItems } from '../constant/navItems';

const Footer = () => {
  return (
    <div>
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

export default Footer
