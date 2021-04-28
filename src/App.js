import "./App.css";
import Card from "./card";

function App() {
  let cards = [
    {
      name: "FREE",
      price: "$0",
      offers: [
        {
          name: "Single User",
          isEnabled: true,
        },
        {
          name: "5GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: false,
        },
        {
          name: "Free Subdomain",
          isEnabled: false,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      name: "PLUS",
      price: "$9",
      offers: [
        {
          name: "5 Users",
          isEnabled: true,
        },
        {
          name: "50GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          name: "Free Subdomain",
          isEnabled: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      name: "PRO",
      price: "$49",
      offers: [
        {
          name: "Unlimited Users",
          isEnabled: true,
        },
        {
          name: "150GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          name: "Unlimited Free Subdomains",
          isEnabled: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true,
        },
      ],
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
