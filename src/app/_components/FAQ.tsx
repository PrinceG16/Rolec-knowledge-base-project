import {Accordion} from '@rolec-services/rolec-ui';

export function FAQ() {
  return (
    
              <section className="max-w-[1100px] mx-auto bg-white text-gray-900 py-10 px-6">

                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <br></br>

                    <Accordion
                    collapsible
                    items={[
                    {
                      content: {
                        children: 'Rolec EV chargers provide a range of charging solutions, including Mode 3 AC chargers suitable for domestic and commercial use. Typical charging times depend on the charger power and vehicle capacity, but a Rolec 7kW charger can fully charge most EVs overnight (6-8 hours), while faster 22kW models reduce charging time significantly.'
                      },
                      item: {
                        value: 'charging-time'
                      },
                      trigger: {
                        children: 'How long does it take to fully charge an electric vehicle with a Rolec charger?'
                      }
                    },
                    {
                      content: {
                        children: 'Rolec chargers use industry-standard connectors like Type 2 sockets that are compatible with most European EVs. Their chargers support various modes and protocols, ensuring compatibility with the vast majority of electric vehicles on the market.'
                      },
                      item: {
                        value: 'compatibility'
                      },
                      trigger: {
                        children: 'Are Rolec EV chargers compatible with all electric vehicles?'
                      }
                    },
                    {
                      content: {
                        children: 'Yes, Rolec offers home EV chargers that are easy to install and come with all necessary safety features. Their robust enclosures are weatherproof (IP rated), and installation should be done by a qualified electrician following local regulations.'
                      },
                      item: {
                        value: 'home-installation'
                      },
                      trigger: {
                        children: 'Can I install a Rolec EV charger at home?'
                      }
                    },
                    {
                      content: {
                        children: 'Rolec chargers come with multiple safety features such as RCD Type A protection with DC fault detection, overcurrent protection, and thermal monitoring. These ensure safe charging, prevent electrical faults, and protect both the vehicle and user.'
                      },
                      item: {
                        value: 'safety-features'
                      },
                      trigger: {
                        children: 'What safety features do Rolec EV chargers have?'
                      }
                    },
                    {
                      content: {
                        children: 'To find public Rolec charging stations, you can use apps like Zap-Map or the Rolec website which provide locations of compatible public chargers. Rolec also partners with various charging networks to expand availability.'
                      },
                      item: {
                        value: 'public-charging'
                      },
                      trigger: {
                        children: 'How do I find public Rolec EV charging stations?'
                      }
                    },
                    {
                      content: {
                        children: 'Rolec chargers are designed with durability in mind, featuring tough ABS or polycarbonate enclosures that withstand harsh weather, UV exposure, and vandalism. This makes them ideal for outdoor residential or commercial environments.'
                      },
                      item: {
                        value: 'durability'
                      },
                      trigger: {
                        children: 'Are Rolec EV chargers suitable for outdoor use?'
                      }
                    },
                    {
                      content: {
                        children: 'Rolec offers smart charging options with features like load balancing, app connectivity, and RFID access control on selected models, giving you control over charging sessions and energy management.'
                      },
                      item: {
                        value: 'smart-features'
                      },
                      trigger: {
                        children: 'Do Rolec EV chargers support smart charging features?'
                      }
                    }
                  ]
                  }
                    type="single"
                  />

              </section>



  );
}


