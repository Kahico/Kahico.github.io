var klaroConfig = {
    translations: {
      zz: {
        googleAnalytics: {
          title: "Google Analytics",
          description: "Service d'analyse d'audience du site Web.",
        },
        purposes: {
          analytics: "Analytics"
        }
      }
    },
    services: [
        {
            name: "googleAnalytics",
            default: true,
            purposes: ["analytics"]
        }
    ],
  };
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8Y2MNS08G7');  