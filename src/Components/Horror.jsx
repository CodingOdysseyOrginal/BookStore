
import { categoryHorror } from "./Products";
import { Product } from "./Product";
import '@fontsource/creepster';

export default function Horror() {
  return (
    <section id="Horror" className="HorrorContainer">
        <h1><strong>Dive into the Depths of Horror</strong></h1>
        <div className="grid">
        {categoryHorror.map((product) => (
          <Product data ={product}/>
        ))}
      </div>
    </section>
  );
}
