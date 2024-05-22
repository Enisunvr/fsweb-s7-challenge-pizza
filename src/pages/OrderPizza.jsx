import React, { useState } from "react";
import "./OrderPizza.css";
import Button from "../components/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function OrderPizza() {
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaDough, setPizzaDough] = useState("");
  const [orderNote, setOrderNote] = useState("");

  const [extras, setExtras] = useState({
    pepperoni: false,
    sosis: false,
    jambon: false,
    tavuk: false,
    sogan: false,
    domates: false,
    misir: false,
    sucuk: false,
    jalepeno: false,
    sarimsak: false,
    biber: false,
    ananas: false,
    kabak: false,
  });

  const extraPrice =
    Object.keys(extras).filter((key) => extras[key] === true).length * 5;

  const unitPrice = 85;

  const handleExtraChange = (event) => {
    setExtras((extras_) => ({
      ...extras_,
      [event.target.id]: event.target.checked,
    }));
  };

  const handleSizeChange = (event) => {
    setPizzaSize(event.target.value);
  };

  const handleDoughChange = (event) => {
    setPizzaDough(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "https://reqres.in/api/pizza",
      data: {
        isim: inputValue,
        boyut: pizzaSize,
        hamur: pizzaDough,
        malzemeler: Object.keys(extras).filter((key) => extras[key] === true),
        ozel: orderNote,
      },
    }).then((response) => {
      history.push("/success");
      console.log("Pizza Order Response", response.data);
    });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="order-page">
      <form onSubmit={handleFormSubmit}>
        <h1>Position Absolute Acı Pizza</h1>
        <div className="order-pizza-top">
          <span className="price">86,00 TL</span>
          <span className="rating">4.9</span>
          <span className="rate-count">(200)</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          perferendis doloribus officiis ab iusto ad enim! Dolorem magni quasi
          aut!
        </p>

        <div className="boyut-select">
          <div>
            <h3>
              Boyut Seç <span style={{ color: "red" }}>*</span>
            </h3>
            <div>
              <input
                type="radio"
                id="kucuk"
                value="kucuk"
                name="boyut"
                onChange={handleSizeChange}
                checked={pizzaSize === "kucuk"}
              />
              <label htmlFor="kucuk">Küçük</label>
            </div>
            <div>
              <input
                type="radio"
                id="orta"
                value="orta"
                name="boyut"
                onChange={handleSizeChange}
                checked={pizzaSize === "orta"}
              />
              <label htmlFor="orta">Orta</label>
            </div>
            <div>
              <input
                type="radio"
                id="buyuk"
                value="buyuk"
                name="boyut"
                onChange={handleSizeChange}
                checked={pizzaSize === "buyuk"}
              />
              <label htmlFor="buyuk">Büyük</label>
            </div>
          </div>

          <div className="hamur-select">
            <h3>
              Hamur Seç <span style={{ color: "red" }}>*</span>
            </h3>
            <select
              name="hamur-sec"
              onChange={handleDoughChange}
              value={pizzaDough}
            >
              <option>Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="orta">Orta</option>
              <option value="kalin">Kalın</option>
            </select>
          </div>
        </div>

        <div>
          <h3>
            Ek Malzemeler <span style={{ color: "red" }}>*</span>
          </h3>

          <p>En fazla 10 malzeme seçebilirsiniz. 5t</p>
        </div>

        {/* CHECKBOX ALANI */}

        <div className="check-select">
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.pepperoni}
              name="extra"
              id="pepperoni"
            />
            <label htmlFor="pepperoni">Pepperoni</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.sosis}
              name="extra"
              id="sosis"
            />
            <label htmlFor="sosis">Sosis</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.jambon}
              name="extra"
              id="jambon"
            />
            <label htmlFor="jambon">Kanada Jambonu</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.tavuk}
              name="extra"
              id="tavuk"
            />
            <label htmlFor="tavuk">Tavuk Izgara</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.sogan}
              name="extra"
              id="sogan"
            />
            <label htmlFor="sogan">Soğan</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.domates}
              name="extra"
              id="domates"
            />
            <label htmlFor="domates">Domates</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.misir}
              name="extra"
              id="misir"
            />
            <label htmlFor="misir">Mısır</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.sucuk}
              name="extra"
              id="sucuk"
            />
            <label htmlFor="sucuk">Sucuk</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.jalepeno}
              name="extra"
              id="jalepeno"
            />
            <label htmlFor="jalepeno">Jalepeno</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.sarimsak}
              name="extra"
              id="sarimsak"
            />
            <label htmlFor="sarimsak">Sarımsak</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.biber}
              name="extra"
              id="biber"
            />
            <label htmlFor="biber">Biber</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.ananas}
              name="extra"
              id="ananas"
            />
            <label htmlFor="ananas">Ananas</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleExtraChange}
              checked={extras.kabak}
              name="extra"
              id="kabak"
            />
            <label htmlFor="kabak">Kabak</label>
          </div>
        </div>

        {/*İNPUT ALANI  */}

        <p style={{ fontWeight: "bold", fontSize: "18px" }}>Sipariş Notu</p>

        <input
          style={{ marginBottom: "10px", padding: "5px 20px" }}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="İsminizi giriniz (en az 3 karakter)"
        />

        <textarea
          cols={15}
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          onChange={(event) => {
            setOrderNote(event.target.value);
          }}
          value={orderNote}
        ></textarea>

        {/* FOOTER ALANI  */}

        <footer className="order-pizza-footer">
          <div className="quantity">
            <Button
              text="-"
              style={{
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
              onClick={(event) => {
                event.preventDefault();

                setQuantity((quantity) => {
                  if (quantity === 1) {
                    return quantity;
                  }

                  return quantity - 1;
                });
              }}
            />
            <span className="value">{quantity}</span>
            <Button
              text="+"
              style={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
              onClick={(event) => {
                event.preventDefault();

                setQuantity((quantity) => {
                  if (quantity === 10) {
                    return quantity;
                  }

                  return quantity + 1;
                });
              }}
            />
          </div>

          <div className="order-summary">
            <section>
              <h4>Sipariş Özeti</h4>

              <div className="line">
                <span>Seçimler</span>
                <span>{extraPrice}₺</span>
              </div>

              <div className="line">
                <span>Toplam</span>
                <span>{(unitPrice + extraPrice) * quantity}₺</span>
              </div>
            </section>

            <Button
              text="SİPARİŞ VER"
              type="submit"
              disabled={
                !pizzaSize.length ||
                !pizzaDough.length ||
                extraPrice < 20 ||
                extraPrice > 50 ||
                inputValue.length < 3
              }
              style={{
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
              }}
            />
          </div>
        </footer>
      </form>
    </div>
  );
}
