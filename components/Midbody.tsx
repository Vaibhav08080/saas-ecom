"use client";
import { useEffect, useState } from "react"
import Stripe from "stripe"
import { Card } from "./ui/card";
import Image from "next/image";

interface props{
    products:Stripe.Product[]
}

export const Midbody = ({ products }: props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!products || products.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products && products.length]);

  if (!products || products.length === 0) {
    return null; // Render nothing if there are no products
  }

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card>
      {currentProduct.images && currentProduct.images[0] && (
        <div style={{ position: 'relative', width: '300px', height: '300px' }}>
          <Image
            alt={currentProduct.name}
            src={currentProduct.images[0]}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </Card>
  );
};