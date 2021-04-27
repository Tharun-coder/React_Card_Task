import "./App.css";
import Card from "./card";

function App() {
  let cards = [
    {
      name: "FREE",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      projects: "Unlimited Public Projects",
      community: "Community Access",
      private: {
        name: "Unlimited Private Projects",
        status: false,
      },
      support: {
        name: "Dedicated Phone Support",
        status: false,
      },
      domain: {
        name: "Free Subdomain",
        status: false,
      },
      reports: {
        name: "Monthly Status Reports",
        status: false,
      },
    },
    {
      name: "PLUS",
      price: "$9",
      user: "5 Users",
      storage: "50GB Storage",
      projects: "Unlimited Public Projects",
      community: "Community Access",
      private: {
        name: "Unlimited Private Projects",
        status: true,
      },
      support: {
        name: "Dedicated Phone Support",
        status: true,
      },
      domain: {
        name: "Free Subdomain",
        status: true,
      },
      reports: {
        name: "Monthly Status Reports",
        status: false,
      },
    },
    {
      name: "PRO",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      projects: "Unlimited Public Projects",
      community: "Community Access",
      private: {
        name: "Unlimited Private Projects",
        status: true,
      },
      support: {
        name: "Dedicated Phone Support",
        status: true,
      },
      domain: {
        name: "Unlimited Free Subdomains",
        status: true,
      },
      reports: {
        name: "Monthly Status Reports",
        status: true,
      },
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => {
          return (
            <div className="col-4">
              <Card card={card}></Card>;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
