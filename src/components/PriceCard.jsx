function PriceCard({ label, price }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="mt-1 text-xl font-bold text-green-700">
        {price}
        <span className="text-sm font-medium ml-1">টাকা</span>
      </p>
      <p className="mt-1 text-sm text-gray-600">প্রতি একক হিসাবে</p>
    </div>
  );
}

export default PriceCard;
