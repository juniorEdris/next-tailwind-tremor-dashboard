import { Card } from "@tremor/react";
import Link from "next/link";
import React from "react";

const ItemCountCards = ({ item }) => {
  return (
    <div>
      <Link href={item?.route}>
        <Card className="hover:bg-gray-50 border border-primary text-primary">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="text-2xl font-medium">{item?.total}</div>
              <div className="text-2xl font-medium capitalize">
                {item?.label}
              </div>
            </div>
            <div className="text-5xl">{item?.icon}</div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ItemCountCards;
