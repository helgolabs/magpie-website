import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-16 font-sans" style={{ background: 'linear-gradient(to bottom, #0B5A9F 0%, #0F80E1 50%, #3A9AE8 100%)' }}>
      <main className="flex w-full max-w-full flex-col items-center gap-16 overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16 md:gap-24 md:py-20">
        {/* Hero Section with Image and Transaction Card Overlay */}
        <div className="relative w-full">
          <div className="relative h-[550px] w-full overflow-hidden rounded-3xl md:h-[700px]">
            <Image
              src="/restaurant.jpg"
              alt="Friends dining together"
              width={1600}
              height={1600}
              priority
              className="h-full w-full object-cover"
              style={{ objectPosition: 'left top' }}
            />
            {/* Transaction Card Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0">
              <div className="rounded-3xl border border-white/20 bg-white/85 p-4 shadow-2xl backdrop-blur-l sm:p-6">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0 sm:h-16 sm:w-16">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-white sm:h-16 sm:w-16">
                      <Image
                        src="/belluccis-logo.png"
                        alt="Bellucci's"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Bank logo overlay */}
                    <div className="absolute bottom-0 right-0 h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-white sm:h-8 sm:w-8">
                      <Image
                        src="/natwest_logo 1.png"
                        alt="NatWest"
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <h3 className="truncate text-base font-bold text-black sm:text-xl">Bellucci's</h3>
                    <p className="truncate text-sm font-semibold text-green-600 sm:text-lg">You're owed £156.40</p>
                  </div>
                  <div className="ml-2 flex flex-shrink-0 flex-col items-end sm:ml-8">
                    <p className="whitespace-nowrap text-base font-bold text-black sm:text-xl">£183.20</p>
                    <p className="whitespace-nowrap text-sm font-regular text-black sm:text-base">17 Nov</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="w-full text-center">
          <h1 className="text-2xl font-medium leading-relaxed text-white sm:text-3xl md:text-6xl">
            Because 'who owes what' should feel like this.
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 text-base font-medium sm:flex-row">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-105"
          >
            <Image
              src="/GetItOnGooglePlay_Badge_Web_color_English.svg"
              alt="Get it on Google Play"
              width={240}
              height={72}
              className="h-auto w-40 sm:w-48 md:w-55"
            />
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-105"
          >
            <Image
              src="/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg"
              alt="Pre-order on the App Store"
              width={240}
              height={72}
              className="h-auto w-40 sm:w-44"
            />
          </a>
        </div>

        {/* Feature Sections - Alternating Layout */}

        {/* Section 1: App Screenshot - Image Left */}
        <div className="flex w-full max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:gap-48">
          <div className="w-full md:w-1/2">
            <div className="mx-auto max-w-sm">
              <Image
                src="/add-expense.png"
                alt="Add expense screen"
                width={600}
                height={1200}
                quality={100}
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full space-y-6 md:w-1/2">
            <h2 className="text-center text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              All your spending. Every card. Every bank account.
            </h2>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Connect your credit cards and bank accounts from nearly all of the UK banks, building societies and credit cards so that magpie can track your spending automatically
            </p>
          </div>
        </div>

        {/* Section 2: Lifestyle Image - Image Right */}
        <div className="flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-4 md:flex-row md:gap-48">
          <div className="w-full space-y-6 md:w-1/2">
            <h2 className="text-center text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              All your spending. Every card. Every bank account.
            </h2>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Connect your credit cards and bank accounts from nearly all of the UK banks, building societies and credit cards so that magpie can track your spending automatically
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/men-on-car.jpg"
                alt="Friends on a road trip"
                width={1000}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Lifestyle Image - Image Left */}
        <div className="flex w-full max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:gap-48">
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/couple-in-car.jpg"
                alt="A couple driving in a car, the passenger taking a photo on her phone out of the windscreen."
                width={1000}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full space-y-6 md:w-1/2">
            <h2 className="text-center text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              All your spending. Every card. Every bank account.
            </h2>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Connect your credit cards and bank accounts from nearly all of the UK banks, building societies and credit cards so that magpie can track your spending automatically
            </p>
          </div>
        </div>

        {/* Section 4: Group Details Screen - Image Right */}
        <div className="flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-4 md:flex-row md:gap-48">
          <div className="w-full space-y-6 md:w-1/2">
            <h2 className="text-center text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              All your spending. Every card. Every bank account.
            </h2>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Connect your credit cards and bank accounts from nearly all of the UK banks, building societies and credit cards so that magpie can track your spending automatically
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="mx-auto max-w-sm">
              <Image
                src="/group-details.png"
                alt="The group details screen from Magpie, showing a group image and the list of split transactions."
                width={600}
                height={1200}
                quality={100}
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex gap-6 text-sm text-white/60">
          <a href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="transition-colors hover:text-white">
            Terms of Service
          </a>
        </div>
      </main>
    </div>
  );
}
