import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Midbody } from "../components/Midbody";

export default async function Home() {
  const productsResponse = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });
  const products = productsResponse.data;

  return (
    <div>
      <section>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h2 className={styles.heroTitle}>
              Welcome to our ecommerce store
            </h2>
            <p className={styles.heroDesc}>
              Shop our wide selection of products
            </p>
            <Button asChild variant="default" className={styles.heroBtn}>
              <Link href="/product">Our Products</Link>
            </Button>
          </div>
          <div className={styles.heroImg}>
            <Image alt="Banner" src={products[0].images[0]} width={220} height={220}/>

          </div>
        </div>
      </section>
      <section>
        <Midbody products={products}/>
      </section>
    </div>
  );
}
