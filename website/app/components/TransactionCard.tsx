import Image from "next/image";

interface TransactionCardProps {
  merchantName: string;
  totalAmount: string;
  amountOwed: string;
  date: string;
  merchantLogo: string;
  bankLogo: string;
  isOwedToYou?: boolean;
}

export default function TransactionCard({
  merchantName,
  totalAmount,
  amountOwed,
  date,
  merchantLogo,
  bankLogo,
  isOwedToYou = true
}: TransactionCardProps) {
  return (
    <div className="w-full max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
      <div className="flex items-center gap-6">
        {/* Left: Logos */}
        <div className="relative flex-shrink-0">
          <div className="relative h-24 w-24 overflow-hidden rounded-full bg-white/20">
            <Image
              src={merchantLogo}
              alt={merchantName}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Bank logo overlay on bottom right */}
          <div className="absolute bottom-0 right-0 h-10 w-10 overflow-hidden rounded-full border-2 border-white/30 bg-white">
            <Image
              src={bankLogo}
              alt="Bank"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Middle: Transaction details */}
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-2xl font-semibold text-black">
            {merchantName}
          </h3>
          <p className={`text-xl font-semibold ${isOwedToYou ? 'text-green-600' : 'text-red-600'}`}>
            {isOwedToYou ? "You're owed" : "You owe"} {amountOwed}
          </p>
        </div>

        {/* Right: Amount and date */}
        <div className="flex flex-col items-end gap-2">
          <p className="text-3xl font-bold text-black">
            {totalAmount}
          </p>
          <p className="text-lg text-gray-500">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}
