import ItemCountCards from "@/components/UI/ItemCountCards";
import { allInventories } from "@/utils/uiData";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={""}>
      <div className="p-4">
        <div className="grid grid-cols-4 gap-3">
          {allInventories.map((item) => (
            <ItemCountCards key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
