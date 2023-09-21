import styles from "@/styles/BuyDetails.module.css";
import BuySummary from "./BuySummary";
import BuyDiscount from "./BuyDiscount";

const BuyDetails = ({
  selectedQuantity,
  setSelectedQuantity,
  selectedProduct,
}) => {
  console.log("quantity received buydetails" + selectedQuantity);
  console.log("Selected product in Buy details page: ", selectedProduct);

  const subtotal = selectedQuantity * (selectedProduct.price || 0);
  console.log("selectedQuantity" + selectedQuantity);
  console.log("subtotal" + subtotal);

  const handleDecreaseQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setSelectedQuantity(parseInt(selectedQuantity) + 1);
    console.log(
      "Selected Quantity is now an integer:",
      parseInt(selectedQuantity) + 1
    );
  };

  return (
    <div>
      <div className={styles.BuyDetailsMain}>
        <div className={styles.imageContainer7}></div>
        <div className={styles.BuyName}>
          <div className={styles.BuyNameMain}> {selectedProduct.name}</div>
          <div className={styles.BuyNameSub}>{selectedProduct.description}</div>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <div
                    className={styles.BuyDetailsButton}
                    onClick={handleDecreaseQuantity}
                  >
                    -
                  </div>
                </td>
                <td style={{ borderRight: "solid 2px #cccccc" }}></td>
                <td
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    color: "black",
                    marginTop: "10px",
                    marginBottom: "5px",
                    fontFamily: "'Telegraf Regular 400', sans-serif",
                    fontSize: "14px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  {selectedQuantity}
                </td>
                <td style={{ borderRight: "solid 2px #cccccc" }}></td>
                <td
                  style={{
                    textAlign: "center",
                    marginTop: "5px",
                    marginBottom: "5px",
                    fontSize: "15px",
                  }}
                >
                  <div
                    className={styles.BuyDetailsButton1}
                    onClick={handleIncrease}
                  >
                    +
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.BuyPrice}>₹{selectedProduct.price}</div>
      </div>
      <div className={styles.borderbottom}>&#160;</div>
      <BuyDiscount />
      <BuySummary subtotal={subtotal} />
    </div>
  );
};

export default BuyDetails;
