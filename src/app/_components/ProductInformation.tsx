import Image from "next/image";

interface Product {
  title: string;
  imageUrl: string;
  description: string;
  downloads?: {
    label: string;
    icon: string;
  }[];
  specifications?: {
    icon: string;
    label: string;
    value: string;
  }[];
}

export default function ProductInformation({ product }: { product: Product }) {
  return (
    <>
      {/* desktop */}
      <section className="bg-clear mx-auto hidden max-w-[1100px] px-6 py-10 text-gray-900 sm:!block">
        <div className="flex justify-between gap-10 px-6">
          <div className="flex-col gap-8 md:w-1/2">
            <Image
              src={
                product.imageUrl.startsWith("/")
                  ? product.imageUrl
                  : `${product.imageUrl}`
              }
              alt="EV Charger"
              width={300}
              height={400}
              className="object-contain"
            />

            {product.downloads && (
              <div>
                <h2 className="mb-4 text-2xl font-semibold">Downloads</h2>
                <ul className="space-y-2 text-gray-700">
                  {product.downloads.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <img
                        src={item.icon}
                        alt={`${item.label} icon`}
                        className="h-5 w-5"
                      />
                      <span className="text-black">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 md:w-1/2">
            {product.specifications && (
              <>
                <h2 className="text-2xl font-semibold">Specification</h2>
                {product.specifications.map((spec, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2">
                      <img
                        src={spec.icon}
                        alt={`${spec.label} icon`}
                        className="h-5 w-5"
                      />
                      <h3 className="font-semibold">{spec.label}</h3>
                    </div>
                    <p className="ml-[1.78rem] whitespace-pre-line">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* mobile */}

      <section className="bg-clear flex flex-col items-center gap-6 text-gray-900 sm:!hidden">
        <Image
          src={
            product.imageUrl.startsWith("/")
              ? product.imageUrl
              : `${product.imageUrl}`
          }
          alt="EV Charger"
          width={300}
          height={200}
          className="object-contain"
        />

        <div className="flex flex-col gap-4 px-4">
          {product.specifications && (
            <>
              <h2 className="text-2xl font-semibold">Specification</h2>
              {product.specifications.map((spec, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2">
                    <img
                      src={spec.icon}
                      alt={`${spec.label} icon`}
                      className="h-5 w-5 object-contain"
                    />
                    <h3 className="font-semibold">{spec.label}</h3>
                  </div>
                  <p className="ml-[1.78rem] whitespace-pre-line">
                    {spec.value}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex w-full flex-col gap-4 px-4">
          {product.downloads && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Downloads</h2>
              <ul className="space-y-2 text-gray-700">
                {product.downloads.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img
                      src={item.icon}
                      alt={`${item.label} icon`}
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-black">{item.label}</span>
                  </div>
                ))}
              </ul>
            </div>
          )}
          <br></br>
        </div>
      </section>
    </>
  );
}
