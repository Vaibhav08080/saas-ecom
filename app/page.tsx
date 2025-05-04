import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });

  return (
    <div>
      <section>
        <div>
          <div>
            <h2>
              Welcome to our ecommerce store
            </h2>
            <p>
              Shop our wide selection of products
            </p>
            <Button asChild variant="default">
              <Link href="/product">Our Products</Link>
            </Button>
           
          </div>
          <Image alt="Banner" src={products.data[0].images[0]} width={500} height={500}/>
        </div>
      </section>
    </div>
  );
}
